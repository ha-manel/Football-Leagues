// import styles from './Categories.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeagues } from '../../redux/leagues/leagues';

function Categories() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeagues);
  }, []);

  const leagues = useSelector((state) => state.leagues);
  console.log(leagues);

  const [league, setLeague] = useState();
  console.log(league);

  const displayLeague = (id) => {
    setLeague(() => [...leagues.filter((l) => l.league_id === id)]);
  };

  return (
    <div>
      <div>
        <button type="button" onClick={() => displayLeague(39)}>Premier League</button>
        <button type="button" onClick={() => displayLeague(135)}>Serie A</button>
        <button type="button" onClick={() => displayLeague(140)}>La Liga</button>
        <button type="button" onClick={() => displayLeague(186)}>Ligue 1</button>
      </div>

      {/* <div>
        <div>
          <img src={league.league_logo} alt="league logo" />
        </div>
        <div>
          <h3>{league.league_name}</h3>
          <p>{league.league_country}</p>
        </div>
      </div> */}
    </div>
  );
}

export default Categories;
