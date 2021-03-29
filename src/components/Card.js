import React from 'react';
import CardOptionsButton from './CardOptionsButton';

function Card(props) {

    const handleCardClick = () => {
        props.onCardClick(props.index, props.zone)
    }
    const handleOptionsClick = () => {
        props.onOptionsClick(props.index, props.zone)
    }

    return (
        <div className={"card" + (props.isTapped ? " tapped" : "")}>
            <CardOptionsButton zone={props.zone} onClick={handleOptionsClick}/>
            <img src={props.imgSrc} alt={props.name} onClick={handleCardClick}/>
        </div>
    );
}

export default Card;