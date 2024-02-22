/**************************************************************************************
 *  Objetivo: Card Mapa
 *  Autor: Luiz Gustavo
 *  Data: 12/01/2023
 *  Versão: 1.0
 **************************************************************************************/

function CardMapa({mapa}) {
    return (
        <div className='card-mapa'>
            <img src={mapa.splash} alt="imagem do mapa" className='mapa-inteiro'/>
            <strong className='nome-mapa'>{mapa.displayName}</strong>
            <div className="map-hover">
                <div className="maps">
                    <img src={mapa.displayIcon ? mapa.displayIcon : require('../assets/no-image-big.webp')} alt="mapa" className='maior'/>
                    <img src={mapa.listViewIconTall ? mapa.listViewIconTall : require('../assets/no-image-small.webp')} alt="mini-map" className='menor'/>
                </div>
                <div className='name-maps'>{mapa.displayName}</div>
            </div>
        </div>
    )
}

export default CardMapa
