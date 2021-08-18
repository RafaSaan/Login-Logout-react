import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Inicio from "./pages/Inicio";
import Usuario from "./pages/Usuario";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/usuario" component={Usuario} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
