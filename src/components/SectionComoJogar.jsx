/**************************************************************************************
 *  Objetivo: Section Como Jogar
 *  Autor: Luiz Gustavo
 *  Data: 17/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import TextoSobre from "./TextoSobre";
import TituloSobre from "./TituloSobre";
import '../css/sec-como-jogar.css'

function SectionComoJogar() {
    return (
        <section className="sec-como-jogar" id="sec-como-jogar">
            <TituloSobre titulo="Como jogar" />
            <div className="textos txt-sec">
                <TextoSobre
                    classText={'texto-sobre'}
                    text={'O objetivo principal também lembra bastante o jogo competitivo da Valve(CS:GO): dois times com cinco atacantes se enfrentam nas partidas. De um lado, uma equipe deve plantar uma bomba chamada Spike e escoltá-la até o momento da explosão; no outro time, cinco defensores precisam neutralizar os adversários e desarmar a bomba caso seja plantada em alguma das zonas do mapa.'}
                />
                <TextoSobre
                    classText={'texto-sobre'}
                    text={'Para garantir a vitória da partida, 13 rodadas devem ser vencidas. No início de cada round, os jogadores têm de se equipar com armas, armaduras e poderes dos personagens — com um sistema de economia semelhante ao de Counter-Strike. Isso significa que é preciso tomar cuidado ao comprar armas mais caras, pois, embora sejam mais fortes, podem trazer prejuízo caso o jogador morra na rodada seguinte.'}
                />
                <TextoSobre
                    classText={'texto-sobre'}
                    text={'Além do modo de jogo tradicional, existe um modo inédito chamado Disputa da Spike. Ele é muito parecido com o modo comum, mas focado em partidas ainda mais rápidas. Todos os atacantes carregam a bomba Spike consigo para plantá-la no local do objetivo. Pelo mapa, existem orbes de aumento de poder espalhados pelo cenário, os quais aumentam o dano, velocidade ou até mesmo garantem a habilidade suprema instantaneamente ao personagem. O conceito deste modo de jogo é bastante simples e talvez não supra a necessidade dos jogadores mais casuais, que vão acabar preferindo jogar uma partida comum.'}
                />
            </div>
        </section>
    )
}

export default SectionComoJogar;