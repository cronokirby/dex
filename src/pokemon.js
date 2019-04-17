import axios from 'axios';

const API_ROOT = 'https://pokeapi.co/api/v2/pokemon/';

/**
 * Get the link to the official art for a pokemon. 
 * 
 * @param {string} name - the name of the pokemon
 */
function artUrl(name) {
    return `http://www.pokestadium.com/assets/img/sprites/official-art/${name}.png`
}

class Pokemon {
    /**
     * Construct a new pokemon given fetched data.
     * 
     * @param {string} name the name of the pokemon
     * @param data fetched from the pokemon api
     */
    constructor(name, data) {
        this.name = name;
        this.number = data.order;
        this.types = data.types.map(x => x.type.name);
        this.art = artUrl(name);
    }

    /**
     * Construct a new pokemon by fetching the data.
     * 
     * @param {string} name the name of the pokemon
     */
    static async fromApi(name) {
        const url = API_ROOT + name;
        const data = await axios.get(url);
        return new Pokemon(name, data.data);
    }
}
export default Pokemon;