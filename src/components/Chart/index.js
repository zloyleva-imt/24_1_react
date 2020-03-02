import React from 'react';
import {connect} from 'react-redux';

const Chart = ({currencyArrayProps}) => {
    console.log(currencyArrayProps)
    return (
        <div></div>
    );
};

const mapStateToProps = state => ({
    currencyArrayProps: state.currencyArray
});

export default connect(mapStateToProps)(Chart);