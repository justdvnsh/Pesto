"use strict"
// Step 1 define the reducer 
export function itemReducers(state={
    items: [{
                id: 1,
                title: 'First Title',
                description: 'Some description !',
                price: 33.00,
                cateogory: 'Cloth',
                quantity: 1
            },
            {
                id: 2,
                title: 'Second Title',
                description: 'Some description !',
                price: 50.00,
                cateogory: 'Book',
                quantity: 1
            },
            {
                id: 3,
                title: 'Third Title',
                description: 'Some description !',
                price: 41.00,
                cateogory: 'Fashion and MakeUp' ,
                quantity: 1
            }]
    }, action) {
    switch(action.type){
        case "GET_ITEMS":
        return {items: [...state.items]} ;
        break;

        case "POST_ITEM":
        return {items:[...state.items, ...action.payload]} ;
        break;

        case "DELETE_ITEM":
        // creating a copy of all the items
        const itemToDelete = [...state.items]

        // finding the index we want to delete
        const indexOfItemToDelete = itemToDelete.findIndex((item) => item.id === action.payload.id);

        // deleting the item
        return { items: [...itemToDelete.slice(0, indexOfItemToDelete), ...itemToDelete.slice(indexOfItemToDelete + 1)] }
        break;

        case "UPDATE_ITEM_TITLE":
        //creating a copy of all the items
        const itemToUpdate = [...state.items]

        // finding the index we want to update
        const indexOfItemToUpdate = itemToUpdate.findIndex((item) => item.id === action.payload.id)

        // creating a new item object with the same array index we want to update 
        const newItem = itemToUpdate[indexOfItemToUpdate]
        newItem.title = action.payload.title


        // updating the item.
        return { items: [ ...itemToUpdate.slice(0, indexOfItemToUpdate), newItem, ...itemToUpdate.slice(indexOfItemToUpdate + 1) ] }
        break;

        case "UPDATE_ITEM_DESCRIPTION":
        //creating a copy of all the items
        const itemToUpdateDESCRIPTION = [...state.items]

        // finding the index we want to update
        const indexOfItemToUpdateDESCRIPTION = itemToUpdateDESCRIPTION.findIndex((item) => item.id === action.payload.id)

        // creating a new item object with the same array index we want to update 
        const newItemDESCRIPTION = itemToUpdateDESCRIPTION[indexOfItemToUpdateDESCRIPTION]
        newItemDESCRIPTION.description = action.payload.description


        // updating the item.
        return { items: [ ...itemToUpdateDESCRIPTION.slice(0, indexOfItemToUpdateDESCRIPTION), newItemDESCRIPTION, ...itemToUpdateDESCRIPTION.slice(indexOfItemToUpdateDESCRIPTION + 1) ] }
        break;

    }
    return state
}
