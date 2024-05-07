import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import GlobalStyles from "./global";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStyles />
        <Login />
    </React.StrictMode>
);
