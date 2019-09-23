import React from "react";
import './Audiobg.css'
import { Card,Button, ButtonGroup } from 'react-bootstrap';

const BackgroundImagePage = () => {
  return (<React.Fragment><Card   className="bg">
  <Card.ImgOverlay>
    <Card.Title className="centertext">< p style={{ fontSize:'70px',marginTop:'100px' }}>Welcome To Matrix!</p></Card.Title>
<div class="d-flex justify-content-center" style={{ marginTop:'35px' }}  >
<Button className="mr-5" variant="warning" style={{ paddingLeft:'35px', paddingRight:'35px' }}  size="lg">Login</Button>
  <Button  variant="warning" style={{ paddingLeft:'35px', paddingRight:'35px' }}  size="lg">Sign In</Button>
</div>
  
  </Card.ImgOverlay>
</Card>
  </React.Fragment>);
};
export default BackgroundImagePage;