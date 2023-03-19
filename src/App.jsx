import { useState } from 'react'
import './App.css'
import Pokemon from './components/Pokemon';

function App() {
  const [currPokemonNum, setCurrentPokemonNum] = useState(Math.floor(Math.random() * 1010) + 1);

  // Randomly generate new pokemon number between 1 and 1010
  const generateNewPokemonNum = () => {
    let newNum = Math.floor(Math.random() * 1010) + 1;
    setCurrentPokemonNum(newNum);
  }

  return (
    <div className="App">
      <div className='description-container'>
        <h1>Pokémon Gallery</h1>
        <h3>Discover Pokémon you never knew existed!</h3>

        <Pokemon pokemonNum={currPokemonNum}/>
        
        <button type='button' 
        title='Generate new Pokémon' 
        onClick={generateNewPokemonNum}>
          Discover!
        </button>
      </div>
    </div>
  )
}

export default App
