import React from 'react';
import { Router, Switch, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Layout from '../containers/Layout';
import NavBar from '../containers/NavBar';
import LoginPage from '../Pages/LoginPage/LoginPage';
import RegisterPage from '../Pages/RegisterPage.jsx/RegisterPage';
import RegisterForm from '../components/RegisterForm/RegisterForm2';
import RegisterForm2 from '../components/RegisterForm/RegisterForm2';
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
      <Switch>
        <PublicRoute path='/' component={Layout} exact={true} />
        <PublicRoute path='/nav' component={NavBar} exact={true} />
        <PublicRoute path='/register' component={RegisterForm2} exact={true} />
        <PublicRoute path='/login' component={LoginPage} exact={true} />
        <Redirect from="/" to="/components" />
      </Switch>
  </Router>
);

export default AppRouter;