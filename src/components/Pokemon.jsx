import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {

    const getPokemonInfo = async () => {
        try {
          const url = `https://pokeapi.co/api/v2/pokemon/${currPokemonNum}`;
    
          axios.get(url).then(result => {
            console.log(result.data);
          })
        } catch (e) {
          console.log(e);
        }
      }
      
    return (
        <div className='pokemon'>
            
        </div>
    )
}

export default Pokemon;