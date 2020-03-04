import {SET_DAYS_RANGE} from "../constants/index";
import {fetchExchangeData} from "./fetchExchangeData";


export const actionSetDaysRangeHandler = data => ({
    type: SET_DAYS_RANGE,
    payload: data
});

export const actionSetDaysRange = data => dispatch => {
    dispatch(actionSetDaysRangeHandler(data));
    dispatch(fetchExchangeData());
};