"use strict"
import React from 'react';
import ReactDom from 'react-dom';
import App from '../src/app';
import {createStore, applyMiddleware} from 'redux';
import reducers from '../src/reducers/';
import {addToCart} from  '../src/actions/cartActions';
import {addItem, deleteItem, updateItemTitle, updateItemDescription} from '../src/actions/itemActions';
import {createLogger} from 'redux-logger';
import {Provider} from 'react-redux';

// Step 2 create the store 
const middleware = applyMiddleware(createLogger());
const store = createStore(reducers, middleware);

store.subscribe(function(){
    console.log('current state is:' , store.getState());
})

// Step 3 create and dispatch actions 
store.dispatch(addItem([{
    id: 1,
    title: 'First Title',
    description: 'Some description !',
    price: 33.00,
    cateogory: 'Cloth'
},
{
    id: 2,
    title: 'Second Title',
    description: 'Some description !',
    price: 50.00,
    cateogory: 'Book'
},
{
    id: 3,
    title: 'Third Title',
    description: 'Some description !',
    price: 41.00,
    cateogory: 'Fashion and MakeUp' 
}]))

store.dispatch(deleteItem({ id: 3 }))

store.dispatch(updateItemTitle({ 
    id: 2,
    title: 'Tensorflow - The Easy Way'
 }))


store.dispatch(updateItemDescription({ 
    id: 2,
    description: 'Tensorflow - The Easy Way is a nice book in every way possible . '
 }))

 store.dispatch(addToCart([{ id: 2 }]))

ReactDom.render(
    <Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById('root')
) 