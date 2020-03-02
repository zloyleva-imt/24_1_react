import React, {useState} from 'react';
import {connect} from 'react-redux';

import {actionSetDaysRange} from "../../store/actions/setDaysRange";


const FormSetDaysRange = ({foo}) => {

    const [daysRange, setDaysRange] = useState(0);

    const onClickHandler = () => {
        foo(daysRange);
    };

    return (
        <div>
            <input type="number" onInput={e => setDaysRange(e.target.value)}/>
            <button onClick={onClickHandler}>set</button>
        </div>
    );
};

const mapDistaptchToProps = dispatch => ({
    foo: (daysRangeData) => dispatch({
        ...actionSetDaysRange,
        payload: daysRangeData
    })
});

export default connect(null,mapDistaptchToProps)(FormSetDaysRange);