class PokemonService {
    static instance: PokemonService;
    offset: number = 0;
    constructor() {
        if(PokemonService.instance){
            return PokemonService.instance;
        } else {
            return this;
        }
    }

    async getPokemons() {
        // return fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151').then((response) => {
        // return fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20').then((response) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=20`).then((response) => {
            this.offset += 20;
            return response.json();
        });
    }

    async getPokemon(name: any) {
        return fetch('https://pokeapi.co/api/v2/pokemon/'+name).then((response) => {
            return response.json();
        });
    }

}

export default new PokemonService();