//ACTIONS

import CardService from "../services/CardService"

export const initPlayer = (landCount, playerName) => ({
    type: 'INIT_PLAYER',
    payload: {
        landCount,
        playerName
    }
})

export const playLandFromHand = (index) => (
    {
        type: 'PLAY_LAND_FROM_HAND',
        payload: {
            index
        }
    }
)

export const drawCardsFromLibrary = (numCards) => (
    {
        type: 'DRAW_CARDS_FROM_LIBRARY',
        payload: numCards
    }
)

export const shuffleLibrary = () => (
    {
        type: 'SHUFFLE_LIBRARY'
    }
)

export const incrementLife = () => (
    {
        type: 'INCREMENT_LIFE'
    }
)

export const decrementLife = () => (
    {
        type: 'DECREMENT_LIFE'
    }
)

export const updateMana = (manaUpdate) => (
    {
        type: 'UPDATE_MANA',
        payload: manaUpdate
    }
)

export const toggleTapCard = (index, zone) => (
    {
        type: 'TOGGLE_TAP_CARD',
        payload:{
            index,
            zone
        }
    }
)

export const sendCardToZone = (index, fromZone, toZone) => (
    {
        type: 'SEND_CARD_TO_ZONE',
        payload:{
            index,
            fromZone,
            toZone
        }
    }
)

export const fetchCreatureToken = (cmc) => (
    {
        type: 'FETCH_CREATURE_TOKEN',
        payload: cmc
    }
)

export const addCreatureToBattlefield = (creature) => (
    {
        type: "ADD_CREATURE_TO_BATTLEFIELD",
        payload: creature
    }
)

//STATE

const defaultState = {
    playerName: "",
    creatures: [],
    land: [],
    lifeTotal: 24,
    manaPool: {
        white:0,
        blue:0,
        black:0,
        red:0,
        green:0,
        colorless:0
    },
    library: [],
    graveyard: [],
    hand: []
}

//REDUCER

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'INIT_PLAYER':
        {
            const library = initLibrary(action.payload.landCount);
            const shuffledLibrary = shuffle(library);
            const drawResult = drawCards(shuffledLibrary, 7);
            const hand = [...drawResult.drawnCards];
            const graveyard = [];
            const creatures = [];
            const land = [];

            const playerName = action.payload.playerName;

            return{
                ...state,
                library: [...drawResult.newLibrary],
                hand,
                playerName,
                graveyard,
                creatures,
                land
            }
        }
        case 'PLAY_LAND_FROM_HAND':
        {
            const card = state.hand[action.payload.index];
            const land = [...state.land, card];
            const hand = [...state.hand];
            hand.splice(action.payload.index, 1);

            return{
                ...state,
                land,
                hand
            }
        }
        case 'DRAW_CARDS_FROM_LIBRARY':
        {
            const library = [...state.library];
            const drawResult = drawCards(library, action.payload);
            const hand = [...state.hand, ...drawResult.drawnCards];
            return{
                ...state,
                library: drawResult.newLibrary,
                hand
            }
        }
        case 'SHUFFLE_LIBRARY':
        {
            const library = shuffle(state.libary);
            return {
                ...state,
                library
            };
        }
        case 'INCREMENT_LIFE':
        {
            return{
                ...state,
                lifeTotal: state.lifeTotal+1
            }
        }
        case 'DECREMENT_LIFE':
        {
            return{
                ...state,
                lifeTotal: state.lifeTotal-1
            }
        }

        case 'UPDATE_MANA':{
            const manaPool = {
                ...state.manaPool,
                ...action.payload
            }
            return{
                ...state,
                manaPool
            }
        }

        case 'TOGGLE_TAP_CARD':
        {
            switch(action.payload.zone){
                case "creatures":{
                    let creatures = [...state.creatures];
                    creatures[action.payload.index].isTapped = !creatures[action.payload.index].isTapped;

                    return{
                        ...state,
                        creatures
                    }
                }
                case "land":{
                    let land = [...state.land];
                    land[action.payload.index].isTapped = !land[action.payload.index].isTapped;

                    return{
                        ...state,
                        land
                    }
                }
                default: return state
            }
        }
        case 'SEND_CARD_TO_ZONE':{
            switch(action.payload.fromZone){
                case "hand":{
                    const card = state.hand[action.payload.index];
                    const hand = [...state.hand];
                    hand.splice(action.payload.index, 1);
                    switch(action.payload.toZone){
                        case "graveyard":{
                            const graveyard = [card, ...state.graveyard];
                            return{
                                ...state,
                                graveyard,
                                hand
                            }
                        }
                        case "land":{
                            const land = [...state.land, card];
                            return{
                                ...state,
                                land,
                                hand
                            }
                        }
                        case "librarytop":{
                            const library = [card, ...state.library];
                            return{
                                ...state,
                                library,
                                hand
                            }
                        }
                        case "librarybottom":{
                            const library = [...state.library, card];
                            return{
                                ...state,
                                library,
                                hand
                            }
                        }
                        default: return state;
                    }
                }
                case "land":{
                    const card = state.land[action.payload.index];
                    const land = [...state.land];
                    land.splice(action.payload.index, 1);
                    switch(action.payload.toZone){
                        case "graveyard":{
                            const graveyard = [card, ...state.graveyard];
                            return{
                                ...state,
                                graveyard,
                                land
                            }
                        }
                        case "hand":{
                            const hand = [...state.hand, card];
                            return{
                                ...state,
                                hand,
                                land
                            }
                        }
                        case "librarytop":{
                            const library = [card, ...state.library];
                            return{
                                ...state,
                                library,
                                land
                            }
                        }
                        case "librarybottom":{
                            const library = [...state.library, card];
                            return{
                                ...state,
                                library,
                                land
                            }
                        }
                        default : return state
                    }
                }
                case "creatures":{
                    const creatures = [...state.creatures];
                    creatures.splice(action.payload.index, 1);

                    return{
                        ...state,
                        creatures
                    }
                }
                case "library":{
                    const card = state.library[action.payload.index];
                    const library = [...state.library];
                    library.splice(action.payload.index, 1);
                    switch(action.payload.toZone){
                        case "graveyard":{
                            const graveyard = [card, ...state.graveyard];
                            return{
                                ...state,
                                graveyard,
                                library
                            }
                        }
                        case "hand":{
                            const hand = [...state.hand, card];
                            return{
                                ...state,
                                hand,
                                library
                            }
                        }
                        case "land":{
                            const land = [card, ...state.land];
                            return{
                                ...state,
                                library,
                                land
                            }
                        }
                        default : return state;
                    }
                }
                case "graveyard":{
                    const card = state.graveyard[action.payload.index];
                    const graveyard = [...state.graveyard];
                    graveyard.splice(action.payload.index, 1);
                    switch(action.payload.toZone){
                        case "librarytop":{
                            const library = [card, ...state.library];
                            return{
                                ...state,
                                graveyard,
                                library
                            }
                        }
                        case "librarybottom":{
                            const library = [...state.library, card];
                            return{
                                ...state,
                                graveyard,
                                library
                            }
                        }
                        case "hand":{
                            const hand = [...state.hand, card];
                            return{
                                ...state,
                                hand,
                                graveyard
                            }
                        }
                        case "land":{
                            const land = [...state.land, card];
                            return{
                                ...state,
                                graveyard,
                                land
                            }
                        }
                        default : return state;
                    }
                }
                default: return state;
            }
        }
        case 'FETCH_CREATURE_TOKEN':{
            return{
                ...state,
                cmc: action.payload
            }
        }
        case "ADD_CREATURE_TO_BATTLEFIELD":{
            const creature = {
                name: action.payload.name,
                image: action.payload.image_uris.normal,
                zoomImage: action.payload.image_uris.large,
                isTapped: false
            }
            const creatures = [...state.creatures, creature];
            return{
                ...state,
                creatures
            }
        }
        default: return state
    }
};

const initLibrary = (landCount) => {
    
    const library = [];
    
    for (let i = 0; i < landCount.plains; i++){
        library.push({
            name: "plains",
            image: `${CardService.plainsImage}`,
            isTapped: false
        })
    }
    for (let i = 0; i < landCount.islands; i++){
        library.push({
            name: "island",
            image: `${CardService.islandImage}`,
            isTapped: false
        })
    }
    for (let i = 0; i < landCount.swamps; i++){
        library.push({
            name: "swamp",
            image: `${CardService.swampImage}`,
            isTapped: false
        })
    }
    for (let i = 0; i < landCount.mountains; i++){
        library.push({
            name: "mountain",
            image: `${CardService.mountainImage}`,
            isTapped: false
        })
    }
    for (let i = 0; i < landCount.forests; i++){
        library.push({
            name: "forest",
            image: `${CardService.forestImage}`,
            isTapped: false
        })
    }
    for (let i = 0; i < landCount.wastes; i++){
        library.push({
            name: "wastes",
            image: `${CardService.wastesImage}`,
            isTapped: false
        })
    }

    return library;
}

const shuffle = (library) => {
            
    let currentIndex = library.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = library[currentIndex];
        library[currentIndex] = library[randomIndex];
        library[randomIndex] = temporaryValue;
    }
    return library;
}

const drawCards = (library, numCards) => {
    const drawnCards = library.splice(0, numCards);
    return{
        newLibrary: library,
        drawnCards: drawnCards
    };
}

export default{
    reducer,
    initPlayer,
    playLandFromHand,
    drawCardsFromLibrary,
    shuffleLibrary,
    incrementLife,
    decrementLife,
    updateMana,
    toggleTapCard,
    sendCardToZone,
    fetchCreatureToken,
    addCreatureToBattlefield
};