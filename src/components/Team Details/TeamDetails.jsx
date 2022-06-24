import { useLocation } from 'react-router-dom';
import styles from './TeamDetails.module.css';

function TeamDetails() {
  const location = useLocation();
  const { team } = location.state;

  return (
    <div className={styles.teamDetailsContainer}>
      <div className={styles.teamDetailsImgCnt}>
        <img className={styles.teamDetailsImg} src={team.logo} alt="team logo" />
      </div>
      <div className={styles.teamDetailsContentCnt}>
        <h2 className={styles.teamDetailsName}>{team.name}</h2>
        <p className={styles.teamDetailsInfo}>
          <span className={styles.teamDetailsTitle}>City:</span>
          {team.city}
        </p>
        <p className={styles.teamDetailsInfo}>
          <span className={styles.teamDetailsTitle}>Founded in:</span>
          {team.founded}
        </p>
        <p className={styles.teamDetailsInfo}>
          <span className={styles.teamDetailsTitle}>Details:</span>
          {team.details}
        </p>
      </div>
    </div>
  );
}

export default TeamDetails;
