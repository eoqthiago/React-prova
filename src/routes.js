import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Libras from "./pages/libras"
import Home from "./pages/acai/App.js"
import Sorv from "./pages/sorverte"




const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/lIbras" exact element={<Libras />} />
                <Route path="/sorv" exact element={<Sorv />} />
            </Routes>
        
        </BrowserRouter>
    );

}

export default Rotas;