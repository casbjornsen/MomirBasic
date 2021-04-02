import React from 'react';
import CardService from '../services/CardService';
import Card from './Card';

function CardStack(props){
    let topImage = undefined;
    if(props.contents.length > 0){
        topImage = (props.isTopRevealed && props.contents[0].image !== undefined) ? props.contents[0].image : CardService.cardBackImage;
    }
    return(
        <div id={props.id}>
            <Card 
                imgSrc={topImage}
                alt={props.name}
                zone={props.name}
                index="0"
                name={(props.contents.length > 0 && props.contents[0].name !== undefined) ? props.contents[0].name : ""}
                onCardClick={props.contents.length > 0 ? props.onClick : () => { return }}
                onOptionsClick={props.contents.length > 0 ? props.onOptionsClick : () => { return }}/>
        </div>
    )
}

export default CardStack;