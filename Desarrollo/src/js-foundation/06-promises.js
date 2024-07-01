const {httpClientPlugin} = require('./plugins/http-client.plugin');

const getPokemonId = async (id) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    const pokemon = await httpClientPlugin.get(url);
    
    return pokemon.name;
    // return fetch(url)
    //     .then( (response) => response.json())
    //     .then( () => { throw new Error ('Sin resultados')} ) 
    //     .then( (pokemon) => pokemon.name);
}


module.exports = {
    getPokemonId,
}