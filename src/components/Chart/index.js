import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {Chart} from 'chart.js'

const ChartComponent = ({currencyArrayProps}) => {

    useEffect(() => {
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: currencyArrayProps.map(el => el.exchangedate),
                datasets: [{
                    label: '# of Votes',
                    data: currencyArrayProps.map(el => el.rate),
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                }
            }
        });
    })

    return (
        <canvas id="myChart" width="400" height="400"></canvas>
    );
};

const mapStateToProps = state => ({
    currencyArrayProps: state.currencyArray,
});

export default connect(mapStateToProps)(ChartComponent);