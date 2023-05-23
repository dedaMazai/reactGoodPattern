import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
    AppRouters,
    getRouteMain,
} from '@/shared/const/router';
import { AppRoutersProps } from '@/shared/types/router';

export const routeConfig: Record<AppRouters, AppRoutersProps> = {
    [AppRouters.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
        authOnly: true,
    },
    [AppRouters.FORBIDDEN]: {
        path: getRouteMain(),
        element: <ForbiddenPage />,
        authOnly: true,
    },
    [AppRouters.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
