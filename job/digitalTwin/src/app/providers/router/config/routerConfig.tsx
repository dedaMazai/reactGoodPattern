import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { HandsontablePage } from "@/pages/HandsontablePage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import RoutePath from "@/shared/const/router";
import { AppRouters, AppRoutersProps } from "@/shared/types/routerTypes";

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
    [AppRouters.HANDSONTABLE]: {
        path: RoutePath.handsontable(),
        element: <HandsontablePage />,
        // authOnly: true,
    },
    [AppRouters.NOT_FOUND]: {
        path: "*",
        element: <NotFoundPage />,
    },
};
