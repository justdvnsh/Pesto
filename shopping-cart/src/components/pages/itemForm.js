"use strict"
import React from 'react';
import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap';
import {connect} from 'react-redux';
import {findDOMNode} from 'react-dom';
import {addItem} from '../../actions/itemActions';
import { bindActionCreators } from 'redux';

class ItemForm extends React.Component {

    handleSubmit() {
        const item = [{
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            cateogory: findDOMNode(this.refs.cat).value,
            price: findDOMNode(this.refs.price).value
        }]

        this.props.addItem(item)
    }

    render(){
        return (
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control ref = 'title' type="text" placeholder="Enter the title for your item" />
                        <Form.Text className="text-muted">
                            You can enter the title for your item
                        </Form.Text>
                        </Form.Group>
                    
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Select Cateogory</Form.Label>
                            <Form.Control ref='cat' as="select">
                            <option>Clothing</option>
                            <option>Spa and Beauty products</option>
                            <option>Electronics</option>
                            <option>Books and Education</option>
                            <option>Others</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control ref = 'description' as="textarea" rows="3" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Item Price</Form.Label>
                        <Form.Control ref = 'price' type="text" placeholder="Enter the price for your item" />
                        <Form.Text className="text-muted">
                            The Price would be in INR .
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Subscribe to our newsletter" />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick = {this.handleSubmit.bind(this)}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addItem}, dispatch)
}

export default connect(null, mapDispatchToProps)(ItemForm);