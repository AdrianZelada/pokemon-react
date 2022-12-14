import Observable from "./observable-service";

class PokemonService {
    static instance: PokemonService;

    public actionItem!: Observable;
    public goto: Observable = new Observable();
    constructor() {
        if(PokemonService.instance){
            return PokemonService.instance;
        } else {
            this.actionItem = new Observable();
            return this;
        }
    }

    async getPokemons() {
        return fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=150').then((response) => {
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