const pokemonName = document.getElementById('pokemon-name');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonFrontImg = document.getElementById('pokemon-img-front');
const pokemonNumber = document.getElementById('pokemon-number');
const pokemonWeight = document.getElementById('pokemon-weight');
const pokemonAbilities = document.getElementById('pokemon-abilities'); 
const pokemonId = document.getElementById('pokemon-id').value;
//const pokemonAbilitiesApi = document.getElementById('pokemon-abilities-api'); 

pokemonName.innerText = 'El nombre de mi pokémon es: ';

const pokemonApiUrl = 'https://pokeapi.co/api/v2/';
//const pokemonAbilitiesApi = 'https://pokeapi.co/api/v2/ability/';

let getPokemonAbilityData = async url=>{
    const responses = await fetch(url);
    const abilityData = await responses.json();
    return abilityData;
}



let getPokemonData = async ()=>{
    const response = await fetch(`${pokemonApiUrl}pokemon/${pokemon}/`);
    const pokemon = await response.json();
    console.log(pokemon);
    const {name , height, abilities}= pokemon;
    const frontImg = pokemon.sprites.front_default;
    pokemonName.innerText = name;
    pokemonNumber.innerText = `El número de la pokédex es: ${pokemon.id}`;
    pokemonHeight.innerText = `La altura es: ${height} pulgadas`;
    pokemonWeight.innerText = `Su peso es de: ${pokemon.weight}kg`;
    pokemonFrontImg.src = frontImg;

    abilities.forEach(async element => {
        const abilityData = await getPokemonAbilityData(element.ability.url);
        const effect_entries = abilityData.effect_entries;

        pokemonAbilities.innerHTML +=
        `<li>
            ${element.ability.name}
            <div>Efecto:
                <ul>
                    ${effect_entries[0].effect}
                </ul>
            </div>
        </li>`
        console.log(element.ability.name);
        //pokemonAbilities.innerHTML += `<li>${element.ability.name}</li>`;
        //pokemonAbilitiesApi.innerHTML += `<li>${element.ability.url}</li>`;
        //console.log(element.ability);
    });
};

getPokemonData();
getPokemonAbilityData();