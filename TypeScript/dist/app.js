"use strict";
const heroes = [
    {
        id: 1,
        name: 'Iron Man',
        owner: 'Marvel'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Batman',
        owner: 'DC'
    }
];
const findHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
};
const hero = findHeroById(3);
console.log('El heroe es: ', hero);
