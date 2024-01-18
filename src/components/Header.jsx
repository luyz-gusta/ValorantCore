/**************************************************************************************
 *  Objetivo: Header
 *  Autor: Luiz Gustavo
 *  Data: 12/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import '../css/header.css'
import React, {useState} from "react";
import Rota from "./Rota";
import { useLocation } from 'react-router-dom';


function Header(){
    const rotaAtual = useLocation()
    const [rotaAtiva, setRotaAtiva] = useState(rotaAtual.pathname)

    const handleClick = (rota) => {
        setRotaAtiva(rota)
    }

    return(
        <header>
            <img src={require('../assets/logo-riot.png')} alt="logo da empresa riot games" />
            <nav>
             <Rota rota={"/"} ativo={rotaAtiva === '/'} onClick={handleClick} nomeRota={"Home"}/>
             <Rota rota={"/sobre"} ativo={rotaAtiva === '/sobre'} onClick={handleClick} nomeRota={"Sobre"}/>
             <Rota rota={"/agentes"} ativo={rotaAtiva === '/agentes'} onClick={handleClick} nomeRota={"Agentes"}/>
             <Rota rota={"/mapas"} ativo={rotaAtiva === '/mapas'} onClick={handleClick} nomeRota={"Mapas"}/>
            </nav>
        </header>
    )
}  

export default Header
