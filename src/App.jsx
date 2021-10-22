import { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import * as authOperations from './redux/auth/auth-operations';
import ApplicationBar from './components/ApplicationBar';
import Container from './App.styled';
import PrivatRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { getLoadingStatus } from './redux/auth/auth-selectors';

const AsyncLoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-page" */),
);
const AsyncRegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-page" */),
);
const AsyncContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-page" */),
);
const AsyncPageErrorView = lazy(() =>
  import('./views/PageErrorView' /* webpackChunkName: "404-page" */),
);

const App = () => {
  const isUserDataLoading = useSelector(getLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return (
    <>
      <ApplicationBar />
      <ToastContainer />
      <Container>
        <Suspense
          fallback={
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          }
        >
          <Switch>
            <PublicRoute path="/" exact restricted>
              <Redirect to="/login" />
            </PublicRoute>
            <PublicRoute path="/login" restricted>
              <AsyncLoginView />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <AsyncRegisterView />
            </PublicRoute>
            <PrivatRoute path="/contacts">
              {!isUserDataLoading && <AsyncContactsView />}
            </PrivatRoute>
            <Route component={AsyncPageErrorView} />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
