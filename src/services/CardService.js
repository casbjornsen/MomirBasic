import axios from 'axios';

export default class CardService {

    static plainsImage = "https://c1.scryfall.com/file/scryfall-cards/large/front/c/c/cc3db531-3f21-49a2-8aeb-d98b7db94397.jpg?1597118248";
    static islandImage = "https://c1.scryfall.com/file/scryfall-cards/large/front/9/1/91595b00-6233-48be-a012-1e87bd704aca.jpg?1597115911";
    static swampImage = "https://c1.scryfall.com/file/scryfall-cards/large/front/8/e/8e5eef83-a3d4-44c7-a6cb-7f6803825b9e.jpg?1597116662";
    static mountainImage = "https://c1.scryfall.com/file/scryfall-cards/large/front/6/4/6418bc71-de29-410c-baf3-f63f5615eee2.jpg?1597117048";
    static forestImage = "https://c1.scryfall.com/file/scryfall-cards/large/front/1/4/146b803f-0455-497b-8362-03da2547070d.jpg?1597117694";
    static wastesImage = "https://c1.scryfall.com/file/scryfall-cards/large/front/6/9/69b215fe-0d97-4ca1-9490-174220fd454b.jpg?1562916234";
    static cardBackImage = "https://i.imgur.com/P7qYTcI.png";
    static wSymbolImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/MTG_%28W%29.svg/512px-MTG_%28W%29.svg.png";
    static uSymbolImage = "https://www.pinclipart.com/picdir/big/218-2186106_big-image-mtg-blue-mana-symbol-clipart.png";
    static bSymbolImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/MTG_%28B%29.svg/512px-MTG_%28B%29.svg.png";
    static rSymbolImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/MTG_%28R%29.svg/512px-MTG_%28R%29.svg.png";
    static gSymbolImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/MTG_%28G%29.svg/512px-MTG_%28G%29.svg.png";
    static cSymbolImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/MTG_%28C%29.svg/500px-MTG_%28C%29.svg.png";
    static discardIcon = "http://clipart-library.com/img1/678977.png"

    static momirAvatarImage = "https://c1.scryfall.com/file/scryfall-cards/large/front/f/5/f5ed5ad3-b970-4720-b23b-308a25f42887.jpg?1562953277"

    async getRandomCreature(cmc){
        const url = `https://api.scryfall.com/cards/random?q=cmc%3D${cmc}%20type%3Acreature`
        
        const result = await axios.get(url);

        return result.data;
    }

    async searchTokens(name, power, toughness, text){
        let url = `https://api.scryfall.com/cards/search?include_extras=true&q=${name}%20is%3Atoken`
        if(power !== undefined){
            url.concat(`%20pow%3D${power}`);
        }
        if(toughness !== undefined){
            url.concat(`%20tou%3D${toughness}`);
        }
        if(text !== undefined){
            url.concat(`o%3A%22${text}%22`);
        }

        const result = await axios.get(url);

        return result.data;
    }
}