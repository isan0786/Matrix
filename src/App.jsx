import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import NarratingPage from './components/NarratingPage';
import AudioPlayerPage from './components/AudioPlayerPage';


class App extends Component {
  render() {
    return(
    <Router>
      <div>
      
        <Route exact path="/" component={AudioPlayerPage} />
        
        </div>
      </Router>
      );
  }
    
}

export default App;
