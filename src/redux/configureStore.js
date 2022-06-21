import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import leaguesReducer from './leagues/leagues';
import teamsReducer from './teams/teams';

const rootReducer = combineReducers({
  leagues: leaguesReducer,
  teams: teamsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
