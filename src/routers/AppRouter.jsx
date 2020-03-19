import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import createHistory from 'history/createBrowserHistory';
import PublicRoute from './PublicRoute';
import StudentRoute from './StudentRoute';
import CommitteeRoute from './CommitteeRoute';
import LoginPage from '../Pages/LoginPage/LoginPage';
import ViewStudent from '../Pages/ViewGrievances/ViewStudent';
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
import SecretaryRoute from './SecretaryRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <LastLocationProvider>
      <Switch>
        <PublicRoute path='/register' component={RegisterPage} exact={true} />
        <PublicRoute path='/' component={LoginPage} exact={true} />

        <SecretaryRoute path='/vinaydashboard' component={ViewGrievances} exact={true} />
        <SecretaryRoute path='/vinayselected' component={SelectedPage} exact={true} />
        <SecretaryRoute path='/processing' component={UnderProcessPage} exact={true} />
        <SecretaryRoute path='/vinaycommittee' component={CommitteePage} exact={true} />
        <SecretaryRoute path='/vinaycommittee/register' component={RegisterCommittee} />
        <SecretaryRoute path='/vinaycommittee/view/:id' component={CommitteeViewPage} exact={true} />
        <SecretaryRoute path='/vinaypending' component={PendingPage} exact={true} />
        <SecretaryRoute path='/vinayview/:id' component={ViewGrievance} />

        <CommitteeRoute path='/vinayInnerinfo/:id' component={Innerinfo} exact={true}/>
        <CommitteeRoute path='/vinaycommittee/dashboard' component={Committee} exact={true} />
        <CommitteeRoute path='/vinayComment' component={Comment} exact={true} />

        <StudentRoute path='/vinaystudent/dashboard' component={ViewStudent} exact={true} />
        <StudentRoute path='/vinaystudent/status' component={Status} exact={true} />
        <StudentRoute path='/vinaystudent/status/:id' component={Status} exact={true} />


        {/* <Redirect from="/" to="/components" /> */}
      </Switch>
    </LastLocationProvider>
  </Router>
);

export default AppRouter;