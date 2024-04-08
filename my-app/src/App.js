import "./App.css";
import SayMayName from "./components/SayMayName";
import HelloWorld from "./components/HelloWorld";
import Lista from "./components/Lista";
function App() {
  const name = "maria";
  return (
    <div className="App">
      <h1>Aqui</h1>
      <HelloWorld />
      <SayMayName name={name} />
      <SayMayName name="julio" />
      <SayMayName name="boleto" />
      <Lista />
    </div>
  );
}

export default App;
