import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
