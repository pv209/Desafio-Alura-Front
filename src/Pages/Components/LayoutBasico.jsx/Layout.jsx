import forma2 from "../../../Imagens/Forma 2.png";
import header from "../../../Imagens/Header.png";
import forma1 from "../../../Imagens/Forma 1.svg";
import "./style.css"


function Layout() {
  return (
    <div>
      <img src={forma2} alt="forma2" class="forma2" />
      <img src={forma1} alt="forma1" class="forma1" />
      <img src={header} alt="header" class="header" />
      <h5>2022 - Desenvolvido por Alura.</h5>
      <div class="footer">
          
      </div>
    </div>
  );
}

export default Layout;
