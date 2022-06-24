import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import { act } from 'react-dom/test-utils';
import App from '../App';
import leaguesReducer from '../redux/leagues/leagues';

const reducer = combineReducers({
  leagues: leaguesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

const mockApiData = [{
  "id": "423e4faa-4c4b-4cf2-b1e9-03e8e5cace1f",
  "name": "Premier League",
  "country": "England",
  "logo": "https://media.api-sports.io/football/leagues/39.png",
  "teams": [
    {
      "id": "0b9d69df-5a2d-44c4-8502-3bbf32e6bb3a",
      "name": "Manchester United",
      "city": "Manchester",
      "founded": 1878,
      "details": "Manchester United Football Club, commonly referred to as Man United, is a professional football club based in the Old Trafford area of Manchester, England. The club competes in the Premier League, the top division in the English football league system.",
      "logo": "https://media.api-sports.io/football/teams/33.png"
    },
    {
      "id": "6ac5a9fd-9c5f-4b5e-b9a5-aeb3618890d6",
      "name": "Newcastle",
      "city": "Newcastle upon Tyne",
      "founded": 1892,
      "details": "Newcastle United Football Club is an English professional football club based in Newcastle upon Tyne, that plays in the Premier League – the top flight of English football. The club was founded in 1892 by the merger of Newcastle East End and Newcastle West End.",
      "logo": "https://media.api-sports.io/football/teams/34.png"
    },],
},];

const initialState = { "leagues": [] };

const mockLoadLeagues = () => ({ type: 'football_leagues/leagues/LOAD_LEAGUES', payload: mockApiData });

describe('page render test:', () => {
  it('Homepage renders correctly', () => {
    const page = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(page).toMatchSnapshot();
  });
});

describe('Redux store tests:', () => {
  it('Reducer returns initial state', () => {
    expect(store.getState()).toEqual(initialState);
  });

  it('loadLeagues action dispatched correctly', () => {
    act(() => {
      store.dispatch(mockLoadLeagues());
    });
    expect(store.getState().leagues).toEqual(mockApiData);
  });
});
