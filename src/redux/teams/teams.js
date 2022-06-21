import axios from 'axios';

// Action
const LOAD_TEAMS = 'football_leagues/teams/LOAD_TEAMS';

// Action Creator
const loadTeams = (teams) => ({ type: LOAD_TEAMS, payload: teams });

// Reducer
export default function teamsReducer(state = [], action = {}) {
  switch (action.type) {
    case LOAD_TEAMS:
      return action.payload;
    default:
      return state;
  }
}

// Side Effects
const fetchTeams = async (league, season) => {
  let teams = [];
  await axios.get(`https://v3.football.api-sports.io/teams?league=${league}&season=${season}`, {
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': 'aabed6ffaaa4ad309e294100c98626ba',
    },
  }).then((response) => {
    teams = response.data.response
      .map((teamObj) => ({
        team_id: teamObj.team.id,
        team_name: teamObj.team.name,
        team_logo: teamObj.team.logo,
        team_country: teamObj.team.country,
        foundation_year: teamObj.team.founded,
      }));
  });
  return teams;
};

export { fetchTeams, loadTeams };
