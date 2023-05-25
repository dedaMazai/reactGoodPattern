import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "@/app/providers/router";
import { PageLoader } from "@/shared/ui/PageLoader";
import { getUserInited, userActions } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

export const App = () => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames("appHost", {}, [])}>
            <Suspense fallback={<PageLoader />}>
                <div className="host-page">
                    {inited && (
                        <AppRouter />
                    )}
                </div>
            </Suspense>
        </div>
    );
};
