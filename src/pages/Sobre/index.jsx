/**************************************************************************************
 *  Objetivo: Page Sobre
 *  Autor: Luiz Gustavo
 *  Data: 12/01/2023
 *  Versão: 1.0
 **************************************************************************************/
import MenuSobre from '../../components/MenuSobre';
import SectionComoJogar from '../../components/SectionComoJogar';
import SectionInicio from '../../components/SectionInicio';
import SectionOque from '../../components/SectionOque';
import SectionRequisitos from '../../components/SectionRequisitos';
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
        <SectionRequisitos />
        <SectionComoJogar />
      </div>
    </div>
  );
}

export default Sobre;
