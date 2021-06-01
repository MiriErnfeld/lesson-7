import React from 'react';
import produce from 'immer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import pupils from './reducers/pupils';
import teacher from './reducers/teacher';
import classReducer from './reducers/class';
import swapiData from './reducers/swapiReducer'
import Login from './reducers/data'
import { getDataFromSwapi } from './middleWares/midlleWare'


const reducer = combineReducers({ pupils, swapiData, classReducer, teacher, Login })
const store = createStore(reducer, applyMiddleware(getDataFromSwapi));

window.store = store;
export default store;

