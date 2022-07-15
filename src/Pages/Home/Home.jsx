import "./style.css";
import logo from "../../Imagens/Logoadopet-logo.png";
import forma2 from "../../Imagens/Forma 2.png";
import header from "../../Imagens/Header.png";
import forma1 from "../../Imagens/Forma 1.svg";
import ilu from "../../Imagens/ilu.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  return (
    <div class="main">
      <img src={forma2} alt="forma2" class="forma2" />
      <img src={forma1} alt="forma1" class="forma1" />
      <img src={header} alt="header" class="header" />
      <img src={logo} alt="logo" class="logoadopet" />
      <img src={ilu} alt="ilu" class="ilu" />
      <div class="container-boas">
        <h3 class="boas">Boas-Vindas</h3>
        <p class="texto">
          Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje?
          Vem com a gente!
        </p>
      </div>
      <div class="btns">
        <button class="btn-login">
          <h4 class="login">Ja tenho conta</h4>
        </button>
        <Link to="/cadastro">
          <button class="btn-cadastro">
            <h4 class="cadastro">Quero me cadastrar</h4>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
