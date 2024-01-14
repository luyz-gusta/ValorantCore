/**************************************************************************************
 *  Objetivo: Footer
 *  Autor: Luiz Gustavo
 *  Data: 12/01/2023
 *  Versão: 1.0
 **************************************************************************************/

import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import '../css/footer.css'

function Footer() {
    return (
        <footer>
            <div className="logos">
                <img src={require('../assets/logo-riot.png')} alt="logo da empresa riot games" className="logo-riot" />
                <div className="divisoria"></div>
                <img src={require('../assets/logo-valorant.png')} alt="logo do jogo valorant" className="logo-valorant" />
            </div>
            <strong className="texto-footer">© ValorantHub 2024 | Luiz Gustavo</strong>
            <address className="social-media">
                <a href="https://github.com/luyz-gusta" className="icon-media">
                    <FaGithub />
                </a>
                <a href="https://github.com/luyz-gusta" className="icon-media">
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/luyz-gusta" className="icon-media">
                    <FaInstagram />
                </a>
            </address>
        </footer>
    )
}

export default Footer