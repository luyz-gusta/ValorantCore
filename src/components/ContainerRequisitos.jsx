/**************************************************************************************
 *  Objetivo: Container de agentes
 *  Autor: Luiz Gustavo
 *  Data: 17/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import ListaRequisito from "./ListaRequisito";

const ContainerRequisitos = () => {
    return (
        <div className="container-requisitos">
            <ListaRequisito
                subtitulo="Requisitos mínimos - 30fps"
                processador="Intel Core 2 Duo E8400 ou AMD Athlon 200GE"
                placaVideo="Intel HD 4000 ou AMD Radeon R5 200 com 1gb de vram"
                memoriaRam="4GB"
                armazenamento="50GB mínimo"
            />
            <ListaRequisito
                subtitulo="Requisitos recomendados - 60fps"
                processador="Intel i3-4150 ou AMD Ryzen 3 1200"
                placaVideo="GeForce GT 730 ou AMD Radeon R7 240 com 1GB de vram"
                memoriaRam="4GB"
                armazenamento="50GB mínimo"
            />
            <ListaRequisito
                subtitulo="Requisitos premium - +144fps"
                processador="Intel i5-9400F 2.9GHz ou AMD Ryzen 5 2600X"
                placaVideo="GTX 1050 Ti ou Radeon R7 370 com 1GB de vram"
                memoriaRam="8GB"
                armazenamento="50GB mínimo"
            />
        </div>
    )
}

export default ContainerRequisitos;