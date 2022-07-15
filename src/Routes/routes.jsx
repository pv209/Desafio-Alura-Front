import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Cadastro from "../Pages/Cadastro/Cadastro"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cadastro" component={Cadastro} />
    </Switch>
  );
}
