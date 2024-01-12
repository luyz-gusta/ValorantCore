/**************************************************************************************
 *  Objetivo: Botões
 *  Autor: Luiz Gustavo
 *  Data: 12/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import '../css/button-valorant.css'
import { Link } from 'react-router-dom'

function ButtonLight() {
    return (
        <Link to="/mapas" className="btn">
            <span class="btn__inner">
                <span class="btn__slide"></span>
                <span class="btn__content">Saber mais</span>
            </span>
        </Link>
    )
}

export default ButtonLight
