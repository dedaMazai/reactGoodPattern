import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { App } from "./app/App";

import "@/app/styles/index.scss";
import "@/shared/config/i18/i18n";

const container = document.getElementById("root");

if (!container) {
    throw new Error("Контейнер root не найден, НЕ удалось вмонтировать React app");
}

const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
