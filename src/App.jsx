import { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import * as authOperations from './redux/auth/auth-operations';
import ApplicationBar from './components/ApplicationBar';
import Container from './App.styled';
// import { RegisterView, LoginView, ContactsView, PageErrorView } from './views';
import PrivatRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { getLoadingStatus } from './redux/auth/auth-selectors';

import ContactsView from './views/ContactsView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import PageErrorView from './views/PageErrorView';

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
        <Switch>
          <PublicRoute path="/" exact restricted>
            <Redirect to="/login" />
          </PublicRoute>
          <PublicRoute path="/login" restricted>
            <LoginView />
          </PublicRoute>
          <PublicRoute path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PrivatRoute path="/contacts">
            {!isUserDataLoading && <ContactsView />}
          </PrivatRoute>
          <Route component={PageErrorView} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
