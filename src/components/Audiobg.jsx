import React from "react";
import { Route, Redirect } from 'react-router'
import './Audiobg.css'
import { Link } from 'react-router-dom'
import { Card,Button, ButtonGroup } from 'react-bootstrap';
import Login from "./Login";

const BackgroundImagePage = () => {
  

  return (<React.Fragment><Card   className="bg">
  <Card.ImgOverlay>
    <Card.Title className="centertext">< p style={{ fontSize:'70px',marginTop:'100px' }}>Welcome To Matrix!</p></Card.Title>
<div class="d-flex justify-content-center" style={{ marginTop:'35px' }}  >
 <Link to='/Login'> 
<Button className="mr-5" variant="warning" style={{ paddingLeft:'35px', paddingRight:'35px' }}  size="lg" >
  Login</Button></Link> 
  <Link to='/Login'> 
  <Button  variant="warning" style={{ paddingLeft:'35px', paddingRight:'35px' }}  size="lg">Sign In</Button>
  </Link> 
</div>
  
  </Card.ImgOverlay>
</Card>
  </React.Fragment>);
};
export default BackgroundImagePage;