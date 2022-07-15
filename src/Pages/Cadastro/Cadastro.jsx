import "./style.css";
import Layout from "../Components/LayoutBasico.jsx/Layout";
import logo from "../../Imagens/Logo.svg";

function Cadastro() {
  return (
    <div class="main-cadastro">
      <Layout />
      <img src={logo} alt="logo" class="logo" />
      <p class="texto">
        Ainda não tem cadastro?
        <br /> Então, antes de buscar seu melhor amigo, precisamos de <br />{" "}
        alguns dados:
      </p>
      <form>
        <label class="lbl-nome">
          Nome
          <input
            type="text"
            name="nome"
            class="inpt-nome"
            placeholder="Digite seu nome completo"
          />
        </label>
      </form>
    </div>
  );
}

export default Cadastro;
