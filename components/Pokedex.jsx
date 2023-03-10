import React, {useState} from "react";
import axios from "axios";

const colors = {
    'normal': '#f4f4f4',
    'fire': '#fed7aa',
    'water': '#bfdbfe',
    'grass': '#dcfce7',
    'electric': '#fef9c3',
    'ice': '#cffafe',
    'fighting': '#fee2e2',
    'poison': '#fae8ff',
    'ground': '#fef3c7',
    'flying': '#f3e8ff',
    'psychic': '#ffe4e6',
    'bug': '#f6d6a7',
    'rock': '#fed7aa',
    'ghost': '#e9d5ff',
    'dark': '#d6d3d1',
    'dragon': '#ddd6fe',
    'steel': '#e4e4e7',
    'fairy': '#fbcfe8',
};

const Pokedex = () => {

    const [ pokemonData, setPokemonData ] = useState([]);
    const [ pokemon, setPokemon ] = useState("");
    const [ error, setError ] = useState(false);

    const getPokemonInfo = async (pokemon) => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            let data = [];
            data.push(res.data);
            setPokemonData(data);
            setError(false);
        } catch (e) {
            setError(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemonInfo(pokemon);
        console.log(pokemonData);
    }

    const handleChange = (e) => {
        e.preventDefault();
        setPokemon(e.target.value.toLowerCase());
    }

    return (
        <>
            <div className="p-10 flex flex-col text-center gap-3 bg-snow min-h-screen">
                <h4 className="text-3xl font-bold">Pokemon</h4>
                <div className="flex flex-wrap text-center justify-center">
                    <form onSubmit={handleSubmit}>
                        <label className="font-semibold">Pokemon Name: </label>
                        <input className="border border-gray-900 rounded pr-5 pl-2" type="text" onChange={handleChange} placeholder="Enter Pokemon Name" required/>
                    </form>
                </div>
                <div className="flex justify-center item-center text-center">
                    {error ?
                        <h1>Not A Valid Pokemon</h1>
                        :
                        pokemonData.map((data) => (
                            <div key={data.name} style={{ backgroundColor: colors[data.types[0].type.name]}} className="w-full sm:w-1/3 rounded-lg shadow-lg flex flex-col items-center justify-center text-center py-5">
                                <h4 className="font-bold text-xl capitalize">{ data.name }</h4>
                                <img src={data.sprites["front_default"]} width={128} height={128}/>
                                <div className="text-left">
                                    <p className="capitalize"><span className="font-semibold">Type:</span> { data.types[0].type.name }</p>
                                    <p><span className="font-semibold">Weight:</span> { Math.round(data.weight * 0.1) } kg</p>
                                    <p className="capitalize"><span className="font-semibold">Height:</span> { Math.round(data.height * 3.93701) }&#8221;</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
};

export default Pokedex;
