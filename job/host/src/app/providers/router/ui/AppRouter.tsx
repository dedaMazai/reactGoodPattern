import { Route, Routes } from "react-router-dom";
import { memo, Suspense, useCallback } from "react";
import { PageLoader } from "@/shared/ui/PageLoader";
import { RequireAuth } from "./RequireAuth";
import { AppRoutersProps } from "@/shared/types/routerTypes";
import { routeConfig } from "../config/routerConfig";

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutersProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
