import { UserRole } from '../const/userConst';

export interface User {
    finger_key?: string;
    refresh_token?: string;
    access_token?: string;
    otp?: string;
    roles?: UserRole[];
}

export interface UserSchema {
    authData?: User;
    refreshNow?: boolean;

    _inited: boolean;
}
