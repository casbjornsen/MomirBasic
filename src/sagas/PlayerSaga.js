import {call, put, takeEvery} from 'redux-saga/effects';
import CardService from '../services/CardService';

const cardService = new CardService();

function* fetchCreatureToken(action) {
    try{
        const creatureToken = yield call(cardService.getRandomCreature, action.payload);
        yield put({type: 'ADD_CREATURE_TO_BATTLEFIELD', payload: creatureToken});
    } catch(e){
        console.error('ERROR FETCHING CREATURE TOKEN!!!');
    }
}

function* creatureTokenSaga(){
    yield takeEvery('FETCH_CREATURE_TOKEN', fetchCreatureToken);
}

export default creatureTokenSaga;