import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../redux/auth/auth-selectors';

const PrivateRoute = ({ children, redirectTo = '/', ...routeProps }) => {
  const auth = useSelector(getAuthStatus);

  return (
    <Route {...routeProps}>
      {auth ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;
