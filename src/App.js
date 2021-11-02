import React from 'react';
import Home from './screens/Home';
import Cours from './screens/Cours';
import Preches from './screens/Preches';
import Conferences from './screens/Conferences';
import Login from './screens/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
