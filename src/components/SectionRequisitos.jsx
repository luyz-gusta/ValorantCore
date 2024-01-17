/**************************************************************************************
 *  Objetivo: Section Inicio
 *  Autor: Luiz Gustavo
 *  Data: 15/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import TextoSobre from "./TextoSobre";
import TituloSobre from "./TituloSobre";
import '../css/sec-requisitos.css'
import ContainerRequisitos from "./ContainerRequisitos";

function SectionRequisitos() {
    return (
        <section className="sec-requisitos" id="sec-requisitos">
            <TituloSobre titulo={'Configurações do PC para jogar Valorant'}/>
            <div className="textos">
                <TextoSobre
                    classText={'texto-sobre'}
                    text={'Valorant é exclusivo para computadores. Por isso, é importante ficar atento aos requisitos mínimos e recomendados para conseguir rodar o game. Caso contrário, pode acabar perdendo um bom tempo baixando e instalando algo que não vai rodar no seu PC ou notebook. Mas vale mencionar aqui que, com o objetivo de atingir o máximo de jogadores possível, não é necessário ter um PC gamer premium para conseguir aproveitar o jogo.'}
                />
                <TextoSobre
                    classText={'texto-sobre'}
                    text={'A seguir, você verá quais requisitos para rodar Valorant, tanto os mínimos quanto os recomendados. Além destes requisitos de Valorant, vamos oferecer também uma opção de requisitos premium para quem realmente quiser extrair o máximo do game. A cada lista de especificações, colocaremos também uma sugestão de notebook que cumprirá as exigências para rodar o game.'}
                />
            </div>
            <ContainerRequisitos />
        </section>
    )
}

export default SectionRequisitos;