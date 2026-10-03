import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>

        <NavLink to="/movies" className={styles.link}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;