import React, { Component } from 'react';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import { Link } from 'react-router-dom'
import Collapsible from 'react-collapsible';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './BookView.css';
import BookCardView from './BookCardView';
import { Card, Button, Accordion, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class BookView extends Component {

    render() {
        return (

            <div>

                <Navigationbar />
                <div>




                    <div class="container text-center">
                        <Accordion >

                            <Card  >
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Book1
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Accordion.Toggle as={Button} variant="" eventKey="1">
                                    <Card.Body>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://audiobooks.ishananand.ca/BooksImages/book1.jpg" />
                                            <Card.Body>
                                                <Card.Title>And Fire Came Down</Card.Title>
                                                

                                            </Card.Body>

                                        </Card>
                                        </Card.Body>
                                       
                                        </Accordion.Toggle>
                                        

                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="0">
                                        <ListGroup >
                                            <div>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 1
                                                </Button>
                                                
                                                <Link to='/Narration' style={{ textDecoration: 'none' }}> 
                                                <Button variant="outline-success" size="lg" block>
                                                Narrate
                                                </Button>
                                                </Link>
                                                
                                            </div>
                                        </ListGroup>
                                        </Accordion.Collapse>
                                    

                            </Card>


                            


                        </Accordion>

                        <Accordion >

                            <Card  >
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Book2
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Accordion.Toggle as={Button} variant="" eventKey="1">
                                    <Card.Body>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://audiobooks.ishananand.ca/BooksImages/book2.jpg" />
                                            <Card.Body>
                                                <Card.Title>AngelBound</Card.Title>
                                             

                                            </Card.Body>

                                        </Card>
                                        </Card.Body>
                                       
                                        </Accordion.Toggle>
                                        

                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="0">
                                        <ListGroup >
                                            <div>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 1
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 2
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 3
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 4
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 5
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 6
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 7
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 8
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 9
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 10
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 11
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 12
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 13
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 14
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 15
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 16
                                                </Button>
                                                <Link to='/Narration' style={{ textDecoration: 'none' }}> 
                                                <Button variant="outline-success" size="lg" block>
                                                Narrate
                                                </Button>
                                                </Link>
                                                
                                            </div>
                                        </ListGroup>
                                        </Accordion.Collapse>
                                    

                            </Card>


                            


                        </Accordion>

           



                        <Accordion >

                            <Card  >
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Book3
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Accordion.Toggle as={Button} variant="" eventKey="1">
                                    <Card.Body>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://audiobooks.ishananand.ca/BooksImages/book3.jpg" />
                                            <Card.Body>
                                                <Card.Title>Alice Adventure In Wonderland</Card.Title>
                                                

                                            </Card.Body>

                                        </Card>
                                        </Card.Body>
                                       
                                        </Accordion.Toggle>
                                        

                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="0">
                                        <ListGroup >
                                            <div>
                                                
                                                <Link to='/AudioPlayerPage' style={{ textDecoration: 'none' }}>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 1
                                                </Button>
                                                </Link>
                                                <br />
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 2
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 3
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 4
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 5
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 6
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 7
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 8
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 9
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 10
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 11
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 12
                                                </Button>
                                                
                                                <Link to='/Narration' style={{ textDecoration: 'none' }}> 
                                                <Button variant="outline-success" size="lg" block>
                                                Narrate
                                                </Button>
                                                </Link>
                                            </div>
                                        </ListGroup>
                                        </Accordion.Collapse>
                                    

                            </Card>


                            


                        </Accordion>



                        <Accordion >

                            <Card  >
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Book4
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Accordion.Toggle as={Button} variant="" eventKey="1">
                                    <Card.Body>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://audiobooks.ishananand.ca/BooksImages/book4.jpg" />
                                            <Card.Body>
                                                <Card.Title>Bertrand Russell and A. N. Whitehead</Card.Title>
                                                
                                            </Card.Body>

                                        </Card>
                                        </Card.Body>
                                       
                                        </Accordion.Toggle>
                                        

                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="0">
                                        <ListGroup >
                                            <div>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 1
                                                </Button>
                                                
                                                <Link to='/Narration' style={{ textDecoration: 'none' }}> 
                                                <Button variant="outline-success" size="lg" block>
                                                Narrate
                                                </Button>
                                                </Link>
                                                
                                            </div>
                                        </ListGroup>
                                        </Accordion.Collapse>
                                    

                            </Card>


                            


                        </Accordion>


                        <Accordion >

                            <Card  >
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Book5
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Accordion.Toggle as={Button} variant="" eventKey="1">
                                    <Card.Body>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://audiobooks.ishananand.ca/BooksImages/book5.jpg" />
                                            <Card.Body>
                                                <Card.Title>Bittersweet</Card.Title>
                                                

                                            </Card.Body>

                                        </Card>
                                        </Card.Body>
                                       
                                        </Accordion.Toggle>
                                        

                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="0">
                                        <ListGroup >
                                            <div>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 1
                                                </Button>
                                                
                                                <Link to='/Narration' style={{ textDecoration: 'none' }}> 
                                                <Button variant="outline-success" size="lg" block>
                                                Narrate
                                                </Button>
                                                </Link>
                                                
                                            </div>
                                        </ListGroup>
                                        </Accordion.Collapse>
                                    

                            </Card>


                            


                        </Accordion>


                        <Accordion >

                            <Card  >
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Book6
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Accordion.Toggle as={Button} variant="" eventKey="1">
                                    <Card.Body>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://audiobooks.ishananand.ca/BooksImages/book6.jpg" />
                                            <Card.Body>
                                                <Card.Title>Dying for a Paycheck</Card.Title>
                                                

                                            </Card.Body>

                                        </Card>
                                        </Card.Body>
                                       
                                        </Accordion.Toggle>
                                        

                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="0">
                                        <ListGroup >
                                            <div>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 1
                                                </Button>
                                                
                                                <Link to='/Narration' style={{ textDecoration: 'none' }}> 
                                                <Button variant="outline-success" size="lg" block>
                                                Narrate
                                                </Button>
                                                </Link>
                                                
                                            </div>
                                        </ListGroup>
                                        </Accordion.Collapse>
                                    

                            </Card>


                            


                        </Accordion>

                        <Accordion >

                            <Card  >
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Book7
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Accordion.Toggle as={Button} variant="" eventKey="1">
                                    <Card.Body>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://audiobooks.ishananand.ca/BooksImages/book7.jpg" />
                                            <Card.Body>
                                                <Card.Title>Essential Bukowski Poetry</Card.Title>
                                                

                                            </Card.Body>

                                        </Card>
                                        </Card.Body>
                                       
                                        </Accordion.Toggle>
                                        

                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="0">
                                        <ListGroup >
                                            <div>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 1
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 2
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 3
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 4
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 5
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 6
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 7
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 8
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 9
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 10
                                                </Button>

                                                <Link to='/Narration' style={{ textDecoration: 'none' }}> 
                                                <Button variant="outline-success" size="lg" block>
                                                Narrate
                                                </Button>
                                                </Link>
                                                
                                            </div>
                                        </ListGroup>
                                        </Accordion.Collapse>
                                    

                            </Card>


                            


                        </Accordion>

                        <Accordion >

                            <Card  >
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Book8
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Accordion.Toggle as={Button} variant="" eventKey="1">
                                    <Card.Body>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://audiobooks.ishananand.ca/BooksImages/book8.jpg" />
                                            <Card.Body>
                                                <Card.Title>False Face</Card.Title>
                                                

                                            </Card.Body>

                                        </Card>
                                        </Card.Body>
                                       
                                        </Accordion.Toggle>
                                        

                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="0">
                                        <ListGroup >
                                            <div>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 1
                                                </Button>
                                                
                                                <Link to='/Narration' style={{ textDecoration: 'none' }}> 
                                                <Button variant="outline-success" size="lg" block>
                                                Narrate
                                                </Button>
                                                </Link>
                                                
                                            </div>
                                        </ListGroup>
                                        </Accordion.Collapse>
                                    

                            </Card>


                            


                        </Accordion>

                        <Accordion >

                            <Card  >
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Book9
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Accordion.Toggle as={Button} variant="" eventKey="1">
                                    <Card.Body>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://audiobooks.ishananand.ca/BooksImages/book9.jpg" />
                                            <Card.Body>
                                                <Card.Title>Bioethics and the Human Goods</Card.Title>
                                                

                                            </Card.Body>

                                        </Card>
                                        </Card.Body>
                                       
                                        </Accordion.Toggle>
                                        

                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="0">
                                        <ListGroup >
                                            <div>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 1
                                                </Button>
                                                
                                                <Link to='/Narration' style={{ textDecoration: 'none' }}> 
                                                <Button variant="outline-success" size="lg" block>
                                                Narrate
                                                </Button>
                                                </Link>
                                                
                                            </div>
                                        </ListGroup>
                                        </Accordion.Collapse>
                                    

                            </Card>


                            


                        </Accordion>

                        <Accordion >

                            <Card  >
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Book10
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Accordion.Toggle as={Button} variant="" eventKey="1">
                                    <Card.Body>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://audiobooks.ishananand.ca/BooksImages/book10.jpg" />
                                            <Card.Body>
                                                <Card.Title>Global News</Card.Title>
                                                

                                            </Card.Body>

                                        </Card>
                                        </Card.Body>
                                       
                                        </Accordion.Toggle>
                                        

                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="0">
                                        <ListGroup >
                                            <div>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 1
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 2
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 3
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 4
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 5
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 6
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 7
                                                </Button>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 8
                                                </Button>
                                                <Button variant="primary" size="lg" block >
                                                    Chapter 9
                                                </Button>
                                                
                                                <Link to='/AudioPlayerPage' style={{ textDecoration: 'none' }}>
                                                <Button variant="secondary" size="lg" block>
                                                    Chapter 10
                                                </Button>
                                                </Link>
                                                <Link to='/Narration' style={{ textDecoration: 'none' }}> 
                                                <Button variant="outline-success" size="lg" block>
                                                Narrate
                                                </Button>
                                                </Link>
                                                
                                            </div>
                                        </ListGroup>
                                        </Accordion.Collapse>
                                    

                            </Card>


                            


                        </Accordion>

                        

                        

                        

                    </div>
                </div>


                <Footer />




            </div>

        )
    }
}