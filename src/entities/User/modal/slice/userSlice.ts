import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { removeCookie } from 'typescript-cookie';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorages';
import { UserSchema, User } from '../types/user';

const initialState: UserSchema = {
    refreshNow: false,
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            // выполняется при авторизации, приходят данные пользователя и токены
        },
        setAccess: (state, action: PayloadAction<string>) => {
            state.authData = { ...state.authData, access_token: action.payload };
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
            state._inited = true;
            // выполняется при перезагрузке странице если пользователь авторизован, и в session хранится user и acces token
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            removeCookie('access_token');
            removeCookie('refresh_token');
            removeCookie('finger_key');
            // выход
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
