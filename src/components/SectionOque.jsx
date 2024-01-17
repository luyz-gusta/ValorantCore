/**************************************************************************************
 *  Objetivo: Section Inicio
 *  Autor: Luiz Gustavo
 *  Data: 15/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import TextoSobre from "./TextoSobre";
import TituloSobre from "./TituloSobre";
import '../css/sec-oque.css'

function SectionOque() {
    const videoUrl = 'https://www.youtube.com/embed/ZmiQUOP-ibA'; // Link de incorporação do YouTube

    return (
        <section className="sec-oque" id='sec-oque'>
            <TituloSobre titulo={'O que é Valorant?'} />
            <iframe
                width="100%"
                height="700rem"
                src={videoUrl}
                title="Vídeo Incorporado"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="textos">
                <TextoSobre
                    classText={'texto-sobre'}
                    text={'Lançado em 2020, Valorant é um jogo de tiro online e multiplayer no qual dois grupos com cinco jogadores se enfrentam nos diversos mapas de Valorant, inspirados em locais do mundo real. Dependendo do mapa disputado, cada lado da disputa deverá alcançar um objetivo determinado ou impedir o outro lado de conseguir conquistar essa meta.'}
                />
                <TextoSobre
                    classText={'texto-sobre'}
                    text={'Lembra de Counter-Strike? Aqui a jogabilidade é bem parecida, tanto na busca pelos objetivos quanto em alguns detalhes, como a impossibilidade de reviver caso seja abatido. Quando isso acontece, você deverá esperar a rodada acabar, o que acontece quando um grupo alcança um objetivo ou elimina o seu esquadrão, para poder voltar a jogar.'}
                />
                <TextoSobre
                    classText={'texto-sobre'}
                    text={'Uma diferença crucial entre Valorant e as diferentes versões de Counter-Strike é que os Agentes, os personagens do game, possuem habilidades únicas que podem ser ativadas em meio a partida. Essas habilidades podem ser usadas para melhorar o ataque, encontrar inimigos escondidos ou dar suporte aos seus companheiros de equipe, dependendo do personagem que escolheu.'}
                />
                <TextoSobre
                    classText={'texto-sobre'}
                    text={'Nesse sentido, Valorant bebe da mesma fonte que Overwatch, sendo uma espécie de caminho do meio entre CS:GO e Overwatch.'}
                />
            </div>
        </section>
    )
}

export default SectionOque;
