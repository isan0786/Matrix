import React, { Component } from 'react';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import AudioPlayer from 'react-h5-audio-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck, Badge } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
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
                  src="https://audiobooks.ishananand.ca/Alice%20Adventure%20In%20Wonderland/wonderland_ch_01_64kb.mp3"
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
      For me, audio books are a convenient way to get to the books I've been interested in. I can listen to an audio book while doing other things.
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
      The service itself was actually great.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer class="container text-center">
    <Rating value={4} readOnly />
    </Card.Footer>
  </Card>
  <Card>
    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
    <Card.Body>
      <Card.Title>Avreen</Card.Title>
      <Card.Text>
      I like to use my time productively. Listening to nonsense on the radio is just not an option.
      </Card.Text>
    </Card.Body>
    <Card.Footer class="container text-center">
    <Rating value={5} readOnly />
    </Card.Footer>
  </Card>
</CardDeck>

               
                <Footer/>
                    
                    
            </div>
            
        )
    }
}