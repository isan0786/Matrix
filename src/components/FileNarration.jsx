import React, { Component } from 'react';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import { Card, Button, Accordion, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatings from 'react-star-ratings';
import MicRecorder from 'mic-recorder-to-mp3';
import axios from 'axios';


export default class FileNarration extends Component {

  constructor(props) {
    super(props);
    this.changeRating = this.changeRating.bind(this);
    this.state = {
      rating: 0,
      recorder:new MicRecorder({
      bitRate: 128
    }),
  mFile:null,

  }
    this.postData = this.postData.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.startRecording = this.startRecording.bind(this);
  }

  changeRating(rating, name) {
    console.log('these two', rating, name);
    this.setState({
      rating: rating
    })
  }


  stopRecording() {
   this.state.recorder.stop().getMp3().then(([buffer, blob]) => {
      console.log(buffer, blob);
      const file = new File(buffer, 'music.mp3', {
        type: blob.type,
        lastModified: Date.now()
      });

      this.setState({mFile:file});

      const li = document.createElement('li');
      const player = new Audio(URL.createObjectURL(file));
      player.controls = true;
      li.appendChild(player);
      document.querySelector('#playlist').appendChild(li);
      console.log('Stop recording');
      console.log(`this is the mFile: ${this.state.mFile}`);
    }).catch((e) => {
      console.error(e);
    });
  }

  startRecording() {
    this.state.recorder.start().then(() => {
      console.log('recorder started');
    }).catch((e) => {
      console.error(e);
    });
    
  }

  postData(){

    const payload = {
      musicFile:this.state.mFile,
    }

    axios.post('http://capstone.parteek.in:8082/uploadNarration',payload)
    .then(res=>{
      console.log('file added at the backend');
    })
    .catch(e=>e)


  }


  render(){
    return(
      
      <React.Fragment>
        <Navigationbar />
        <div class="container text-center">
    
    

    <hr />

    <Card className="text-center">
  <Card.Header>Chapter1: Book</Card.Header>
  <Card.Body>
    
    <Card.Text>
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    </Card.Text>
    
  </Card.Body>
  
</Card>
<br />
    <br />

    <button onClick={this.startRecording} className="btn btn-primary">Start recording</button>
    <button onClick = {this.stopRecording} className="btn btn-danger">Stop recording</button>
    <br />
    <br />
    <ul id="playlist"></ul>

    <Button  variant="warning" onClick={this.postData}>Send</Button>
    <br />
    <br />
  </div>

      <div class="container text-center">
          <StarRatings
            rating={this.state.rating}
            starRatedColor="orange"
            changeRating={this.changeRating}
            numberOfStars={5}
                  name="rating"
                  starHoverColor="orange"
          />
        </div>
        <Footer/>
      </React.Fragment>
    );
  }


}



