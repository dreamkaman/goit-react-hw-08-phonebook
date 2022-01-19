import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import authSelectors from '../../../redux/auth/authSelectors';

function PublicRoute({ children, restricted = false, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  return <Route {...routeProps}>{shouldRedirect ? <Redirect to="/" /> : children}</Route>;
}

export default PublicRoute;
