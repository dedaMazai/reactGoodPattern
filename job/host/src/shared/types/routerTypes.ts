import { RouteProps } from "react-router-dom";
import { UserRole } from "@/entities/User";

export type AppRoutersProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}

export enum AppRouters {
    MAIN = "main",
    FORBIDDEN = "forbidden",
    DIGITAL_TWIN = "digital_twin",
    // last
    NOT_FOUND = "not_found"
}