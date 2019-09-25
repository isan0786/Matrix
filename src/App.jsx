import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';

import Login from './components/Login';






class App extends Component {
  render() {
    return(
    <Router>
      <div>
<<<<<<< HEAD
      
        <Route exact path="/" component={AudioPlayerPage} />
=======
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/mediaplayer" component={} /> */}
>>>>>>> master
        
        </div>
      </Router>
      );
  }
    
}

export default App;
