
import {createStore, combineReducers, applyMiddleware} from 'redux';
import PlayerStore from './PlayerStore';
 
import createSagaMiddleware from 'redux-saga';
import PlayerSaga from '../sagas/PlayerSaga';
 
const sagaMiddleware = createSagaMiddleware();
 
const store = createStore(
    combineReducers({
        player: PlayerStore.reducer
    }),
    applyMiddleware(sagaMiddleware)
);
 
sagaMiddleware.run(PlayerSaga);
 
export default store;