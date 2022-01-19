import { NavLink } from 'react-router-dom';
// import UserMenu from '../UserMenu';

import styles from './AuthNavigation.module.css';

const AuthNavigation = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to="/register" className={styles.link} activeClassName={styles.activeLink}>
        SignUp
      </NavLink>
      <NavLink to="/login" className={styles.link} activeClassName={styles.activeLink}>
        LogIn
      </NavLink>
    </div>
  );
};

export default AuthNavigation;
