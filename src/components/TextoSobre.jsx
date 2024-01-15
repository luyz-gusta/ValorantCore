/**************************************************************************************
 *  Objetivo: Component Texto
 *  Autor: Luiz Gustavo
 *  Data: 15/01/2023
 *  Versão: 1.0
 **************************************************************************************/

function TextoSobre({text, classText}) {
    return (
        <p className={classText}> {text} </p>
    )
}

export default TextoSobre;
