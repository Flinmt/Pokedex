const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
const pokeList = document.getElementById('pokelist')

function convertPokeToHtml(pokemon) {
  return `
    <li class="pokemons relative overflow-hidden">
    <span class="number absolute right-5 top-2 tracking-wide font-bold text-black opacity-10">
        #001
    </span>
    <span class="name font-semibold opacity-90">${pokemon.name}</span>

    <div class=" detail flex">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>

        <img class=" z-10 ml-auto -mt-4 -mr-2 max-h-full h-[92px]"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            alt=${pokemon.name}>
    </div>

    <img class=" absolute min-h-44 z-0 top-3 -right-12 opacity-65" 
        src="./assets/imgs/emblema.png"
        alt="Pokemon Emblem">
    </li>
    `;
}

fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokeListResult) => {
    console.log(pokeListResult)
    pokeListResult.forEach((pokemon) => {
      pokeList.innerHTML += convertPokeToHtml(pokemon)
    });
  })
  .catch((error) => console.log(error));

console.log("Await...");
