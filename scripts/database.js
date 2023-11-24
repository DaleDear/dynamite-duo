const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "The Zapper",
            power: "Temporarily zaps superpower of a hero or villain"
        },
        {
            id: 2,
            name: "Dark Horse",
            power: "Can control shadows"
        }
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({ ...hero }))
}

export const getVillains = () => {
    return database.villains.map(villain => ({ ...villain }))
}