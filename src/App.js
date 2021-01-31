import "./App.scss";
import Logo from "./components/common/elements/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mt-5">
        <Logo />
      </div>
      <h3>Welcome to Fa-Mania Store</h3>
    </div>
  );
}

export default App;
