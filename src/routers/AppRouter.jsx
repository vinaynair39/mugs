import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import createHistory from 'history/createBrowserHistory';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
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
import Status from '../components/StudentGriv/status';
import RegisterCommittee from '../Pages/RegisterCommittee/RegisterCommittte';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import RegisterPage from '../Pages/RegisterPage.jsx/RegisterPage';
import Committee from '../Pages/Committee/Committee';
import Innerinfo from '../Pages/Committee/Innerinfo';
import Comment from '../Pages/Committee/Comment'

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <LastLocationProvider>
      <Switch>
        <PrivateRoute path='/dashboard' component={ViewGrievances} exact={true} />
        <PrivateRoute path='/selected' component={SelectedPage} exact={true} />
        <PrivateRoute path='/processing' component={UnderProcessPage} exact={true} />
        <PrivateRoute path='/committee' component={CommitteePage} exact={true} />
        <PrivateRoute path='/committee/register' component={RegisterCommittee} />
        <PrivateRoute path='/committee/view/:id' component={CommitteeViewPage} exact={true} />
        <PrivateRoute path='/pending' component={PendingPage} exact={true} />
        <PrivateRoute path='/nav' component={NavBar} exact={true} />
        <PublicRoute path='/register2' component={RegisterForm2} exact={true} />
        <PublicRoute path='/register' component={RegisterPage} exact={true} />
        <PublicRoute path='/' component={LoginPage} exact={true} />
        <PrivateRoute path='/viewStudent' component={ViewStudent} exact={true} />
        <PrivateRoute path='/status' component={Status} exact={true} />
        <PrivateRoute path='/view/:id' component={ViewGrievance} />
        <PrivateRoute path='/Innerinfo/:id' component={Innerinfo}/>
        <PrivateRoute path='/mycommittee' component={Committee} exact={true}/>
        <PrivateRoute path='/Comment' component={Comment} exact={true}/>
        {/* <Redirect from="/" to="/components" /> */}
      </Switch>
    </LastLocationProvider>
  </Router>
);

export default AppRouter;