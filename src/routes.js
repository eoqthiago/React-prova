import { BrowserRouter, Router, Route } from "react-router-dom";
import React from "react";

import Acai from "./pages/calcularAcai"



const Rotas = () => {
    return (
        <BrowserRouter>
            <Router>
                <Route component={Acai} path="/acai" exact/>
            </Router>
        
        </BrowserRouter>
    );

}

export default Rotas;