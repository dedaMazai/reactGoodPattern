import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useCallback } from 'react';
import { BrowserView } from 'react-device-detect';
import { AppRoutersProps, routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/shared/ui/PageLoader';
import { RequireAuth } from './RequireAuth';
import { Sidebar } from '@/widgets/Sidebar';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutersProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <BrowserView>
                    {route.withSidebar && <Sidebar />}
                </BrowserView>
                <div className="content-page">
                    {route.element}
                </div>
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth role={route.role}>{element}</RequireAuth> : element}
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
