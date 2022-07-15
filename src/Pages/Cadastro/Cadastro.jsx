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
        <label class="lbl-nome" htmlFor="nome">
          Nome
        </label>
        <input
          type="text"
          name="nome"
          class="inpt-nome"
          placeholder="Digite seu nome completo"
        />
        <label class="lbl-email" htmlFor="email">
          Email
        </label>
        <input type="text" name="email" class="inpt-email" placeholder="Digite seu melhor email" />
      </form>
    </div>
  );
}

export default Cadastro;
