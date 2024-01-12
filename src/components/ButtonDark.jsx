/**************************************************************************************
 *  Objetivo: Botões
 *  Autor: Luiz Gustavo
 *  Data: 12/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import '../css/button-valorant.css'

function ButtonDark() {
    return (
        <button class="btn btn--light" onClick={() => window.location.href = "https://playvalorant.com/pt-br/download/"}>
            <span class="btn__inner">
                <span class="btn__slide"></span>
                <span class="btn__content">Baixar</span>
            </span>
        </button>
    )
}

export default ButtonDark
