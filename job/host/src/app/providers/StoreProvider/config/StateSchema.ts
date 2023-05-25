import { UserSchema } from "@/entities/User";
import { rtqApi } from "@/shared/api/rtqApi";

export interface StateSchema {
    user: UserSchema;

    [rtqApi.reducerPath]: ReturnType<typeof rtqApi.reducer>,
}

export type StateSchemaKey = keyof StateSchema;
