import React, { useState } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import CardService from '../services/CardService';
import ImageInput from './ImageInput';
import LabeledInput from './LabeledInput';
import PlayerStore from '../stores/PlayerStore';
import '../css/PlayerSetup.css';

function PlayerSetup(props) {
    
    const [landCount, setLandCount] = useState(
        {
            plains: 0,
            islands: 0,
            swamps: 0,
            mountains: 0,
            forests: 0,
            wastes: 0
        });
    const [playerName, setPlayerName] = useState("");
    
    const onStartGame = () => {
        props.onChange(landCount, playerName);
    }

    const landInputs = [
        {
            name: "Plains",
            image: CardService.wSymbolImage,
            onChange: (e) => setLandCount({...landCount, plains: e.target.value}),
        },
        {
            name: "Islands",
            image: CardService.uSymbolImage,
            onChange: (e) => setLandCount({...landCount, islands: e.target.value}),
        },
        {
            name: "Swamps",
            image: CardService.bSymbolImage,
            onChange: (e) => setLandCount({...landCount, swamps: e.target.value}),
        },
        {
            name: "Mountains",
            image: CardService.rSymbolImage,
            onChange: (e) => setLandCount({...landCount, mountains: e.target.value}),
        },
        {
            name: "Forests",
            image: CardService.gSymbolImage,
            onChange: (e) => setLandCount({...landCount, forests: e.target.value}),
        },
        {
            name: "Wastes",
            image: CardService.cSymbolImage,
            onChange: (e) => setLandCount({...landCount, wastes: e.target.value}),
        }
    ]

    const landInputEls = landInputs.map((x, idx) => {
        return <ImageInput
        key={idx}
        imgSrc={x.image}
        imgAlt={x.name}
        inputType="number"
        min="0"
        max="60"
        onChange={x.onChange}
        className="mana-symbol" />
    });
    
    return (
        <div>
            <div className="player-setup-header">Please input your name and the number of lands you would like in your deck (60 total):</div>
            <div className="player-setup">
                <LabeledInput
                labelId="playerName"
                labelText="Player Name:" 
                inputType="text"
                onChange={(e) => setPlayerName(e.target.value)}
                className="name-input"/>
                {landInputEls}
            </div>
            <Link to="/play">
                <button type="button" onClick={onStartGame}>Start Game!</button>
            </Link>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return{
        onChange: (landCount, playerName) => dispatch(PlayerStore.initPlayer(landCount, playerName))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerSetup);