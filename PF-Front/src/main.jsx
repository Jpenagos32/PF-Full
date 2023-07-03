import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DateProvider } from "./Context/DateContex.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <DateProvider>
            <CssBaseline>
                <App />
            </CssBaseline>
            </DateProvider>
        </BrowserRouter>
    </Provider>
);
