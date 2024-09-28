import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </CssBaseline>
  </StrictMode>
);
