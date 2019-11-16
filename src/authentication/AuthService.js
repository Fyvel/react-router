import AuthData from './AuthData.json';
const userFinder = (users, role) => (
    users.find(
        x => x.claims.find(
            y => y.name === role)))

export const getEmptyUser = () => ({ firstname: "Nuh", lastname: "Thing", claims: [] })

// jean michel
export const getPeon = () => userFinder(AuthData.dummyUsers, "PEON")

// I need a hero
export const getHero = () => userFinder(AuthData.dummyUsers, "HERO")

// OVER 9000
export const getGodlike = () => userFinder(AuthData.dummyUsers, "GODLIKE")
