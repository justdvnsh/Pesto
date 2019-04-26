"use strict";

export function cartReducers(state={
    cart: []
}, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
        return {state, cart: action.payload}
        break;

        case 'UPDATE_CART':
        //creating a copy of all the items
        const itemToUpdate = [...state.cart]

        // finding the index we want to update
        const indexOfItemToUpdate = itemToUpdate.findIndex((item) => item.id === action.id)

        // creating a new item object with the same array index we want to update 
        const newItem = itemToUpdate[indexOfItemToUpdate].quantity + action.unit

        // updating the item.
        let cartUpdate = [ ...itemToUpdate.slice(0, indexOfItemToUpdate), newItem, ...itemToUpdate.slice(indexOfItemToUpdate + 1) ] 

        return {
            state,
            cart: cartUpdate
        }
        break;

        case 'DELETE_CART_ITEM':
        return {state, cart: action.payload}
        break;
    }

    return state;
}

