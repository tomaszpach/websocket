import React, {Component} from 'react';
import axios from 'axios';

import Sell from './Sell';

import CurrencyButton from './CurrencyButton';

class Api extends Component {
    state = {
        response: {},
        url: 'https://api.bitbay.net/rest/trading/orderbook/',
        currency: 'BTC-PLN'
    };

    fetchData() {
        axios.get(this.state.url + this.state.currency)
            .then(response => {
                // console.log('response', response);
                this.setState({response})
            })
            .catch(error => {
                this.setState({error});
            });
    }

    changeCurrency() {
        this.setState({currency: 'ETH-PLN'}, () => this.fetchData());
    }

    componentDidMount() {
        this.fetchData();
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextState', nextState);
        console.log('nextProps', nextProps);

        if (nextProps !== nextState) {
            return true;
        }
    }

    render() {
        const { data } = this.state.response;
        const { currency } = this.state;

        return (
            <div>
                <CurrencyButton onClick={() => this.changeCurrency()} />
                <Sell data={data} currency={currency}/>

                {/*{sell}*/}
                {/*{console.log(this.state.response.length !== 0)}*/}
            </div>
        );
    }
}

export default Api;
