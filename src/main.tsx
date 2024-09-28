import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./context/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline>
      <StyledEngineProvider injectFirst>
        <StoreProvider store={store}>
          <App />
        </StoreProvider>
      </StyledEngineProvider>
    </CssBaseline>
  </StrictMode>
);
