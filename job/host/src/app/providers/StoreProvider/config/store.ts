import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "@/entities/User";
import { rtqApi } from "@/shared/api/rtqApi";
import { StateSchema } from "./StateSchema";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        [rtqApi.reducerPath]: rtqApi.reducer,
    };

    const store = configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtqApi.middleware),
    });

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
