//Al ser importado un ts cada vez que se importa se va a ejecutar el codigo TS dentro
export let name = 'Orlando'; //Hacer constantes puedes definirse al dato que contienen

export const age:number = 25;
export const isValid :boolean= true;
name= 'Maikol';
// name= 123;
// name = true;

export const templateString = `Esto es un string 
multilinea 
que puede tener 
" dobles
'simples
inyectar valores ${name}
expresiones ${1+1}
numeros:${age}
booleanos ${isValid}
`

console.log(templateString);