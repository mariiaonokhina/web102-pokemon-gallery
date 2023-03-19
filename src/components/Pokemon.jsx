import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    let [currPokemonNum, setCurrentPokemonNum] = useState(0);
    const [currPokemonInfo, setCurrentPokemonInfo] = useState('')
    const [currPokemonImage, setCurrentPokemonImage] = useState('');

    const generateNewPokemon = async () => {
        // Randomly generate new pokemon number between 1 and 777
        setCurrentPokemonNum(currPokemonNum = Math.floor(Math.random() * 777) + 1);

        // Formatted number is padded with zeros (Ex. 7 -> 007, 85 -> 085, 775 -> 775)
        let formattedNum = 0;

        if(currPokemonNum < 10) {
            formattedNum = '00' + currPokemonNum;
        }

        else if(currPokemonNum < 100 && currPokemonNum >= 10) {
            formattedNum = '0' + currPokemonNum;
        }

        else {
            formattedNum = currPokemonNum;
        }

        // Fetch data from PokeAPI version 2
        const url = `https://pokeapi.co/api/v2/pokemon/${currPokemonNum}`;

        const newPokemon  = await axios.get(url).then(result => {
            setCurrentPokemonInfo(result.data);
        });

        // Take higher quality image from GitHub repository
        setCurrentPokemonImage(`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/imagesHQ/${formattedNum}.png`)
    }

    return (
        <div className='pokemon'>
            <h1>{currPokemonNum}</h1>
            <img className='pokemon-current-img' src={currPokemonImage} height='400px' width='400px' />

            <button type='button' 
            title='Generate new Pokémon' 
            onClick={generateNewPokemon}>
                Discover!
            </button>
        </div>
    )
}

export default Pokemon;