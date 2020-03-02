import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Chart from "../Chart";
import FormSetDaysRange from "../FormSetDaysRange";

//01.12.2014
//20200201
const fetchUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date='
const daysRange = [...new Array(29)];
function App() {

    const [currencyArray, setCurrencyArray] = useState([]);

    useEffect(() => {
        const myHeaders = new Headers({
            'Origin': window.location.origin,
        });

        const arr = daysRange.map((e,i) => {
            return axios.get(`${fetchUrl}202002${i+1}`, {
                headers: myHeaders,
                mode: 'cors'
            })
        });

        Promise.all(arr)
            .then(res => {
                const x = res.map(el => el.data.find(e => e.cc === 'USD'));
                setCurrencyArray(x);
                console.log(x);
            });
    },[]);

    return (
        <div className="App">
            <FormSetDaysRange/>
            <Chart/>
        </div>
    );
}

export default App;
