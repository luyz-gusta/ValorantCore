/**************************************************************************************
 *  Objetivo: Container de agentes
 *  Autor: Luiz Gustavo
 *  Data: 14/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardAgente from '../components/CardAgente';

const ContainerAgentes = () => {
    const [dadosAgentes, setDadosAgentes] = useState([])

    useEffect(() => {
        const fetchDataMaps = async () => {
            try {
                const response = await axios.get('https://valorant-api.com/v1/agents?language=pt-BR');
                setDadosAgentes(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        fetchDataMaps()
    }, [])

    return (
        <div className="container-agentes">
            {
                dadosAgentes.data ? dadosAgentes.data.map((agente) => {
                    if (agente.role != null) {
                        return (
                            <CardAgente key={agente.uuid} agente={agente} />
                        )
                    }else{
                        return(
                            <></>
                        )
                    }
                }) : []
            }
        </div>
    );
}

export default ContainerAgentes;