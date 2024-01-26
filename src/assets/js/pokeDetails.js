const pokeDetail = document.getElementById('pokemonDetails')
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
    let typeColor = colours[pokemon.types[0].type.name];
    document.body.style.backgroundColor = `${typeColor}`;

    let typesHTML = '';
    pokemon.types.forEach(type => {
        typesHTML += `<li class="type mr-2 p-3 text-white">${type.type.name}</li>`;
    });
    let abilitiesHTML = '';
    pokemon.abilities.forEach(abilitie => {
        abilitiesHTML += `${abilitie.ability.name}/ `;
    });

    let capitalizedPokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    var heightFormatado = (pokemon.height / 10).toFixed(2); 
    var weightFormatado = (pokemon.weight / 10).toFixed(2);

    return `<div class=" p-[1rem] ml-1 mb-2">
  <div class=" flex relative">
      <h1 class=" text-4xl font-extrabold text-white">${capitalizedPokemonName}</h1>
      <span class="number absolute right-5 top-2 tracking-wide font-bold text-white">
      #${pokemon.id}
      </span>
  </div>
  <ol class="types flex mt-2">
      ${typesHTML}
  </ol>
</div>
<div class=" w-full flex flex-col justify-center items-center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"
      alt="${capitalizedPokemonName}" class=" h-60 w-60">
</div>
<div class=" w-full max-sm:h-[58vh] bg-white p-9 rounded-t-3xl -mt-9 shadow-md">
  <div class=" border border-[#0005] w-full mt-2"></div>
  <ol class=" w-full mt-4">
      <li class=" flex w-full justify-between">
          <span class=" text-[#0005]">Species</span>
          <span>${pokemon.species.name}</span>
      </li>
      <li class=" flex w-full justify-between mt-3">
          <span class=" text-[#0005]">Height</span>
          <span>${heightFormatado} m</span>
      </li>
      <li class=" flex w-full justify-between mt-3">
          <span class=" text-[#0005]">Weight</span>
          <span>${weightFormatado} kg</span>
      </li>
      <li class=" flex w-full justify-between mt-3">
          <span class=" text-[#0005]">Abilities</span>
          <span>${abilitiesHTML}</span>
      </li>
  </ol>
  <div class=" border border-[#0005] w-full mt-6"></div>
  <ol class=" w-full mt-9">
      <li class=" flex w-full justify-between items-center">
          <span class=" text-[#0005]">HP</span>
          <span>${pokemon.stats[0].base_stat}</span>
          <progress value="${pokemon.stats[0].base_stat}" max="100"></progress>
      </li>
      <li class=" flex w-full justify-between items-center mt-3">
          <span class=" text-[#0005]">Attack</span>
          <span>${pokemon.stats[1].base_stat}</span>
          <progress value="${pokemon.stats[1].base_stat}" max="100"></progress>
      </li>
      <li class=" flex w-full justify-between items-center mt-3">
          <span class=" text-[#0005]">Defense</span>
          <span>${pokemon.stats[2].base_stat}</span>
          <progress value="${pokemon.stats[2].base_stat}" max="100"></progress>
      </li>
      <li class=" flex w-full justify-between items-center mt-3">
          <span class=" text-[#0005]">Sp. Attack</span>
          <span>${pokemon.stats[3].base_stat}</span>
          <progress value="${pokemon.stats[3].base_stat}" max="100"></progress>
      </li>
      <li class=" flex w-full justify-between items-center mt-3">
          <span class=" text-[#0005]">Sp. Defense</span>
          <span>${pokemon.stats[4].base_stat}</span>
          <progress value="${pokemon.stats[4].base_stat}" max="100"></progress>
      </li>
      <li class=" flex w-full justify-between items-center mt-3">
          <span class=" text-[#0005]">Speed</span>
          <span>${pokemon.stats[5].base_stat}</span>
          <progress value="${pokemon.stats[5].base_stat}" max="100"></progress>
      </li>
  </ol>
</div>`;
}

pokeApi.getPokeInfo(requestUrl).then((pokeInfo) => {
    pokeDetail.innerHTML += convertPokeToHtml(pokeInfo);
})