import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, compose, applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './reducer'

const middlewares = [];
const enhancer = process.env.NODE_ENV === "production" ? 
    compose(applyMiddleware(...middlewares)) :
    compose(applyMiddleware(...middlewares), composeWithDevTools())

const store = createStore(rootReducer,{}, enhancer)


ReactDOM.render( <Provider store = {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

