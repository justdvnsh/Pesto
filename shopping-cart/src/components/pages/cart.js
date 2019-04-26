"use strict";
import React from 'react';
import {Row, Col, Button, Card, Container } from 'react-bootstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {DeleteCartItem, updateCart} from '../../actions/cartActions';

class Cart extends React.Component {

    handleDelete(id) {
         // creating a copy of all the items
         const itemToDelete = this.props.cart

         // finding the index we want to delete
         const indexOfItemToDelete = itemToDelete.findIndex((item) => item.id === id);
 
         // deleting the item
         let cartAfterDelete = [...itemToDelete.slice(0, indexOfItemToDelete), ...itemToDelete.slice(indexOfItemToDelete + 1)]

         this.props.DeleteCartItem(cartAfterDelete)
    }

    onIncrement(id) {
        this.props.updateCart(id,1)
    }

    onDecrement(id, quantity) {
        if ( quantity > 1 ) {
            this.props.updateCart(id, -1)
        }
    }

    renderCart() {
        const cartItem = this.props.cart.map((item) => {
            return (
                    <Col xs={12} key={item.id}>
                        <Card>
                            <Card.Body>
                                <h5>{item.title}</h5><span>    </span>  
                                <h5>{item.price}</h5><span>    </span>  
                                <h5>qty. <Button bsstyle='success'>{item.quantity}</Button></h5><span>    </span>  
                                <Button onClick={this.onDecrement.bind(this, item.id, item.quantity)} bstyle='default' bssize='small'>-</Button>
                                <Button onClick={this.onIncrement.bind(this, item.id)} bstyle='default' bssize='small'>+</Button> 
                                <span>    </span>
                                <Button bsstyle='danger' bssize='small' onClick={this.handleDelete.bind(this, item.id)}>DELETE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
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
            <Container>
                {cartItem}
            </Container>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        DeleteCartItem,
        updateCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);