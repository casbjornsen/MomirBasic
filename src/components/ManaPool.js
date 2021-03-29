import React from 'react';
import CardService from '../services/CardService';
import ManaTracker from './ManaTracker';

function ManaPool(props){
    return(
        <div className="mana-pool-container">
            <ManaTracker manaIcon={CardService.wSymbolImage} manaCount={props.wManaCount} onIncrementClick={props.incrementWMana} onDecrementClick={props.decrementWMana}/>
            <ManaTracker manaIcon={CardService.uSymbolImage} manaCount={props.uManaCount} onIncrementClick={props.incrementUMana} onDecrementClick={props.decrementUMana}/>
            <ManaTracker manaIcon={CardService.bSymbolImage} manaCount={props.bManaCount} onIncrementClick={props.incrementBMana} onDecrementClick={props.decrementBMana}/>
            <ManaTracker manaIcon={CardService.rSymbolImage} manaCount={props.rManaCount} onIncrementClick={props.incrementRMana} onDecrementClick={props.decrementRMana}/>
            <ManaTracker manaIcon={CardService.gSymbolImage} manaCount={props.gManaCount} onIncrementClick={props.incrementGMana} onDecrementClick={props.decrementGMana}/>
            <ManaTracker manaIcon={CardService.cSymbolImage} manaCount={props.cManaCount} onIncrementClick={props.incrementCMana} onDecrementClick={props.decrementCMana}/>
            <button>CLEAR</button>
        </div>
    )
}

export default ManaPool;