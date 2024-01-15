/**************************************************************************************
 *  Objetivo: Page Sobre
 *  Autor: Luiz Gustavo
 *  Data: 12/01/2023
 *  Versão: 1.0
 **************************************************************************************/
import MenuSobre from '../../components/MenuSobre';
import SectionInicio from '../../components/SectionInicio';
import SectionOque from '../../components/SectionOque';
import '../../css/sobre.css'

function Sobre() {
  return (
    <div className="sobre">
      <aside>
        <MenuSobre />
      </aside>
      <div className="main-sobre">
        <SectionInicio />
        <SectionOque />
        <section className="sec-requisitos"></section>
        <section className="sec-como-jogar"></section>
      </div>
    </div>
  );
}

export default Sobre;
