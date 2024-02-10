export const pokemonIds=[1, 20, 30, 34, 66];
//No debería de ser permitido


//Las interfaces no permiten crear una instancia
//Pero permiten crear reglas y condiciones
interface Pokemon {
    id:number,
    name:string,
    age: number | undefined //Puede venir o no 
}

export const bulbasor:Pokemon = {
    id:1,
    name:'Bulbasur',
    age:undefined
}

export const charmander: Pokemon={
    id: 4,
    name: "Charmander",
    age: undefined
}

// const charmander = new Pokemon();


 export const pokemons:Pokemon[] =[];

 pokemons.push(charmander, bulbasor);
 //Object object representación de un objeto por el toString

 console.log(pokemons);