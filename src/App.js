import './App.css';
import Header from "./components/Header";
import OdaSecenekleri from "./components/OdaSecenekleri";
import OdaBilgileri from "./components/OdaBilgileri";

function App() {
  return (
    <div className="App">
      <Header className="App-header">
      </Header>
        <OdaSecenekleri/>
        <OdaBilgileri/>
    </div>
  );
}

export default App;
