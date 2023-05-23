import { EnhancedStore } from '@reduxjs/toolkit';
import { UserSchema } from '@/entities/User';
import { rtqApi } from '@/shared/api/rtqApi';
import { ReducerManager } from './reducerManager';
import { CounterSchema } from '@/entities/Counter';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema;

    [rtqApi.reducerPath]: ReturnType<typeof rtqApi.reducer>,
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}
