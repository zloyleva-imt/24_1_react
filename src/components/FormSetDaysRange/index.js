import React, {useState} from 'react';
import {connect} from 'react-redux';

import {actionSetDaysRange} from "../../store/actions/setDaysRange";


const FormSetDaysRange = ({actionSetDaysRangeHandler}) => {

    const [daysRange, setDaysRange] = useState(0);

    const onClickHandler = () => {
        actionSetDaysRangeHandler(daysRange);
    };

    return (
        <div>
            <input type="number" onInput={e => setDaysRange(e.target.value)}/>
            <button onClick={onClickHandler}>set</button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    actionSetDaysRangeHandler: (daysRangeData) => dispatch(actionSetDaysRange(daysRangeData))
});

export default connect(null,mapDispatchToProps)(FormSetDaysRange);