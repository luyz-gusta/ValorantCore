/**************************************************************************************
 *  Objetivo: Rota
 *  Autor: Luiz Gustavo
 *  Data: 12/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import { Link } from "react-router-dom"
import '../css/header.css'

function Rota({ rota, ativo, nomeRota, onClick}) {
    const classeBotao = ativo ? 'link-header-enable' : 'link-header-disable';

    return (
        <Link to={rota} className={classeBotao} onClick={() => onClick(rota)}>{nomeRota}</Link>
    )
}

export default Rota