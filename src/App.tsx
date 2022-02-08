import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

import Home from "./pages/home";
import CardInformations from "./pages/cardInformations";

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
            </Routes>
            <GlobalStyle />
        </BrowserRouter>
    );
}

export default App;
