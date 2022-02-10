import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Loader from "./components/Loader";
import "animate.css";

import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            {/* <Loader /> */}
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
