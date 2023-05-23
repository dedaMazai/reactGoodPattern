import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { CombinedState, Reducer } from 'redux';
import { userReducer } from '@/entities/User';
import { rtqApi } from '@/shared/api/rtqApi';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { loginReducer } from '@/features/AuthByUserName';
import { twoFAReducer } from '@/features/TwoFAConfirm';
import { createOfferReducer } from '@/features/CreateOffer';
import { allOrdersTableReducer } from '@/widgets/AllOrdersTable';
import { replenishReducer } from '@/features/replenish';
import { tokenApiReducer } from '@/widgets/TokenApi';
import { uploadReceiptReducer } from '@/features/UploadReceipt';
import { appealsReducer } from '@/widgets/Appeals';
import { viewReducer } from '@/features/ToggleButtonGroup';
import { showPictureReducer } from '@/features/ShowPicture';
import { historyTableReducer } from '@/widgets/HistoryTable';
import { userStatReducer } from '@/widgets/UserStat';
import { requisitesTableReducer } from '@/widgets/RequisitesTable';
import { createRequisitesReducer } from '@/features/CreateRequisites';
import { changePasswordReducer } from '@/features/ChangePasswordButton';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        view: viewReducer,
        loginForm: loginReducer,
        twoFAForm: twoFAReducer,
        createOffer: createOfferReducer,
        allOrdersTable: allOrdersTableReducer,
        replenish: replenishReducer,
        changePassword: changePasswordReducer,
        tokenApi: tokenApiReducer,
        uploadReceipt: uploadReceiptReducer,
        appeals: appealsReducer,
        showPicture: showPictureReducer,
        historyTable: historyTableReducer,
        userStat: userStatReducer,
        requisitesTable: requisitesTableReducer,
        createRequisites: createRequisitesReducer,
        [rtqApi.reducerPath]: rtqApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(rtqApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

// const storeReturn = createReduxStore();
// export type AppDispatch = typeof storeReturn.dispatch;
// или
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
