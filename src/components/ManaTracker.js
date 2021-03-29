import React from 'react';
import UpTriangle from './icons/UpTriangle';
import DownTriangle from './icons/DownTriangle';

function ManaTracker(props){
    return (
        <div className="mana-tracker-container">
            
            <button className="mana-tracker-button" onClick={props.onIncrementClick}>
                <UpTriangle width="25" height="25" color="white"/>
            </button>
            <div className="mana-count-container">
                <img src={props.manaIcon} />
                <div className="mana-count">
                    {props.manaCount}
                </div>
            </div>
            <button className="mana-tracker-button" onClick={props.onDecrementClick}>
                <DownTriangle width="25" height="25" color="white"/>
            </button>
        </div>
    );
}

export default ManaTracker;