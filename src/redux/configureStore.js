import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import leaguesReducer from './leagues/leagues';

const rootReducer = combineReducers({
  leagues: leaguesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
