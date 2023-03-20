import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    let [currPokemonNum, setCurrentPokemonNum] = useState(0);
    let [currPokemonInfo, setCurrentPokemonInfo] = useState('');
    let [currPokemonType, setCurrentPokemonType] = useState('');
    let [currPokemonAbility1, setCurrentPokemonAbility1] = useState('');
    let [currPokemonAbility2, setCurrentPokemonAbility2] = useState('');
    let [currPokemonImage, setCurrentPokemonImage] = useState('');

    let [bannedValues, setBannedValues] = useState([]);
    let [banListLength, setBanListLength] = useState(0);

    const banList = document.getElementById('ban-list');

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

        const response = await axios.get(url).then(result => {return result});
        const data = await response.data;

        if (checkIfBanned(data)) {
            generateNewPokemon();
        }

        else {
            setCurrentPokemonInfo(currPokemonInfo = data);
            setCurrentPokemonType(currPokemonType = currPokemonInfo.types[0].type.name);
            setCurrentPokemonAbility1(currPokemonAbility1 = currPokemonInfo.abilities[0].ability.name);
            setCurrentPokemonAbility2(currPokemonAbility2 = currPokemonInfo.abilities[1].ability.name);
        }

        // Take higher quality image from GitHub repository
        setCurrentPokemonImage(currPokemonImage = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/imagesHQ/${formattedNum}.png`)
    }

    const checkIfBanned = (data) => {
        if (bannedValues.includes(data.types[0].type.name) | 
        bannedValues.includes(data.abilities[0].ability.name) | 
        bannedValues.includes(data.abilities[1].ability.name)) {
            return true;
        }

        else {
            return false;
        }
    }

    const addToBanList = (value) => {
        if (banListLength < 6) {
            let newElement = document.createElement('h3');
            newElement.classList.add('ban-list-item');
            newElement.innerHTML = value;
            newElement.onclick = function() {removeFromBanList(this)};

            if(!bannedValues.includes(value)) {
                banList.append(newElement);
                bannedValues.push(value);
                setBanListLength(banListLength += 1);
                console.log(bannedValues);
            }
        }
        
        else {
            alert('Too many items in the ban list!');
        }
    }

    const removeFromBanList = (element) => {
        bannedValues.splice(bannedValues.indexOf(element.innerHTML), 1);
        console.log(element.innerHTML);
        
        setBanListLength(banListLength -= 1);
        console.log(banListLength)
        element.remove();
        console.log(bannedValues);
    }

    generateNewPokemon;

    return (
        <div className='pokemon-container'>
            <div className='pokemon'>
                {currPokemonNum != 0? 
                    <h1 className='pokemon-name'>
                        {currPokemonInfo.name} - ({currPokemonNum})
                    </h1> 
                : ''}

                {currPokemonNum == 0? ''
                : <div className='pokemon-info'>
                    <h3 className='pokemon-type' onClick={() => addToBanList(currPokemonType)}>{currPokemonType}</h3>
                    <h3 className='pokemon-type' onClick={() => addToBanList(currPokemonAbility1)}>{currPokemonAbility1}</h3>
                    <h3 className='pokemon-type' onClick={() => addToBanList(currPokemonAbility2)}>{currPokemonAbility2}</h3>
                </div>}

                {currPokemonNum != 0? 
                    <img className='pokemon-current-img' src={currPokemonImage}/>
                : ''}

                {currPokemonNum == 0?
                    <h1>Click the button below to generate new Pokémon!</h1>
                : ''}

                <button 
                id='discover-button' 
                type='button' 
                title='Generate new Pokémon' 
                onClick={generateNewPokemon}>
                    Discover!
                </button>
            </div>

            <div id='ban-list'>
                <h1>Ban List</h1>
            </div>
        </div>
    )
}

export default Pokemon;