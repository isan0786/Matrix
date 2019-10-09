import React, { Component } from "react"
//import "./App.css"
import {useSelector,connect} from 'react-redux';
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

   class SSOAuth extends Component {

    // capturedata=()=>{
     
    //   this.props.setAuthData(firebase.auth().currentUser.displayName,firebase.auth().currentUser.email,firebase.auth().currentUser.photoURL);
    // }

    // constructor(props){
    //   super(props);
    //   this.setAuthData = this.setAuthData.bind(this);
    // }

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

  signout(){
    //console.log('chut');
    
    firebase.auth().signOut();
   
  }

  // setAuthData(){
  //   this.props.authData(firebase.auth().currentUser.displayName);
  // }

  // componentDidUpdate=()=>{
  //   console.log('update');
  //   if(this.state.isSignedIn === true){
  //     console.log('signed');
  //     this.props.authData(firebase.auth().currentUser.displayName);
  //  }
  // }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={this.signout}>Sign out!</button>
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

// const mapStateToProps = state => ({ counter: state.counter })

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: (counter) =>{dispatch({type:'INC', count:counter})},
//         decrement: (counter) =>{dispatch({type:'DEC', count:counter})}
//     }
//   }


export default (SSOAuth);

