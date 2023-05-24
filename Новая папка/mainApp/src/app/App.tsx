import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "@/app/providers/router";
import { Navbar } from "@/widgets/Navbar";
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
        <div className={classNames("app", {}, [])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    {inited && (
                        <AppRouter />
                    )}
                </div>
            </Suspense>
        </div>
    );
};
