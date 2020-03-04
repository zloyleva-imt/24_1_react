import {combineReducers} from 'redux';

import daysRange from './daysRangeReducer';
import currencyArray from './exchengeDataReducer';



export default combineReducers({
    daysRange,
    currencyArray
});