import React, { Component } from 'react';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import AudioPlayer from 'react-h5-audio-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatings from 'react-star-ratings';
export default class AudioPlayerPage extends Component {
  constructor(props) {
    super(props);

    this.changeRating = this.changeRating.bind(this);
    this.state = {
      rating: 0
    };
  }

  changeRating(rating, name) {
    console.log('these two', rating, name);
    this.setState({
      rating: rating
    })
  }

     render() {
        return (
           
            <div className="bg-white"> 
                   
                <Navigationbar />
                  <AudioPlayer
                   autoPlay
                  src="https://idrive.ishananand.ca/remote.php/webdav/samplemp3.mp3"
                    onPlay={e => console.log("onPlay")} />

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
                    
                    
            </div>
            
        )
    }
}