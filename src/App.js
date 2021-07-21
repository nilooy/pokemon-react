import {useEffect, useRef, useState} from "react";

function App() {

const [pokemonData, setPokemonData] = useState(null)

    useEffect( () => {
        getRandomPokemon()
    }, [])
    // content has been rendered

    const getRandomPokemon = () => {
        fetch('https://app.pokemon-api.xyz/pokemon/random')
            .then(res => res.json())
            .then(res => setPokemonData(res))
    }

  return (
    <div className="App container mx-auto">

        <button onClick={getRandomPokemon} className="text-md text-blue-700 bg-blue-200 p-2 mt-2">
            Random Pokemon
        </button>

        <div className="flex justify-center mt-10">

            {pokemonData && <div className="border bg-gray-200 rounded-2xl w-1/5 p-4 shadow-md">
                <img src={pokemonData.hires} alt="Pokemon api: https://purukitto.github.io/pokemon-api/"/>
                <h1 className="text-2xl font-bold text-gray-800">{pokemonData.name.english}</h1>
                <p className="text-xs text-gray-700">lorem ipsum dolor</p>
               {/*    TODO: Add more information like attack power, height, weight and whatever you want */}
            </div>}

        </div>
    </div>
  );
}

export default App;
