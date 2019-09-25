import React, { Component } from "react";
import Navigationbar from './Navigationbar';
import { MDBView, MDBMask, MDBContainer, MDBIcon, MDBRow, MDBBtn,MDBCol} from "mdbreact";
import SSO from './SSOAuth'
export default class Login extends Component {

 

  state = {
    collapsed: false,
  };

  // setLoginStateData=(nameFromSSO,emailFromSSO,photoFromSSO)=>{
  //   console.log("name from child is: "+nameFromSSO);
  //   this.setState({name:nameFromSSO});

  //   console.log("name is: "+this.state.name);
  // }

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };



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
       
        <MDBView src={`https://www.xmple.com/wallpaper/gradient-white-orange-linear-1920x1080-c2-ffffff-ff8c00-a-285-f-14.svg`} >
        <Navigationbar/>
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
        <SSO />
        </MDBView>
      </>
    );
  }
}
