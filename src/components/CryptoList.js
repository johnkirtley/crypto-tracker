import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    card: {
        width: '30%',
        margin: '10% auto',
    },
    text: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

});


const CryptoList = () => {
    const [price, setPrice] = useState('');
    const [time, setTime] = useState('');
    const [currency, setCurrency] = useState('');

    const classes = useStyles();


    useEffect(() => {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => {
                // console.log(res.data.time)
                setTime(res.data.time);
                return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            })
            .then(res => {
                setPrice(res.data.bpi.USD.rate)
                return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            })
            .then(res => {
                setCurrency(res.data.chartName)
            })
            .catch(err => {
                console.log('Cannot get data', err);
            })
    }, [price])


    return (
        <div>
            <Card className={classes.card}>
                <CardContent className={classes.text}>
                    <h2>{currency}</h2>
                    <h2>{price}</h2>
                    <h2>{time.updated}</h2>
                </CardContent>
            </Card>
        </div>
    )
}

export default CryptoList;