import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

import Home from "./pages/home";

import CardInformations from "./pages/cardInformations";
import SubCardInformations from "./pages/subCardInformations";
import EditCardInformations from "./pages/editCard";
import "./styles/animate.css";

import axios from "axios";
import md5 from "md5";
import { useEffect } from "react";

function App() {
    // const baseURL = "http://gateway.marvel.com/v1/public/character?";

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route
                    path="/card-informations"
                    element={<CardInformations />}
                />
                <Route
                    path="/sub-card-informations"
                    element={<SubCardInformations />}
                />
                <Route
                    path="/edit-informations"
                    element={<EditCardInformations />}
                />
            </Routes>
            <GlobalStyle />
        </BrowserRouter>
    );
}

export default App;
