interface Hero {
    id: number;
    name: string;
    owner: string;
}

export const heroes: Hero[] = [
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