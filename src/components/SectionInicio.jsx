/**************************************************************************************
 *  Objetivo: Section Inicio
 *  Autor: Luiz Gustavo
 *  Data: 15/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import TextoSobre from "./TextoSobre";

function SectionInicio() {
    return (
        <section className="sec-inicio" id='sec-inicio'>
            <h1 className="titulo-inicio">Valorant: saiba tudo sobre o jogo de tiro criado pela mesma criadora de League of Legends</h1>
            <div className="textos">
                <TextoSobre
                    classText={'texto-sobre'}
                    text={'Competindo com gigantes como CS:GO e Overwatch, Valorant é o jogo de tiro da Riot Games que já pode ser considerado um dos melhores jogos competitivos no Brasil, como mostramos em nossa lista.'}
                />
                <TextoSobre
                    classText={'texto-sobre'}
                    text={'Até pouco tempo atrás, a Riot cuidava apenas da sua “galinha dos ovos de ouro”, conhecida como League of Legends. Só que a companhia quis expandir seu portfólio e abocanhar uma parte dos jogadores que não curtem tanto MOBA, ao mesmo tempo que atraindo a curiosidade de sua base de fãs.'}
                />
                <TextoSobre
                    classText={'texto-sobre'}
                    text={'O resultado disso foi o colorido jogo de tiro com partidas 5x5, no qual cada jogador escolhe um “Agente" e deve conquistar objetivos para vencer a equipe inimiga. Tem curiosidade em conhecer o Valorant da Riot Games, mas não quer perder tempo com um jogo que talvez não valha a pena?'}
                />
                <TextoSobre
                    classText={'texto-sobre'}
                    text={'Então confira a seguir tudo o que você precisa saber sobre Valorant e conheça também alguns dos melhores produtos para aproveitar o game ao máximo!'}
                />
            </div>
        </section>
    )
}

export default SectionInicio;
