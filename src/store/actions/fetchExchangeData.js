import {SET_EXCHANGE_DATA} from "../constants/index";
import axios from "axios/index";
import {store} from "../createStore";
const fetchUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date='

export const actionSetExchangeData = (data) => {
    return {
        type: SET_EXCHANGE_DATA,
        payload: data
    }
};

export const fetchExchangeData = () => async dispatch => {

    (async () => {
        const allData = () => Promise.all(
            [...new Array(store.getState().daysRange.length)].map(async (el,i) => {
                const y = await axios.get(`${fetchUrl}202002${i+1}`);
                return y.data;
            })
        );
        const x = await allData();

        dispatch(actionSetExchangeData(
            x.map(el => el.find(e => e.cc === 'USD'))
        ))
    })()

};