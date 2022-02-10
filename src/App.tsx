import "./styles/animate.css";
import Home from "./pages/home";
import GlobalStyle from "./styles/GlobalStyle";
import EditCardInformations from "./pages/editCard";
import CardInformations from "./pages/cardInformations";
import SubCardInformations from "./pages/subCardInformations";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
