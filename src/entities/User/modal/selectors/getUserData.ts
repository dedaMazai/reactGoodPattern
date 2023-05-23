import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserInited = (state: StateSchema) => state.user._inited;
export const getUserAuthData = (state: StateSchema) => state.user.authData;

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const getFingerKey = (state: StateSchema) => state.user.authData?.finger_key || '';
