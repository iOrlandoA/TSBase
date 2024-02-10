// import { name, age} from './bases/01-type.ts';
// import { bulbasor,pokemons } from './bases/02-objects.ts';
import './style.css'

import { setupCounter } from './counter.ts'
// import { charmander } from './bases/03-clases.ts'
// import { charmander } from './bases/04-injectios.ts'

// import { charmander } from './bases/05-decorators.ts'
import { charmander } from './bases/06-decorators2.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    
    <h1>Hello ${charmander.name} ${charmander.id}</h1>
    
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
