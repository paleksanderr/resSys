import "./App.css";
import Header from "./Component/Header/Header";
import Menu from "./Component/Menu/Menu";
import Hotels from "./Component/Hotels/Hotels";
import Hotel from "./Component/Hotels/Hotel/Hotel";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Hotels />
      <Hotel />
    </div>
  );
}

export default App;
