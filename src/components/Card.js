import React from 'react';

function Card(props) {

    const handleCardClick = () => {
        props.onCardClick(props.index, props.zone)
    }

    return (
        <div id={props.id} className={"card" + (props.isTapped ? " tapped" : "")}>
            <img src={props.imgSrc} alt={props.name} onClick={handleCardClick}/>
        </div>
    );
}

export default Card;