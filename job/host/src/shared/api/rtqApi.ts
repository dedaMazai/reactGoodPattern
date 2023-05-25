import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReAuth from "./baseQueryWithReAuth";

export const rtqApi = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithReAuth,
    tagTypes: ["MainPage"],
    endpoints: (builder) => ({}),
});
