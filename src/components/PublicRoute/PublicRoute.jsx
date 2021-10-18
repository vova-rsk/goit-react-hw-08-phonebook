import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../redux/auth/auth-selectors';

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/contacts',
  ...routeProps
}) => {
  const auth = useSelector(getAuthStatus);
  const shouldRedirect = auth && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;
