import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import SubHeader from "./components/subHeader/subHeader";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SubHeader />
      <Homepage />
    </div>
  );
}

export default App;
