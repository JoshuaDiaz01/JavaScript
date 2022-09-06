import React, {useState} from 'react';
import './App.css';
import PokemonDisplay from "./components/PokemonDisplay"
import FetchPokemonButton from "./components/FetchPokemonButton"

function App() {
const [pokemon, setPokemon] = useState([])

  return (
    <div className="App">
      <FetchPokemonButton pokemon={ pokemon } setPokemon={ setPokemon } />
      <PokemonDisplay pokemon = {pokemon}></PokemonDisplay>
    </div>
  );
}

export default App;
