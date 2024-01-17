/**************************************************************************************
 *  Objetivo: Organizador e manipulador das rotas
 *  Autor: Luiz Gustavo
 *  Data: 12/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Agentes from "./pages/Agentes";
import Mapas from "./pages/Mapas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './css/reset.css'
import NotFound from "./pages/Error";

function RoutesApp() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/agentes" element={<Agentes />} />
                    <Route path="/mapas" element={<Mapas />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default RoutesApp
