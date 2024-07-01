import { findHeroById } from "./services/hero.services";


const hero = findHeroById(3);

console.log('El heroe es: ', hero?.name);