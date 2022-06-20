import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <div><i className={`${styles.navIcon} fa-solid fa-angle-left`} /></div>
      <div>
        <i className={`${styles.navIcon} fa-solid fa-microphone`} />
        <i className={`${styles.navIcon} fa-solid fa-gear`} />
      </div>
    </header>
  );
}

export default Navbar;
