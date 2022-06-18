import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AddressProvider from "./context/context.js";
import App from "./App";
import { Provider } from "react-redux";
import store from "./components/store";

const root = createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <AddressProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AddressProvider>
  </Provider>
);
