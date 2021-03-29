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

    return (
        <div>
            <div className="player-setup-header">Please input your name and the number of lands you would like in your deck (60 total):</div>
            <div className="player-setup">
                <LabeledInput
                labelId="playerName"
                labelText="Player Name:" 
                inputType="text"
                onChange={(e) => setPlayerName(e.target.value)}
                className="name-input"
                />
                <ImageInput
                imgSrc={CardService.wSymbolImage}
                imgAlt="Plains"
                inputType="number"
                min="0"
                max="60"
                onChange={(e) => setLandCount({...landCount, plains: e.target.value})}
                className="mana-symbol"
                />
                <ImageInput
                imgSrc={CardService.uSymbolImage}
                imgAlt="Islands"
                inputType="number"
                min="0"
                max="60"
                onChange={(e) => setLandCount({...landCount, islands: e.target.value})}
                className="mana-symbol"
                />
                <ImageInput
                imgSrc={CardService.bSymbolImage}
                imgAlt="Swamps"
                inputType="number"
                min="0"
                max="60"
                onChange={(e) => setLandCount({...landCount, swamps: e.target.value})}
                className="mana-symbol"
                />
                <ImageInput
                imgSrc={CardService.rSymbolImage}
                imgAlt="Mountains"
                inputType="number"
                min="0"
                max="60"
                onChange={(e) => setLandCount({...landCount, mountains: e.target.value})}
                className="mana-symbol"
                />
                <ImageInput
                imgSrc={CardService.gSymbolImage}
                imgAlt="Forests"
                inputType="number"
                min="0"
                max="60"
                onChange={(e) => setLandCount({...landCount, forests: e.target.value})}
                className="mana-symbol"
                />
                <ImageInput
                imgSrc={CardService.cSymbolImage}
                imgAlt="Wastes"
                inputType="number"
                min="0"
                max="60"
                onChange={(e) => setLandCount({...landCount, wastes: e.target.value})}
                className="mana-symbol"
                />
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