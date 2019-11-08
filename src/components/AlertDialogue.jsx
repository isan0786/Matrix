import React, { Component } from "react";
import {
  Modal,
  Container,
  Row,
  Alert
  
} from "react-bootstrap";

class AlertDialogue extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal
      
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
          <div>
      <Alert color="success">
        <h4 className="alert-heading">{this.props.message} </h4>
        <p>
            {this.props.messageSec}
          
        </p>
        <hr />
        
      </Alert>
    </div>
        
      </Modal>
    );
  }
}

export default AlertDialogue;