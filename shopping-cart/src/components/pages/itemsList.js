"use strict"
import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import Cart from './cart';
import {addToCart, updateCart} from '../../actions/cartActions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
class ItemsList extends React.Component {

    handleCart(id, title, description, price, cateogory, quantity){    
        const item = [ 
            {      
                id,
                title,
                description,
                cateogory,
                price,
                quantity
            }
        ]    

        if ( this.props.cart.length > 0 ) {
            let cartIndex = this.props.cart.findIndex(cart => cart.id === id)

            if ( cartIndex === -1 ) {
                this.props.addToCart(item)    
            } else {
                this.props.updateCart(id ,1)
            }

        } else {
            this.props.addToCart(item);
        }
    }

    render(){
        const itemList = this.props.items.map((item) => {
            return (
                <Col xs={4}  key={item.id}>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a0d78453c%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a0d78453c%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.41666793823242%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{item.description}</Card.Subtitle>
                                <Card><Card.Body>
                                {item.cateogory}<br/>
                                <b>price: {item.price}</b><br/>
                                </Card.Body></Card><br/>
                                <Button variant="primary" onClick={() => this.handleCart(item.id, item.title, item.description, item.price, item.cateogory, item.quantity)}>Buy Now</Button>
                            </Card.Body>
                    </Card>
                </Col>
            )
        })

        return (
            <div>
                    <Cart />
                <Row>
                    {itemList}
                </Row>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addToCart, updateCart}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);