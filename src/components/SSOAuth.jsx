import React, { Component } from "react"
//import "./App.css"

import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "------------------------------------",
    authDomain: "------------------------------------",
    databaseURL: "------------------------------------",
    projectId: "------------------------------------",
    storageBucket: "------------------------------------",
    messagingSenderId: "------------------------------------",
    appId: "------------------------------------"
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