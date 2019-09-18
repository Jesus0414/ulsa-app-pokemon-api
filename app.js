const pokemonName = document.getElementById('pokemon-name');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonFrontImg = document.getElementById('pokemon-img-front');
const pokemonNumber = document.getElementById('pokemon-number');
const pokemonWeight = document.getElementById('pokemon-weight');
const pokemonAbilities = document.getElementById('pokemon-abilities'); 

pokemonName.innerText = 'El nombre de mi pokémon es: ';

const pokemonApiUrl = 'https://pokeapi.co/api/v2/';

let getPokemonData = async ()=>{
    const response = await fetch(`${pokemonApiUrl}pokemon/393/`);
    const pokemon = await response.json();
    console.log(pokemon);
    const {name , height, abilities}= pokemon;
    const frontImg = pokemon.sprites.front_default;
    pokemonName.innerText = name;
    pokemonNumber.innerText = `El número de la pokédex es: ${pokemon.id}`;
    pokemonHeight.innerText = `La altura es: ${height} pulgadas`;
    pokemonWeight.innerText = `Su peso es de: ${pokemon.weight}kg`
    pokemonFrontImg.src = frontImg;
    abilities.forEach(ability => {
        pokemonAbilities.innerHTML = `<li>${ability.name}</li>`;
    });
    
};

getPokemonData();