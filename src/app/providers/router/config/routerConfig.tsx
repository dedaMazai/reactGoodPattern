import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
    AppRouters,
    getRouteForbidden,
    getRouteMain,
} from '@/shared/const/router';
import { AppRoutersProps } from '@/shared/types/router';

export const routeConfig: Record<AppRouters, AppRoutersProps> = {
    [AppRouters.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
        // authOnly: true,
    },
    [AppRouters.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
        // authOnly: true,
    },
    [AppRouters.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
