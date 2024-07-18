import React from "react";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";
import { store } from "./store/store";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
