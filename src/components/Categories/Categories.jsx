import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { fetchTeams, loadTeams } from '../../redux/teams/teams';
// import Team from '../Team/Team';

function Categories() {
  // const dispatch = useDispatch();
  const leagues = useSelector((state) => state.leagues);
  // const teams = useSelector((state) => state.teams);
  const [league, setLeague] = useState(leagues.filter((l) => l.league_id === 39)[0]);

  const displayLeague = (id) => {
    setLeague(() => leagues.filter((l) => l.league_id === id)[0]);
    // const result = await fetchTeams(id, 2021);
    // dispatch(loadTeams(result));
  };

  return (
    <div>
      <div>
        <button type="button" onClick={() => displayLeague(39)}>
          Premier League
        </button>
        <button type="button" onClick={() => displayLeague(135)}>
          Serie A
        </button>
        <button type="button" onClick={() => displayLeague(140)}>
          La Liga
        </button>
        <button type="button" onClick={() => displayLeague(186)}>
          Ligue 1
        </button>
      </div>

      <div>
        <div>
          <img src={league.league_logo} alt="league logo" />
        </div>
        <div>
          <h3>{league.league_name}</h3>
          <p>{league.league_country}</p>
        </div>
      </div>
      {/*
      <div>
        {teams.length > 1 && teams.map((team) => (
          <Team key={team.team_id} team={team} />
        ))}
      </div> */}
    </div>
  );
}

export default Categories;
