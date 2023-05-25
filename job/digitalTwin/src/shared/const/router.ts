import { AppRouters } from "../types/routerTypes";

const RoutePath: Record<AppRouters, () => string> = {
    [AppRouters.MAIN]: () => '/',
    [AppRouters.FORBIDDEN]: () => '/forbidden',
    [AppRouters.HANDSONTABLE]: () => '/handsontable',
    // last
    [AppRouters.NOT_FOUND]: () => '*',
};

export default RoutePath;