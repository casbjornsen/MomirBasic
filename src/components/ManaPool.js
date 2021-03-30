import React from 'react';
import CardService from '../services/CardService';
import ManaTracker from './ManaTracker';

function ManaPool(props){

    const incrementMana = (color) => {
        let manaUpdate = {};
        manaUpdate[color] = props[color] + 1;
        props.onUpdateMana(manaUpdate);
    }

    const decrementMana = (color) => {
        let manaUpdate = {};
        manaUpdate[color] = Math.max(0, props[color] - 1);
        props.onUpdateMana(manaUpdate);
    }

    const clearMana = () => {
        let manaUpdate = {
            white: 0,
            blue: 0,
            black: 0,
            red: 0,
            green: 0,
            colorless: 0
        }
        props.onUpdateMana(manaUpdate);
    }

    return(
        <div className="mana-pool-container">
            <ManaTracker manaIcon={CardService.wSymbolImage} manaCount={props.white} onIncrementClick={() => incrementMana("white")} onDecrementClick={() => decrementMana("white")}/>
            <ManaTracker manaIcon={CardService.uSymbolImage} manaCount={props.blue} onIncrementClick={() => incrementMana("blue")} onDecrementClick={() => decrementMana("blue")}/>
            <ManaTracker manaIcon={CardService.bSymbolImage} manaCount={props.black} onIncrementClick={() => incrementMana("black")} onDecrementClick={() => decrementMana("black")}/>
            <ManaTracker manaIcon={CardService.rSymbolImage} manaCount={props.red} onIncrementClick={() => incrementMana("red")} onDecrementClick={() => decrementMana("red")}/>
            <ManaTracker manaIcon={CardService.gSymbolImage} manaCount={props.green} onIncrementClick={() => incrementMana("green")} onDecrementClick={() => decrementMana("green")}/>
            <ManaTracker manaIcon={CardService.cSymbolImage} manaCount={props.colorless} onIncrementClick={() => incrementMana("colorless")} onDecrementClick={() => decrementMana("colorless")}/>
            <button onClick={() => clearMana()}>CLEAR</button>
        </div>
    )
}

export default ManaPool;