import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { postReducer } from './reducers';
import mySagas from './sagas';

const combinedReducers = () => combineReducers({
    post: postReducer
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducers(), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySagas);


export { store };
