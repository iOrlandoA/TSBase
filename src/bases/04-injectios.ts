import { Move, PokeAPIResponse} from '../interfaces/pokeapi-response.interface';
import { APIFetchAdapter, ApiAxiosAdapter, HttpAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly http:HttpAdapter
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.http.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log(data.moves[0].move.name);
        return data.moves;
    }

}
const pokeApiAxios= new ApiAxiosAdapter();
const pokeApiFetch= new APIFetchAdapter();

export const charmander = new Pokemon( 4, 'Charmander' ,pokeApiAxios);


charmander.getMoves();