import React, { Component } from "react"
//import "./App.css"

import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBCSZPLze1QkrWJZ3pX5EOVue2MFOwNaKI",
    authDomain: "matrix-31194.firebaseapp.com",
    databaseURL: "https://matrix-31194.firebaseio.com",
    projectId: "matrix-31194",
    storageBucket: "matrix-31194.appspot.com",
    messagingSenderId: "713246455922",
    appId: "1:713246455922:web:87ea10ac20f833d692aaeb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default class SSOAuth extends Component {

    capturedata=()=>{
     
      this.props.setAuthData(firebase.auth().currentUser.displayName,firebase.auth().currentUser.email,firebase.auth().currentUser.photoURL);
    }

  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      // console.log("user", user)
    })
   

  }

  // componentDidUpdate=()=>{
  //   console.log('update');
  //   if(this.state.isSignedIn === true && this.props.userName != firebase.auth().currentUser.displayName){
  //     console.log('signed');
  //     this.capturedata();
  //  }
  // }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <h1>Email {firebase.auth().currentUser.email}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

//  export default App