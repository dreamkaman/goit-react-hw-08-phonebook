import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import authSelectors from '../../redux/auth/authSelectors';

function PrivateRoute({ children, ...propRoute }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return <Route {...propRoute}>{isLoggedIn ? children : <Redirect to="/login" />}</Route>;
}

export default PrivateRoute;
