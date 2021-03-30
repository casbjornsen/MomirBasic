import React, { useState } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';

import Card from './Card';
import CardStack from './CardStack';
import CardZone from './CardZone';
import LifeTracker from './LifeTracker';
import ManaPool from './ManaPool';
import PlayerStore from '../stores/PlayerStore';

import '../css/PlayerInterface.css';
import CardService from '../services/CardService';

function PlayerInterface (props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [selectedCardZone, setSelectedCardZone] = useState('');
    const [selectedCmc, setSelectedCmc] = useState(0);

    const onLifeIncrementClick = () => {
        props.onIncrementLife();
    }

    const onLifeDecrementClick = () => {
        props.onDecrementLife();
    }

    const onUpdateMana = (newMana) => {
        props.onUpdateMana(newMana);
    }

    const playLand = (index) => {
        props.onPlayLand(index);
    }

    const drawCard = () =>{
        props.onDrawCard();
    }

    const toggleTap = (index, zone) => {
        props.onToggleTap(index, zone);
    }

    const onOptionsClick = (index, zone) => {
        setSelectedCardIndex(index);
        setSelectedCardZone(zone);
        setModalIsOpen(true);
    }

    const onCloseModal = () => {
        setModalIsOpen(false);
    }

    const sendCardTo = (destination) => {
        props.sendCardToZone(selectedCardIndex, selectedCardZone, destination);
        setModalIsOpen(false);
    }

    const fetchTokenCreature = () => {
        props.fetchCreatureToken(selectedCmc);
    }

    const handEls = props.hand.map((x, idx) => {
        if(x !== undefined)
            return <Card key={idx} index={idx} imgSrc={x.image} name={x.name} zone="hand" onCardClick={playLand} isTapped={x.isTapped} onOptionsClick={onOptionsClick}/>
    })
    const creatureEls = props.creaturesInPlay.map((x, idx) => {
        if(x !== undefined)
           return <Card key={idx} index={idx} imgSrc={x.image} name={x.name} zone="creatures" onCardClick={toggleTap} isTapped={x.isTapped} onOptionsClick={onOptionsClick}/>
    })
    const landEls = props.landInPlay.map((x, idx) => {
        if(x !== undefined)
           return <Card key={idx} index={idx} imgSrc={x.image} name={x.name} zone="land" onCardClick={toggleTap} isTapped={x.isTapped} onOptionsClick={onOptionsClick}/>
    })

    return (
        <div id="playerInterface" className="playerInterface">
            <Modal 
            isOpen={modalIsOpen}
            appElement={document.getElementById('playerInterface')}
            className="card-options-modal"
            overlayClassName="card-options-overlay"
            >
                <div className="modal-button-container">
                    Send card to...
                    <button className={selectedCardZone === "graveyard" ? "hidden" : ""} onClick={() => sendCardTo("graveyard")}>Graveyard</button>
                    <button className={selectedCardZone === "hand" ? "hidden" : ""} onClick={() => sendCardTo("hand")}>Hand</button>
                    <button className={selectedCardZone === "library" ? "hidden" : ""} onClick={() => sendCardTo("librarytop")}>Top of Library</button>
                    <button className={selectedCardZone === "library" ? "hidden" : ""} onClick={() => sendCardTo("librarybottom")}>Bottom of Library</button>
                    <button className={selectedCardZone === "land" || selectedCardZone == "creatures"? "hidden" : ""} onClick={() => sendCardTo("land")}> Battlefield</button>
                    <br />
                    <button onClick={onCloseModal}>Close</button>
                </div>
            </Modal>
            <div className="battlefield">
                <CardZone cards={creatureEls} name="battlefield-creatures"/>
                <div className="land-row-container">
                    <div className="card momir-container">
                        <img src={CardService.momirAvatarImage} />
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
                        lifeTotal={props.lifeTotal}
                        onLifeIncrementClick = {onLifeIncrementClick}
                        onLifeDecrementClick = {onLifeDecrementClick}
                    />
                    <ManaPool
                        white={props.manaPool.white}
                        blue={props.manaPool.blue}
                        black={props.manaPool.black}
                        red={props.manaPool.red}
                        green={props.manaPool.green}
                        colorless={props.manaPool.colorless}
                        onUpdateMana={onUpdateMana}/>
                </div>
                <CardZone name="hand" cards={handEls}/>
                <CardStack name="library" contents={props.library} isTopRevealed={false} onClick={drawCard} onOptionsClick={onOptionsClick}/>
                <CardStack name="graveyard" contents={props.graveyard} isTopRevealed={true} onClick={onOptionsClick} onOptionsClick={onOptionsClick}/>
            </div>
        </div>
    );
}

const mapStateToProps = (store) => {
    return {
        playerName: store.player.playerName,
        hand: store.player.hand,
        library: store.player.library,
        graveyard: store.player.graveyard,
        creaturesInPlay: store.player.creatures,
        landInPlay: store.player.land,
        lifeTotal: store.player.lifeTotal,
        manaPool: store.player.manaPool
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementLife: () => dispatch(PlayerStore.incrementLife()),
        onDecrementLife: () => dispatch(PlayerStore.decrementLife()),
        onUpdateMana: (mana) => dispatch(PlayerStore.updateMana(mana)),
        onPlayLand: (index) => dispatch(PlayerStore.playLandFromHand(index)),
        onDrawCard: () => dispatch(PlayerStore.drawCardsFromLibrary(1)),
        onToggleTap: (index, zone) => dispatch(PlayerStore.toggleTapCard(index, zone)),
        sendCardToZone: (index, fromZone, toZone) => dispatch(PlayerStore.sendCardToZone(index, fromZone, toZone)),
        fetchCreatureToken: (cmc) => dispatch(PlayerStore.fetchCreatureToken(cmc))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInterface);