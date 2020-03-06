import React from 'react';
import { Router, Switch, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Layout from '../containers/Layout/Layout';
import NavBar from '../containers/NavBar/NavBar';
import LoginPage from '../Pages/LoginPage/LoginPage';
import LoginForm2 from '../components/LoginForm/LoginForm2';
import ViewStudent from '../Pages/ViewGrievances/ViewStudent';
import RegisterForm2 from '../components/RegisterForm/RegisterForm2';
import ViewGrievances from '../Pages/ViewGrievances/ViewGrievances';
import ViewGrievance from '../Pages/ViewGrievance/ViewGrievance';
import SelectedPage from '../Pages/SelectedPage/SelectedPage';
import UnderProcessPage from '../Pages/UnderProcessPage/UnderProcessPage';
import PendingPage from '../Pages/PendingPage/PendingPage';
import CommitteePage from '../Pages/CommitteePage/CommitteePage';
import CommitteeViewPage from '../Pages/CommitteeViewPage/CommitteeViewPage';
import CommitteeForm from '../components/CommitteeForm/CommitteeForm';
import Status from '../../src/components/StudentGriv/Status';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
      <Switch>
        <PublicRoute path='/' component={ViewGrievances} exact={true} />
        <PublicRoute path='/selected' component={SelectedPage} exact={true} />
        <PublicRoute path='/processing' component={UnderProcessPage} exact={true} />
        <PublicRoute path='/committee' component={CommitteePage} exact={true} />
        <PublicRoute path='/register/:id' component={CommitteeForm}  />
        <PublicRoute path='/committee/view/:id' component={CommitteeViewPage} exact={true} />
        <PublicRoute path='/pending' component={PendingPage} exact={true} />
        <PublicRoute path='/nav' component={NavBar} exact={true} />
        <PublicRoute path='/register' component={RegisterForm2} exact={true} />
        <PublicRoute path='/login' component={LoginForm2} exact={true} />
        <PublicRoute path='/viewStudent' component={ViewStudent} exact={true} />
        <PublicRoute path='/status' component={Status} exact={true} /> 
        <PublicRoute path='/view/:id' component={ViewGrievance} />
        {/* <Redirect from="/" to="/components" /> */}
      </Switch>
  </Router>
);

export default AppRouter;