import React, { Component } from 'react';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
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
                                            <Card.Img variant="top" src="http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2013/02/protective_goggles/12513355-1-eng-GB/Protective_goggles_node_full_image_2.jpg" />
                                            <Card.Body>
                                                <Card.Title>Book1</Card.Title>
                                                <Card.Text>
                                                    This book description will go here.
                                                </Card.Text>

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
                                                <Button variant="outline-success" size="lg" block>
                                                Narrate
                                                </Button>
                                                
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
                                            <Card.Img variant="top" src="http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2013/02/protective_goggles/12513355-1-eng-GB/Protective_goggles_node_full_image_2.jpg" />
                                            <Card.Body>
                                                <Card.Title>Book1</Card.Title>
                                                <Card.Text>
                                                    This book description will go here.
                                                </Card.Text>

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