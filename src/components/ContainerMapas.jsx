/**************************************************************************************
 *  Objetivo: Container de mapas
 *  Autor: Luiz Gustavo
 *  Data: 12/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardMapa from '../components/CardMapa';

const ContainerMapas = () => {
    const [dadosMapas, setDadosMapas] = useState([])

    useEffect(() => {
        const fetchDataMaps = async () => {
            try {
                const response = await axios.get('https://valorant-api.com/v1/maps?language=pt-BR');
                setDadosMapas(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        fetchDataMaps()
    }, [])

    return (
        <div className="container-mapas">
            {
                dadosMapas.data ? dadosMapas.data.map((mapa) => {
                    return (
                        <CardMapa key={mapa.uuid} mapa={mapa}/>
                    )
                }) : []
            }
            {/* <CardMapa /> */}
        </div>
    );
}

export default ContainerMapas;