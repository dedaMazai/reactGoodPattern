import { Suspense } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "@/app/providers/router";
import { Navbar } from "@/widgets/Navbar";
import { PageLoader } from "@/shared/ui/PageLoader";

export const App = () => {

    return (
        <div className={classNames("appDigitalTwin", {}, [])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="digitalTwin-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
