import React from 'react';
import { Router, Switch, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Layout from '../containers/Layout/Layout';
import NavBar from '../containers/NavBar/NavBar';
import LoginPage from '../Pages/LoginPage/LoginPage';
import RegisterPage from '../Pages/RegisterPage.jsx/RegisterPage';
import RegisterForm from '../components/RegisterForm/RegisterForm2';
import RegisterForm2 from '../components/RegisterForm/RegisterForm2';
import ViewGrievances from '../Pages/ViewGrievances/ViewGrievances';
import ViewGrievance from '../Pages/ViewGrievance/ViewGrievance';
import SelectedPage from '../Pages/SelectedPage/SelectedPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
      <Switch>
        <PublicRoute path='/' component={ViewGrievances} exact={true} />
        <PublicRoute path='/selected' component={SelectedPage} exact={true} />
        <PublicRoute path='/nav' component={NavBar} exact={true} />
        <PublicRoute path='/register' component={RegisterForm2} exact={true} />
        <PublicRoute path='/login' component={LoginPage} exact={true} />
        <PublicRoute path='/view/:id' component={ViewGrievance} />
        <Redirect from="/" to="/components" />
      </Switch>
  </Router>
);

export default AppRouter;