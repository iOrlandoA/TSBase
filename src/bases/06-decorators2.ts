

//Si está marcado como obsoleto quiere decir que debe trasladarse a una nueva forma de hacer el metodo
const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      //console.log({target})
      return {
        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            propertyDescriptor.value.apply(this, args); 
          }
          return wrapperFn;
        }
      }
    }   
}




export class Pokemon{
     constructor(
        public readonly id:number,
        public name:string
     
     ){}
     scream(){
        console.log(`${this.name.toLocaleUpperCase()} !!`)
     }
     @Deprecated('Most use speak2 method instead')
     speak(){
        console.log(`${this.name}  ${this.name}`)
     }
     @Deprecated('Most use speak3 method instead')
     speak2(){
        console.log(`${this.name}  ${this.name}!!!!`)
     }
}


export const charmander = new Pokemon(4, 'Charmander');

charmander.speak2();