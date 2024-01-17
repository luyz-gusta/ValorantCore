/**************************************************************************************
 *  Objetivo: Requisito
 *  Autor: Luiz Gustavo
 *  Data: 17/01/2023
 *  Versão: 1.0
 **************************************************************************************/

const Requisito = ({nomeRequisito, valorRequisito}) => {
    return (
        <li className="requisito">
            <div className="txt"><strong className="nome-requisito">{nomeRequisito}:</strong><p className="valor-requisito"> {valorRequisito}</p> </div>
        </li>
    );
}

export default Requisito;