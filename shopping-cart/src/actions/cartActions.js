"use strict"

export function addToCart(item){
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}