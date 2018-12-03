import React, {Component} from 'react';

import Sell from './Sell';

import CurrencyButton from '../CurrencyButton';

class Index extends Component {
    render() {
        const {currency, response} = this.props.state;

        return (
            <div>
                <h1>API:</h1>
                <CurrencyButton currency={currency} onChange={(e) => this.props.changeCurrency(e)}/>
                <Sell response={response} currency={currency}/>
            </div>
        );
    }
}

export default Index;
