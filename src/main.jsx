import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./App.css";
App;
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import rootReducer from "./reducer";

// const store = configureStore({
//   // reducer: rootReducer,
// });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </Provider> */}
  </StrictMode>
);
