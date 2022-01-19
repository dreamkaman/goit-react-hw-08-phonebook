import { useSelector, useDispatch } from 'react-redux';

import Button from '../../Button';

import authSelectors from '../../../redux/auth/authSelectors';
import { authOperations } from '../../../redux/auth/authOperations';

import styles from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => authSelectors.getIsLoggedIn(state));
  const userName = useSelector(state => authSelectors.getUsername(state));
  return (
    <div className={styles.userMenu}>
      {isLoggedIn && <p className={styles.text}>{`Hello, ${userName}`}</p>}

      <Button
        className={styles.btn}
        type="button"
        text="LogOut"
        onClick={() => dispatch(authOperations.logOut())}
      />
    </div>
  );
}

export default UserMenu;
