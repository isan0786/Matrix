import React, { Component } from 'react';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import AudioPlayer from 'react-h5-audio-player';
export default class AudioPlayerPage extends Component {

    render() {
        return (
           
            <div> 
                   
                <Navigationbar />
                  <AudioPlayer
                   autoPlay
                  src="https://ia800903.us.archive.org/21/items/dictabelt_cassette_a/jfk_dict_03a8.wav"
                 onPlay={e => console.log("onPlay")} />
                                     
                    <Footer/>
                    
                    
            </div>
            
        )
    }
}