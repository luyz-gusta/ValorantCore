/**************************************************************************************
 *  Objetivo: Page home
 *  Autor: Luiz Gustavo
 *  Data: 12/01/2023
 *  Versão: 1.0
 **************************************************************************************/
import '../../css/home.css'
import '../../css/button-valorant.css'
import ButtonLight from '../../components/ButtonLight'
import ButtonDark from '../../components/ButtonDark'

function Home() {
    return(
        <div className="home">
            <h1 className='titulo'>VALORANT</h1>
            <p className='texto'>Um fps táticos com personagens originais, com mecânica de tiro precisa e habilidades únicas</p>
            <div className="buttons">
                <ButtonLight />
                <ButtonDark />
            </div>
        </div>
    )
}

export default Home
