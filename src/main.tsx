import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { Provider as StoreProvider } from "react-redux";
import { persistor, store } from "./context/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/Loading/Loading.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline>
      <StyledEngineProvider injectFirst>
        <StoreProvider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <App />
          </PersistGate>
        </StoreProvider>
      </StyledEngineProvider>
    </CssBaseline>
  </StrictMode>
);
