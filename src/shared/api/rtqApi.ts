import { setCookie, getCookie } from 'typescript-cookie';
import { Mutex } from 'async-mutex';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { userActions, UserSchema } from '@/entities/User';

const mutex = new Mutex();
const baseQueryWithReAuth: BaseQueryFn<
    FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    await mutex.waitForUnlock();
    const state = api.getState() as {user: UserSchema};
    const baseQuery = fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = getCookie('access_token');
            const fingerKey = getCookie('finger_key');
            if (token) {
                headers.set('AccessToken', token);
            }
            if (fingerKey) {
                headers.set('FingerKey', fingerKey);
            }
            return headers;
        },
    });
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result?.error?.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const { data }: any = await baseQuery({
                    url: '/user/refresh',
                    method: 'POST',
                    headers: {
                        RefreshToken: getCookie('refresh_token'),
                        FingerKey: getCookie('finger_key'),
                    },
                }, api, extraOptions);

                if (data) {
                    setCookie('access_token', data?.result?.access_token);
                    setCookie('refresh_token', data?.result?.refresh_token);
                    api.dispatch(userActions.setAccess(data?.result?.access_token));
                    result = await baseQuery(args, api, extraOptions);
                } else {
                    api.dispatch(userActions.logout());
                }
            } finally {
                release();
            }
        } else {
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }
    return result;
};

export const rtqApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReAuth,
    tagTypes: [
        'MainPage',
    ],
    endpoints: (builder) => ({}),
});
