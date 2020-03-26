import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import createHistory from 'history/createBrowserHistory';
import PublicRoute from './PublicRoute';
import StudentRoute from './StudentRoute';
import CommitteeRoute from './CommitteeRoute';
import LoginPage from '../Pages/LoginPage/LoginPage';
import ViewStudent from '../Pages/Student/ViewStudent';
import Done from '../components/Empty/Done'
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
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import Committee from '../Pages/Committee/Committee';
import Innerinfo from '../Pages/Committee/Innerinfo';
import Comment from '../Pages/Committee/Comment'
import Startpage from '../Pages/Startpage/Startpage'
import SecretaryRoute from './SecretaryRoute';
import NotFound from '../components/Empty/NotFound';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <LastLocationProvider>
      <Switch>
        <PublicRoute path='/register' component={RegisterPage} exact={true} />
        {/* <PublicRoute path='/' component={LoginPage} exact={true} /> */}
        <PublicRoute path='/' component={Startpage} exact={true} />

        <SecretaryRoute path='/dashboard' component={ViewGrievances} exact={true} />
        <SecretaryRoute path='/selected' component={SelectedPage} exact={true} />
        <SecretaryRoute path='/processing' component={UnderProcessPage} exact={true} />


        <SecretaryRoute path='/committee' component={CommitteePage} exact={true} />
        <SecretaryRoute path='/committee/register' component={RegisterCommittee} />
        <SecretaryRoute path='/committee/view/:id' component={CommitteeViewPage} exact={true} />
        <SecretaryRoute path='/pending' component={PendingPage} exact={true} />
        <SecretaryRoute path='/view/:id' component={ViewGrievance} />

        <CommitteeRoute path='/committee/innerinfo/:id' component={Innerinfo} />
        <CommitteeRoute path='/committee/dashboard' component={Committee} exact={true} />
        <CommitteeRoute path='/Comment' component={Comment} exact={true} />

        <StudentRoute path='/student/dashboard' component={ViewStudent} exact={true} />
        <StudentRoute path='/success' component={Done} exact={true} />
        <StudentRoute path='/student/status' component={Status} exact={true} />
        <StudentRoute path='/student/status/:id' component={Status} exact={true} />
        <Route component={NotFound} />
        {/* <Redirect from="/" to="/components" /> */}
      </Switch>
    </LastLocationProvider>
  </Router>
);

export default AppRouter;