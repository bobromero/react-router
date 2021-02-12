import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'

//pages
import MainPage from './pages'

function App() {
  return (
    <Router>
      <Route path="/" component={MainPage} />

    </Router>
  );
}

export default App;
