/**************************************************************************************
 *  Objetivo: Page Not Found
 *  Autor: Luiz Gustavo
 *  Data: 17/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import ButtonRose from "../../components/ButtonRose"
import '../../css/not-found.css'

function NotFound() {
    return(
        <div className="not-found">
            <div className="container-not-found">
                <h1>Ops parece que essa página não existe !</h1>
                <h1>Volte para o Home</h1>
                <div><ButtonRose /></div>
            </div>
        </div>
    )
}

export default NotFound
