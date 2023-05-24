import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

if (!container) {
    throw new Error("Контейнер root не найден, НЕ удалось вмонтировать React app");
}

const root = createRoot(container);
root.render(<App />);
