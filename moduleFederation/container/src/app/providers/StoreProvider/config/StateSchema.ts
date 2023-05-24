import { UserSchema } from "@/entities/User";
import { rtqApi } from "@/shared/api/rtqApi";
import { CounterSchema } from "@/entities/Counter";

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema;

    [rtqApi.reducerPath]: ReturnType<typeof rtqApi.reducer>,
}

export type StateSchemaKey = keyof StateSchema;
