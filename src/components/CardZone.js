import React from 'react';

function CardZone(props){
    return(
        <div className={"cardZone "+props.name}>{props.cards}</div>
    );
}

export default CardZone;