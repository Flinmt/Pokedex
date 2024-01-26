const pokeList = document.getElementById('pokemonDetails')
var currentUrl = window.location.search; // retorna algo como: '?1'
var numero = currentUrl.split('?')[1]; // pega o número após o '='
const requestUrl = `https://pokeapi.co/api/v2/pokemon/${numero}/`;


// Colours
const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};
//-----------------------------

function convertPokeToHtml(pokemon) {
  let typesHTML = '';

  pokemon.types.forEach(type => {
    typesHTML += `<li class="type">${type.type.name}</li>`;
  });

  let pokemonName = pokemon.name;
  let capitalizedPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

  return `
   
    `;
}

pokeApi.getPokeInfo(requestUrl).then((pokeInfo) => {
    console.log(pokeInfo);
})