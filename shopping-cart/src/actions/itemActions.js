"use strict"

export function getItems(){
    return {
        type: "GET_ITEMS"
    }
}

export function addItem(item){
    return {
        type: 'POST_ITEM',
        payload: item
    }
}

export function deleteItem(id){
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
}

export function updateItemTitle(item){
    return {
        type: 'UPDATE_ITEM_TITLE',
        payload: item
    }
}

export function updateItemDescription(item){
    return {
        type: 'UPDATE_ITEM_DESCRIPTION',
        payload: item
    }
}