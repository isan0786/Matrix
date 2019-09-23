import React from "react";
import {  MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter style={{ backgroundColor: '#edf0f5' }} className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://matrixSheridan.com"> Matrix </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;