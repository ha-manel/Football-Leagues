import axios from 'axios';

// Action
const LOAD_LEAGUES = 'football_leagues/leagues/LOAD_LEAGUES';

// Action Creator
const loadLeagues = (leagues) => ({ type: LOAD_LEAGUES, payload: leagues });

// Reducer
export default function leaguesReducer(state = [], action = {}) {
  switch (action.type) {
    case LOAD_LEAGUES:
      return action.payload;
    default:
      return state;
  }
}

// Side Effects
const fetchLeagues = async () => {
  let leagues = [];
  await axios.get('https://football-apis.herokuapp.com/api/v1/leagues')
    .then((response) => {
      leagues = response.data.leagues;
    });
  return leagues;
};

export { fetchLeagues, loadLeagues };
