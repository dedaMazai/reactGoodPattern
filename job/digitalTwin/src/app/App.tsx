import { Suspense } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "@/app/providers/router";
import { Navbar } from "@/widgets/Navbar";
import { PageLoader } from "@/shared/ui/PageLoader";
import { StoreProvider } from "./providers/StoreProvider";
import { ErrorBoundary } from "./providers/ErrorBoundary";

const App = () => {

    return (
        <StoreProvider>
            <ErrorBoundary>
                <div className={classNames("appDigitalTwin", {}, [])}>
                    <Suspense fallback={<PageLoader />}>
                        <Navbar />
                        <div className="digitalTwin-page">
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            </ErrorBoundary>
        </StoreProvider>
    );
};

export default App;