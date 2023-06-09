import { useState } from 'react'
import './App.css'
import Pokemon from './components/Pokemon';

function App() {

  return (
    <div className="App">
      <div className='description-container'>
        <h1>Pokémon Gallery</h1>
        <h2>Discover Pokémon you never knew existed!</h2>

        <Pokemon />
      </div>
    </div>
  )
}

export default App
