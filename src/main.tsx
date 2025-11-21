import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvaider } from "./ThemeProvider.tsx";
import { MainRoutes } from "./MainRoutes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvaider>
      <MainRoutes />
    </ThemeProvaider>
  </StrictMode>
);
