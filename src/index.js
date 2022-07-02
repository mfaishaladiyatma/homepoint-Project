import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AddressProvider from "./context/context.js";
import App from "./App";
import { Provider } from "react-redux";
import { persistor, store } from "./components/store";
import { PersistGate } from "redux-persist/integration/react";

const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AddressProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AddressProvider>
    </PersistGate>
  </Provider>
  </React.StrictMode>
);
