import React, { Component } from 'react';
import Navigationbar from './Navigationbar';
import Audiobg from './Audiobg';
import Slideshow from './Slideshow';
import Feature from './Feature';
//import SSO from './SSOAuth'
import Login from './Login';
import Footer from './Footer';
export default class Home extends Component {

    render() {
        return (
            // <Spinner animation="grow" variant="success" />
            <div>
                    <Navigationbar/>
                    <Audiobg/>
                    <Feature/>
                    
                    <Slideshow/>
                 
                    <Footer/> 
                  
                    
            </div>
            
        )
    }
}