import "./App.css";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Searcher } from "./components/Searcher";
import { PokeCard } from "./components/PokeCard";

function App() {
  const [pokemonData, setData] = useState({});
  const [isLoaded, setLoading] = useState(false);

  const dataObtained = (data) => {
    console.log(data);
    setData(data);
    setLoading(true);
  };

  const style = {margin: '20px'}

  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Searcher style={style} dataObtained={dataObtained}></Searcher>
      <div>
        {isLoaded &&
          <PokeCard sprite={pokemonData.sprites.front_default}></PokeCard>
        }
      </div>
    </div>
  );
}

export default App;
