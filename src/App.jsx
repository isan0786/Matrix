import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import BookView from './components/BookView';
import Login from './components/Login';
import AudioPlayerPage from './components/AudioPlayerPage';
import FileNarration from './components/FileNarration';



class App extends Component {
  render() {
    return(
    <Router>
      <div>
      
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/BookView" component={BookView} />
          <Route exact path="/AudioPlayerPage" component={AudioPlayerPage} />
          <Route exact path="/Narration" component={FileNarration} />
          
        {/* <Route exact path="/mediaplayer" component={} /> */}
        
        </div>
      </Router>
      );
  }
    
}

export default App;
