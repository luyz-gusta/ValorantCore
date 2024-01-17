/**************************************************************************************
 *  Objetivo: Button Rose
 *  Autor: Luiz Gustavo
 *  Data: 17/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import { Link } from 'react-router-dom'
import '../css/button-valorant.css'

function ButtonRose() {
    return (
        <Link to='/' class="btn btn--rose">
            <span class="btn__inner">
                <span class="btn__slide"></span>
                <span class="btn__content">Home</span>
            </span>
        </Link>

    )
}

export default ButtonRose
