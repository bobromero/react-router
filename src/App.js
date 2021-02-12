import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'

//pages
import MainPage from './pages'
import MissingPage from './pages/pageNotFound'
import UsersPage from './pages/users';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/users" component={UsersPage}/>
        <Route exact path="/404" component={MissingPage} />
        <Redirect to="/404"/>
      </Switch>
        

    </Router>
  );
}

export default App;
