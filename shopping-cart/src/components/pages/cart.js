"use strict";
import React from 'react';
import {Row, Col, Button, Card } from 'react-bootstrap';
import {connect} from 'react-redux';

class Cart extends React.Component {
    renderCart() {
        const cartItem = this.props.cart.map((item) => {
            return (
                <Row key={item.id}>
                    <Col xs={12} >
                        <Card>
                            <Card.Body>
                                <h5>{item.title}</h5><span>    </span>  
                                <h5>{item.price}</h5><span>    </span>  
                                <h5>qty. <Button bsstyle='success'>{item.quantity}</Button></h5><span>    </span>  
                                <Button bstyle='default' bssize='small'>-</Button>
                                <Button bstyle='default' bssize='small'>+</Button> 
                                <span>    </span>
                                <Button bsstyle='danger' bssize='small'>DELETE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )
        })

        return cartItem
    }

    renderEmptyCart() {
        return (
            <div><h2>The Cart is Empty</h2></div>
        )
    }

    render(){
        //console.log(this.props.cart[0])

        if ( this.props.cart[0] ) {
            return this.renderCart()
        } else {
            return this.renderEmptyCart();
        }

        return (
            <Col xs={12}>
                {cartItem}
            </Col>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(Cart);