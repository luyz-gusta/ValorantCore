/**************************************************************************************
 *  Objetivo: Lista de requisitos
 *  Autor: Luiz Gustavo
 *  Data: 17/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import Requisito from "./Requito";
import SubTituloSobre from "./SubTituloSobre";

const ListaRequisito = ({subtitulo, processador, placaVideo, memoriaRam, armazenamento}) => {
    return (
        <div className="box-requisito">
            <SubTituloSobre subtitulo={subtitulo}/>
            <ul className="lista-requisitos">
                <Requisito nomeRequisito="Processador" valorRequisito={processador} />
                <Requisito nomeRequisito="GPU" valorRequisito={placaVideo} />
                <Requisito nomeRequisito="Memória RAM" valorRequisito={memoriaRam} />
                <Requisito nomeRequisito="Armazenamento disponível" valorRequisito={armazenamento} />
            </ul>
        </div>
    );
}

export default ListaRequisito;