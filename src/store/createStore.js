import {createStore} from "redux";
import {SET_DAYS_RANGE} from "./constants/index";

const initState = {
    currencyArray: [
        {r030: 840, txt: "Долар США", rate: 24.9196, cc: "USD", exchangedate: "01.02.2020"}
    ],
    daysRange: []
};

const reducer = (state = initState,{type,payload}) => {

    switch (type){
        case SET_DAYS_RANGE:
            return {
                ...state,
                daysRange: [...new Array(Number(payload))],
            };
        default:
            return {...state}
    }
};

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);