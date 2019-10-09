import React, { Component } from 'react';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import AudioPlayer from 'react-h5-audio-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatings from 'react-star-ratings';
import { Card, CardDeck, Badge } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
export default class AudioPlayerPage extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      rating: 0
    };
  }

     render() {
        return (
           
            <div className="bg-white"> 
                   
                <Navigationbar />
                <br/>
<br/>
<br/>
<br/>
<br/>

                  <AudioPlayer
                   autoPlay
                  src="https://idrive.ishananand.ca/remote.php/webdav/samplemp3.mp3"
                    onPlay={e => console.log("onPlay")} />
<br/>
<br/>
<br/>
<br/>


<Card>
  <Card.Body class="container text-center"><Card.Title><h1>Comments</h1></Card.Title></Card.Body>
</Card>
  <br/>
<br/>
<CardDeck>
  <Card>
    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
    <Card.Body>
      <Card.Title>Ishan</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer class="container text-center">
        <Rating value={3} readOnly />
    </Card.Footer>
  </Card>
  <Card>
    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
    <Card.Body>
      <Card.Title>Parteek</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer class="container text-center">
    <Rating value={3} readOnly />
    </Card.Footer>
  </Card>
  <Card>
    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
    <Card.Body>
      <Card.Title>Avreen</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer class="container text-center">
    <Rating value={3} readOnly />
    </Card.Footer>
  </Card>
</CardDeck>

               
                <Footer/>
                    
                    
            </div>
            
        )
    }
}