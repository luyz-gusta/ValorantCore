/**************************************************************************************
 *  Objetivo: Card Agente
 *  Autor: Luiz Gustavo
 *  Data: 12/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import '../css/agentes.css'
import ImagemAgente from './ImagemAgente'

const CardAgente = ({ agente, key }) => {
    const style_bloco = {
        background: `linear-gradient(180deg, #${agente.backgroundGradientColors[2]} 0%, #${agente.backgroundGradientColors[0]} 89%)`
    }

    const style_nome_agente = {
        background: `linear-gradient(360deg, #${agente.backgroundGradientColors[1]} 4.01%, rgba(85, 127, 140, 0) 97.62%)`,
        backdropFilter: 'blur(.4px)',
    }


    return (
        <div className='card-agente' key={key}>
            <div className='bloco-agente' style={style_bloco}>
                {/* <img src={agente.fullPortrait} alt={agente.displayName} className='img-agente' /> */}
                <ImagemAgente imagem={agente.fullPortrait}/>
                <strong style={style_nome_agente} className='nome-agente'>{agente.displayName}</strong>
            </div>
            <div className="categoria-agente">{agente.role.displayName}</div>
        </div>
    )

}

export default CardAgente
