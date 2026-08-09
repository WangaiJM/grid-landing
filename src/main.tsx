import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { NavProvider } from "./context/NavProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavProvider>
      <App />
    </NavProvider>
  </StrictMode>,
);
