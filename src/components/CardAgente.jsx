/**************************************************************************************
 *  Objetivo: Card Agente
 *  Autor: Luiz Gustavo
 *  Data: 12/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import '../css/agentes.css'

function CardAgente() {
    return (
        <div className="character-card character-card__border-bottom">
            <div className="character-card__image-container">
                <img
                    src={require('../assets/jett.png')}
                    alt={`illustration`}
                    className="character-card__image"
                />
            </div>
            <div className="character-card__info">
                <h2 className="character-card__name">JETT</h2>
                <p className="character-card__role">Duelista</p>
            </div>
            <div className="character-card__border-top" />
        </div>

    )
}

export default CardAgente
