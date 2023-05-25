import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getUserAuthData, getUserRoles, UserRole } from "@/entities/User";
import RoutePath from "@/shared/const/router";

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const location = useLocation();
    const auth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);

    const hasRequireRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!hasRequireRoles) {
        return <Navigate to={RoutePath.forbidden()} state={{ from: location }} replace />;
    }

    return children;
}
