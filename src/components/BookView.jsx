import React, { Component } from 'react';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import Collapsible from 'react-collapsible';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookView.css';



export default class BookView extends Component {

    render() {
        return (
           
            <div> 
                   
                <Navigationbar />
                
                <Collapsible trigger="Book1" >
                        
                    <Collapsible trigger="Chapter1"  >
                        <ul>
                            <li>Narration 1</li>
                            <li>Narration 2</li>
                            <li>Narration 3</li>
                        
                        </ul>
                        </Collapsible> 
                        <Collapsible trigger="Chapter2">
                        <ul>
                            <li>Narration 1</li>
                            <li>Narration 2</li>
                        </ul>
                        </Collapsible>
                     </Collapsible>
                     <Collapsible trigger="Book2" class>
                        Chapter1
                      </Collapsible>
                    <Footer/>
                    
                    
            </div>
            
        )
    }
}