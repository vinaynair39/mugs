import React from 'react';
import { Router, Switch, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Layout from '../containers/Layout/Layout';
import NavBar from '../containers/NavBar/NavBar';
import LoginPage from '../Pages/LoginPage/LoginPage';
import RegisterPage from '../Pages/RegisterPage.jsx/RegisterPage';
import ViewGrievances from '../Pages/ViewGrievances/ViewGrievances';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
      <Switch>
        <PublicRoute path='/' component={ViewGrievances} exact={true} />
        <PublicRoute path='/nav' component={NavBar} exact={true} />
        <PublicRoute path='/register' component={RegisterPage} exact={true} />
        <PublicRoute path='/login' component={LoginPage} exact={true} />
        <PublicRoute path='/view/:id' component={Layout} />
        <Redirect from="/" to="/components" />
      </Switch>
  </Router>
);

export default AppRouter;