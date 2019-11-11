import React, { Component } from "react";
import Navigationbar from './Navigationbar';
import { MDBView, MDBMask, MDBContainer, MDBIcon, MDBRow, MDBBtn,MDBCol} from "mdbreact";
import SSO from './SSOAuth'
export default class Login extends Component {

 
  constructor(props){
    super(props);
    this.state={
      collapsed: false,
      username:"test",
      email:"",
      photoUrl:"",

    }

    this.setAuthData = this.setAuthData.bind(this);

  }


  setAuthData(name){
    this.setState({username:name})
    
    console.log("login component"+this.state.username);
  }






  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  signoutChildCall=()=>{
    console.log('login');
    this.refs.child.signout();
  }

  
  render() {
    const navStyle = { marginTop: "4rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <>

       
        <MDBView src={require('./assets/login-bg.png')} >
        <Navigationbar signout={this.signoutChildCall}/>
        <MDBMask className="rgba-purple-slight d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-4 text-center">
                  <h1 className="display-4 font-weight-bold mb-0 pt-md-5 pt-5" >Log into Matrix</h1>
                  <h5 className="pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5">Simple! Easy! Secure!</h5>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        <SSO ref='child'  authData={this.setAuthData.bind(this)}/>
        </MDBView>
      </>
    );
  }
}
