import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import ProductPage from "./pages/Product/ProductPage";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/products" component={ProductPage} />
      </Switch>
    </div>
  );
}

export default App;
