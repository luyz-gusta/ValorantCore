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
                <img src={require('../assets/logo-riot.webp')} alt="logo da empresa riot games" className="logo-riot" />
                <div className="divisoria"></div>
                <img src={require('../assets/logo-valorant.webp')} alt="logo do jogo valorant" className="logo-valorant" />
            </div>
            <strong className="texto-footer">© Luiz Gustavo | 2024</strong>
            <address className="social-media">
                <a href="https://github.com/luyz-gusta" className="icon-media" aria-label="Link para a página de github do desenvolvedor">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/luyz-gusta/" className="icon-media" aria-label="Link para a página de linkedin do desenvolvedor">
                    <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/luyz.gusta/" className="icon-media" aria-label="Link para a página de instagram do desenvolvedor">
                    <FaInstagram />
                </a>
            </address>
        </footer>
    )
}

export default Footer