import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <Link to="/"><i className={`${styles.navIcon} fa-solid fa-angle-left`} /></Link>
      <p className={styles.title}>Football Leagues</p>
      <div>
        <i className={`${styles.navIcon} fa-solid fa-microphone`} />
        <i className={`${styles.navIcon} fa-solid fa-gear`} />
      </div>
    </header>
  );
}

export default Navbar;
