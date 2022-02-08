import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
            </Routes>
            <GlobalStyle />
        </BrowserRouter>
    );
}

export default App;
