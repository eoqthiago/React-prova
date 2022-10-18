import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Libras from "./pages/libras"
import Home from "./pages/acai/App.js"
import Sorv from "./pages/sorverte"
import SalarioLIquido from "./pages/salario-liquido"
import Consumo from "./pages/tanque-carro"
import Termometro from "./pages/temperatura"
import NumerosNaturais from "./pages/numerosNaturais"
import Pattern from "./pages/pattern"
import PatternToo from "./pages/pattern2"


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/lIbras" exact element={<Libras />} />
                <Route path="/sorv" exact element={<Sorv />} />
                <Route path="/salario" exact element={<SalarioLIquido />} />
                <Route path="/tanque" exact element={<Consumo/>} />
                <Route path="/temperatura" exact element={<Termometro/>} />
                <Route path="/numerosNaturais" exact element={<NumerosNaturais/>} />
                <Route path="/pattern" exact element={<Pattern/>} />
                <Route path="/pattern2" exact element={<PatternToo/>} />
            </Routes>
        
        </BrowserRouter>
    );

}

export default Rotas;