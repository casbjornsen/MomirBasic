import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Card from './Card';
import CardStack from './CardStack';
import CardZone from './CardZone';
import LifeTracker from './LifeTracker';
import ManaPool from './ManaPool';
import PlayerStore from '../stores/PlayerStore';

import '../css/PlayerInterface.css';
import CardService from '../services/CardService';
import ContextClickHandler from './ContextClickHandler';

function PlayerInterface (props) {

    const dispatch = useDispatch();
    const player = useSelector(store => store.player);

    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [selectedCardZone, setSelectedCardZone] = useState('');
    const [selectedCmc, setSelectedCmc] = useState(0);
    
    const allValidMoveDestinations = [
        {
            name: "hand",
            displayName: "Hand",
            sendFunction: () => sendCardTo("hand")
        },
        {
            name: "graveyard",
            displayName: "Graveyard",
            sendFunction:  () => sendCardTo("graveyard")
        },
        {
            name: "librarytop",
            displayName: "Top of Library",
            sendFunction:  () => sendCardTo("librarytop")
        },
        {
            name: "librarybottom",
            displayName: "Bottom of Library",
            sendFunction:  () => sendCardTo("librarybottom")
        },
        {
            name: "creatures",
            displayName: "Battlefield",
            sendFunction:  () => sendCardTo("creatures")
        },
        {
            name: "lands",
            displayName: "Battlefield",
            sendFunction:  () => sendCardTo("land")
        }
    ];

    const onLifeIncrementClick = () => {
        dispatch(PlayerStore.incrementLife());
    }

    const onLifeDecrementClick = () => {
        dispatch(PlayerStore.decrementLife());
    }

    const onUpdateMana = (newMana) => {
        dispatch(PlayerStore.updateMana(newMana));
    }

    const playLand = (index) => {
        dispatch(PlayerStore.playLandFromHand(index));
    }

    const drawCard = () =>{
        dispatch(PlayerStore.drawCardsFromLibrary(1));
    }

    const toggleTap = (index, zone) => {
        dispatch(PlayerStore.toggleTapCard(index, zone));
    }

    const updateSelectedCard = (index, zone) => {
        console.log(`Updating selection - index: ${index} zone: ${zone}`);
        setSelectedCardIndex(index);
        setSelectedCardZone(zone);
    } 

    const sendCardTo = (destination) => {
        console.log(`Sending card to ${destination}... Source - index: ${selectedCardIndex} zone: ${selectedCardZone}`);
        dispatch(PlayerStore.sendCardToZone(selectedCardIndex, selectedCardZone, destination));
    }

    const fetchTokenCreature = () => {
        dispatch(PlayerStore.fetchCreatureToken(selectedCmc));
    }

    const handEls = player.hand.filter(x => x !== undefined).map((x, idx) => {
        let cardId = x.name+'_'+idx;
        let validMoveDestinations = [...allValidMoveDestinations];
        validMoveDestinations.splice(0,1);
        validMoveDestinations.splice(3,1);
        return <ContextClickHandler
                key={idx}
                contents={<Card key={idx} id={cardId} index={idx} imgSrc={x.image} name={x.name} zone="hand" onCardClick={playLand} isTapped={x.isTapped}/>}
                zoomEnabled={false}
                targetId={cardId}
                validMoveDestinations={validMoveDestinations}
                contextHeader="Send Card To..."
                onSelectCard={() => updateSelectedCard(idx, "hand")}
        />
    })
    const creatureEls = player.creatures.filter(x => x !== undefined).map((x, idx) => {
            let cardId = x.name+'_'+idx;
            let validMoveDestinations = [...allValidMoveDestinations];
            validMoveDestinations.splice(4,2);
            return <ContextClickHandler
                    key={idx}
                    contents={<Card key={idx} id={cardId} index={idx} imgSrc={x.image} name={x.name} zone="creatures" onCardClick={toggleTap} isTapped={x.isTapped}/>}
                    zoomEnabled={true}
                    zoomImage={x.zoomImage}
                    targetId={cardId}
                    validMoveDestinations={validMoveDestinations}
                    contextHeader="Send Card To..."
                    onSelectCard={() =>updateSelectedCard(idx, "creatures")}
            />
    })
    const landEls = player.land.filter(x => x !== undefined).map((x, idx) => {
        let cardId = x.name+'_'+idx;
        let validMoveDestinations = [...allValidMoveDestinations];
        validMoveDestinations.splice(4,2);
        return <ContextClickHandler
                key={idx}
                contents={<Card key={idx} id={cardId} index={idx} imgSrc={x.image} name={x.name} zone="land" onCardClick={toggleTap} isTapped={x.isTapped}/>}
                zoomEnabled={false}
                targetId={cardId}
                validMoveDestinations={validMoveDestinations}
                contextHeader="Send Card To..."
                onSelectCard={() =>updateSelectedCard(idx, "land")}
        />
    })

    return (
        <div id="playerInterface" className="playerInterface">
            <div className="battlefield">
                <CardZone cards={creatureEls} name="battlefield-creatures"/>
                <div className="land-row-container">
                    <div className="card momir-container">
                        <img src={CardService.momirAvatarImage} alt="Momir Vanguard"/>
                        <div className="momir-input-container">
                            <div className="momir-rules">
                                <span>X, Discard a card:</span>
                                <br />
                                <span>Create a token that’s a copy of a creature card with converted mana cost X chosen at random. Activate this ability only any time you could cast a sorcery and only once each turn.</span>
                            </div>
                            <div className="momir-input">
                                <span>X:</span>
                                <input type="number" min="0" onChange={(e) => setSelectedCmc(e.target.value)}></input>
                                <button onClick={fetchTokenCreature}>Create Token!</button>
                            </div>
                        </div>
                    </div>
                    <CardZone cards={landEls} name="battlefield-land"/>
                </div>
            </div>
            <div className="playerSpace">
                <div className="playerStats">
                    <LifeTracker
                        lifeTotal={player.lifeTotal}
                        onLifeIncrementClick = {onLifeIncrementClick}
                        onLifeDecrementClick = {onLifeDecrementClick}
                    />
                    <ManaPool
                        white={player.manaPool.white}
                        blue={player.manaPool.blue}
                        black={player.manaPool.black}
                        red={player.manaPool.red}
                        green={player.manaPool.green}
                        colorless={player.manaPool.colorless}
                        onUpdateMana={onUpdateMana}/>
                </div>
                <CardZone name="hand" cards={handEls}/>
                <ContextClickHandler
                contents={<CardStack id={"library_top"} name="library" contents={player.library} isTopRevealed={false} onClick={drawCard} />}
                zoomEnabled={false}
                targetId={"library_top"}
                validMoveDestinations={[...allValidMoveDestinations.slice(0,1), ...allValidMoveDestinations.slice(3,4), ...allValidMoveDestinations.slice(5)]}
                contextHeader="Send Card To..."
                onSelectCard={() => updateSelectedCard(0, "library")}
                />
                <ContextClickHandler
                contents={<CardStack id={"graveyard_top"} name="graveyard" contents={player.graveyard} isTopRevealed={true}/>}
                zoomEnabled={false}
                targetId={"graveyard_top"}
                validMoveDestinations={[...allValidMoveDestinations.slice(0,0), ...allValidMoveDestinations.slice(2,4), ...allValidMoveDestinations.slice(5)]}
                contextHeader="Send Card To..."
                onSelectCard={() => updateSelectedCard(0, "graveyard")}
                />
            </div>
        </div>
    );
}

export default PlayerInterface;