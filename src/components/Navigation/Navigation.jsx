import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserMenu from './UserMenu';
import AuthNavigation from './AuthNavigation';

import authSelectors from '../../redux/auth/authSelectors';

import styles from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(state => authSelectors.getIsLoggedIn(state));
  return (
    <nav className={styles.navbar}>
      <div>
        <NavLink to="/" exact className={styles.link} activeClassName={styles.activeLink}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={styles.link} activeClassName={styles.activeLink}>
          Phonebook
        </NavLink>
      </div>

      {isLoggedIn ? <UserMenu className={styles.userMenu} /> : <AuthNavigation />}
    </nav>
  );
}

export default Navigation;
