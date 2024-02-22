/**************************************************************************************
 *  Objetivo: Imagem Agente
 *  Autor: Luiz Gustavo
 *  Data: 22/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import '../css/agentes.css'

const ImagemAgente = ({ imagem }) => {
    const style = {
       backgroundImage: `url("${imagem}")`,
    }


    return (
        <span className='img-agente' style={style}></span>
    )

}

export default ImagemAgente
