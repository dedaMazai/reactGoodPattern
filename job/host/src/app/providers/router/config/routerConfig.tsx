import { lazy } from "react";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { AppRouters, AppRoutersProps } from "@/shared/types/routerTypes";
import RoutePath from "@/shared/const/router";

const DigitalTwin = lazy(() => import("digitalTwin/DigitalTwin"));

export const routeConfig: Record<AppRouters, AppRoutersProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath.main(),
        element: <MainPage />,
        // authOnly: true,
    },
    [AppRouters.FORBIDDEN]: {
        path: RoutePath.forbidden(),
        element: <ForbiddenPage />,
        // authOnly: true,
    },
    [AppRouters.DIGITAL_TWIN]: {
        path: RoutePath.digital_twin(),
        element: <DigitalTwin />,
        // authOnly: true,
    },
    [AppRouters.NOT_FOUND]: {
        path: RoutePath.not_found(),
        element: <NotFoundPage />,
    },
};
