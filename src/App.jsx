import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';

import Login from './components/Login';
import NarratingPage from './components/NarratingPage';
import AudioPlayerPage from './components/AudioPlayerPage';
import BookView from './components/BookView'





class App extends Component {
  render() {
    return(
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/bookview" component={BookView} />
        </div>
      </Router>
      );
  }
    
}

export default App;
