import React from "react";
import ReactDOM from "react-dom/client";

/* styles */
import "./styles/index.css";
import "./styles/normalize.css";

/* redux */
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>
);
