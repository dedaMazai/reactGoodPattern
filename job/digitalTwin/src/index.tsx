import { createRoot } from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";

import "@/app/styles/index.scss";
import "@/shared/config/i18/i18n";

const container = document.getElementById("rootDigitalTwin");

if (!container) {
    throw new Error("Контейнер root не найден, НЕ удалось вмонтировать React app");
}

const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
