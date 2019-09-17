const pokemonName= document.getElementById('pokemon-name');
const pokemonHeight = document.getElementById('pokemon-height');
pokemonName.innerText = 'El nombre de mi pokémon es: ';

const pokemonApiUrl = 'https://pokeapi.co/api/v2/';

let getPokemonData = async ()=>{
    const response = await fetch(`${pokemonApiUrl}pokemon/25/`);
    const pokemondata = await response.json();
    console.log(pokemondata);
    const {name , height}= pokemondata;
    pokemonName.innerText = name;
    pokemonHeight.innerText = `la altura es: ${height} pulgadas`;
};

getPokemonData();