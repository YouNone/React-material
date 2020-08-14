import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
