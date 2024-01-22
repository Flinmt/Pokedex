const pokeApi = {}

pokeApi.getPokemons = async (offset = 0, limit = 100) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    try {
        const response = await fetch(url);
        const jsonBody = await response.json(); 

        return jsonBody.results;
    } catch (error) {
        console.log(error)
    }
}

pokeApi.getPokeInfo = async (url) => {
    try {
        const response = await fetch(url);
        const pokeInfo = await response.json();

        return pokeInfo
    } catch (error) {
        console.log(error)
    }
}

