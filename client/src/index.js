import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter>
        <App />
        {/* Notifications - Toast Provider */}
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #7F5EE4",
              padding: "16px",
              color: "#7F5EE4",
            },
          }}
        />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
