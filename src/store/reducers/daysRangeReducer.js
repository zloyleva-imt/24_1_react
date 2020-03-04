import {SET_DAYS_RANGE} from "../constants";

const initState = [];

const reducer = (state = initState,{type,payload}) => {

    switch (type){
        case SET_DAYS_RANGE:
            return [...new Array(Number(payload))];
        default:
            return state
    }
};

export default reducer;