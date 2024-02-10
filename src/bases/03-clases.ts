import axios from 'axios';
import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';
//Abstracción de un objeto en la vida real
export class Pokemon{
    //Get de la clase
    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
    constructor(
        public readonly id:number, //Quita la forma de establecerle a un valor después de definirlo
        public name:string,
        
    ){}
        //Metodos dentro de la Clase
        //Async compromiso de que voy a ser notificado cuando la promesa finalise 
        //Cuando el trabajo a distiempo se haga debe retornar lo esperado
    scream(){
        console.log(`${this.name.toLocaleUpperCase()}!!!!`);
        
    }
    
    speak(){
        console.log(`${this.name} ,${this.name}`);
    }

    async getMoves(): Promise <Move[]>{
        const {data}= await axios.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log( data.moves );
        return data.moves;
    }

}

//Any puede ser de cualquier tipo
//Hay una restricción en ts que esté implicitamente sea any

export const charmander= new Pokemon(4, 'Charmander');
// charmander.name ='Mew';
console.log(charmander.imageUrl);

charmander.getMoves();

// console.log(charmander.getMoves());