"use strict"

export function addToCart(item){
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}

export function updateCart(id, unit){
    return {
        type: 'UPDATE_CART',
        id: id,
        unit: unit
    }
}

export function DeleteCartItem(cart){
    return {
        type: 'DELETE_CART_ITEM',
        payload: cart
    }
}