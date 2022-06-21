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
  await axios.get('https://v3.football.api-sports.io/leagues', {
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': 'aabed6ffaaa4ad309e294100c98626ba',
    },
  }).then((response) => {
    leagues = response.data.response
      .filter(
        (leagueObj) => leagueObj.league.id === 186
          || leagueObj.league.id === 39
          || leagueObj.league.id === 140
          || leagueObj.league.id === 135,
      )
      .map((leagueObj) => ({
        league_id: leagueObj.league.id,
        league_name: leagueObj.league.name,
        league_logo: leagueObj.league.logo,
        league_country: leagueObj.country.name,
      }));
  });
  return leagues;
};

export { fetchLeagues, loadLeagues };
