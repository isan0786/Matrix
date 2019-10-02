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
                  src="https://ia800903.us.archive.org/21/items/dictabelt_cassette_a/jfk_dict_03a8.wav"
                    onPlay={e => console.log("onPlay")} />

<div className="page-wrap bg-white">
        <div>
          <StarRatings
            rating={this.state.rating}
            starRatedColor="orange"
            changeRating={this.changeRating}
            numberOfStars={5}
                  name="rating"
                  starHoverColor="orange"
          />
        </div>
        
      </div>           
                <Footer/>
                    
                    
            </div>
            
        )
    }
}