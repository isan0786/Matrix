import React, { Component } from "react"
//import "./App.css"
import {useSelector,connect} from 'react-redux';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {  MDBRow,  MDBCard, MDBCardBody,  MDBIcon, MDBCol, MDBCardImage, MDBCardText, MDBCardTitle } from "mdbreact";
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


  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
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
    
    firebase.auth().signOut();
   
  }


  render() {
    return (
      <div  class="container text-center ">
        {this.state.isSignedIn ? (
          <span>
            {/* <div>Signed In!</div>
            <button onClick={this.signout}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <h1>Email {firebase.auth().currentUser.email}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            /> */}
          
          <MDBRow  class="container text-center">
      <MDBCol md="6" lg="3">
        <MDBCard personal className="my-5">
          <MDBCardImage
            top
            src={firebase.auth().currentUser.photoURL}
            alt="MDBCard image cap"
          />
          <MDBCardBody>
            <MDBCardTitle>
              <a href="#!" className="title-one">
              {firebase.auth().currentUser.displayName}
              </a>
            </MDBCardTitle>
            
            <MDBCardText>Thank you for connecting.</MDBCardText>
            <hr />
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>


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

