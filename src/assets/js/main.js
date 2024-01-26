const pokeList = document.getElementById('pokelist')

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
  let typeColor = colours[pokemon.types[0].type.name];

  pokemon.types.forEach(type => {
    typesHTML += `<li class="type">${type.type.name}</li>`;
  });

  let pokemonName = pokemon.name;
  let capitalizedPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

  return `
    <a onclick="redirectToPokemonDetails(${pokemon.id}); event.preventDefault();">
          <li class="pokemons relative overflow-hidden cursor-pointer" style="background-color: ${typeColor}">
            <span class="number absolute right-5 top-2 tracking-wide font-bold text-black opacity-10">
                #${pokemon.id}
            </span>
            <span class="name font-semibold opacity-90">${capitalizedPokemonName}</span>
            <div class=" detail flex">
                <ol class="types">
                    ${typesHTML}
                </ol>
                <img class=" z-10 ml-auto -mt-4 -mr-2 max-h-full h-[92px]"
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"
                    alt=${pokemon.name}>
            </div>
            <img class=" absolute min-h-44 z-0 top-3 -right-12 opacity-65"
                src="./assets/imgs/emblema.png"
                alt="Pokemon Emblem">
            </li>
        </a>
    `;
}

function redirectToPokemonDetails(pokemonId) {
  window.location.href = `./pages/details.html?${pokemonId}`;
}

pokeApi.getPokemons().then((pokemons = []) => {
  const promises = pokemons.map(async pokemon => {
    const pokeInfo = await pokeApi.getPokeInfo(pokemon.url);
    return convertPokeToHtml(pokeInfo);
  });

  Promise.all(promises).then((listItems) => {
    const newHtml = listItems.join('');
    pokeList.innerHTML += newHtml;
  });
});