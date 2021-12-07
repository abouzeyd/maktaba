import React from 'react';
import Home from './screens/Home';
import Cours from './screens/cours/Cours';
import Preches from './screens/preches/Preches';
import Conferences from './screens/conferences/Conferences';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import UsersList from './screens/UsersList';
import User from './screens/user/User.jsx';
import NewUser from './screens/newuser/NewUser';
import CoursAudio from './screens/CoursAudio';
import PrecheAudio from './screens/PrechesAudio';
import ConferencesAudio from './screens/ConferencesAudio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UpdateUser from './screens/updateUser/UpdateUser';
import Allcourt from './screens/allcourt/Allcourt';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cours" component={Cours} />
          <Route path="/preches" component={Preches} />
          <Route path="/conferences" component={Conferences} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/userslist" component={UsersList} />
          <Route path="/user/:userId" component={User} />
          <Route path="/createUser" component={NewUser} />
          <Route path="/updateUser" component={UpdateUser} />
          <Route path="/coursAudio" component={CoursAudio} />
          <Route path="/prechesAudio" component={PrecheAudio} />
          <Route path="/conferencesAudio" component={ConferencesAudio} />
          <Route path="/allcourt/:id" component={Allcourt} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
