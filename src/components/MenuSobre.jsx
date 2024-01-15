/**************************************************************************************
 *  Objetivo: Menu, Page Sobre
 *  Autor: Luiz Gustavo
 *  Data: 15/01/2023
 *  Versão: 1.0
 **************************************************************************************/

function MenuSobre() {
    return (
        <nav className="menu-sobre">
            <ul className="options">
                <li className="item"><a href="#sec-inicio" className="opcao" aria-label='#' id='inicio'>Início</a></li>
                <li className="item"><a href="www" className="opcao" aria-label='#' id='oque'>O que é</a></li>
                <li className="item"><a href="www" className="opcao" aria-label='#' id='requisitos'>Requisitos</a></li>
                <li className="item"><a href="www" className="opcao" aria-label='#' id='como-jogar'>Como Jogar</a></li>
            </ul>
        </nav>
    )
}

export default MenuSobre;
