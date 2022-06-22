import { useState } from 'react';
import { useSelector } from 'react-redux';
import Team from '../Team/Team';
import styles from './Categories.module.css';

function leagueegories() {
  const leagues = useSelector((state) => state.leagues);
  const [league, setLeague] = useState(leagues.filter((l) => l.name === 'Premier League')[0]);

  const displayLeague = (name) => {
    setLeague(() => leagues.filter((l) => l.name === name)[0]);
  };

  return (
    <div className={styles.leaguesSection}>
      <div className={styles.filterBtns}>
        <button className={styles.filterBtn} type="button" onClick={() => displayLeague('Premier League')}>
          Premier League
        </button>
        <button className={styles.filterBtn} type="button" onClick={() => displayLeague('Serie A')}>
          Serie A
        </button>
        <button className={styles.filterBtn} type="button" onClick={() => displayLeague('La Liga')}>
          La Liga
        </button>
        <button className={styles.filterBtn} type="button" onClick={() => displayLeague('Primeira Liga')}>
          Primeira Liga
        </button>
      </div>

      <div className={styles.filteredLeague}>
        <div>
          <img className={styles.leagueImg} src={league.logo} alt="league logo" />
        </div>
        <div>
          <h3 className={styles.leagueName}>{league.name}</h3>
          <p className={styles.leagueCountry}>{league.country}</p>
        </div>
      </div>

      <div className={styles.teamsContainer}>
        {league.teams.map((team) => (
          <Team key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}

export default leagueegories;
