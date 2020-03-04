import { createStore, applyMiddleware, compose } from 'redux';
import {SET_DAYS_RANGE, SET_EXCHANGE_DATA} from "./constants/index";
import thunk from 'redux-thunk';

const initState = {
    currencyArray: [],
    daysRange: []
};

const reducer = (state = initState,{type,payload}) => {

    switch (type){
        case SET_DAYS_RANGE:
            return {
                ...state,
                daysRange: [...new Array(Number(payload))],
            };
        case SET_EXCHANGE_DATA:
            return {
                ...state,
                currencyArray: [...payload],
            };
        default:
            return {...state}
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);