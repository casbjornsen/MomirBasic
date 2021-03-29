import React from 'react';
import Heart from './icons/Heart';
import UpTriangle from './icons/UpTriangle';
import DownTriangle from './icons/DownTriangle';

function LifeTracker (props){
    return (
        <div className="life-tracker-container">
            <div className="life-display">
                <Heart width="160" height="160" color="#ff0707"/>
                <div className="life-display-text">
                    {props.lifeTotal}
                </div>
            </div>
            <div className="life-button-container">
                <button onClick={props.onLifeIncrementClick}>
                    <UpTriangle width="40" height="40" color="white"/>
                </button>
                <button onClick={props.onLifeDecrementClick}>
                    <DownTriangle width="40" height="40" color="white"/>
                </button>
            </div>
        </div>
    );
}

export default LifeTracker;