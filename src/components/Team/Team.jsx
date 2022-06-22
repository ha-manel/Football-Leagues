import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Team.module.css';

function Team({ team }) {
  return (
    <Link to="/team" state={{ team }}>
      <div className={styles.teamContainer}>
        <i className={`${styles.teamDetailsIcon} fa-solid fa-right-from-bracket`} />
        <div className={styles.teamImgContainer}>
          <img className={styles.teamImg} src={team.logo} alt="team logo" />
        </div>
        <div className={styles.teamInfo}>
          <h3 className={styles.teamName}>{team.name}</h3>
          <p className={styles.teamCity}>{team.city}</p>
        </div>
      </div>
    </Link>
  );
}

Team.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    founded: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
  }),
};

Team.defaultProps = {
  team: {},
};

export default Team;
