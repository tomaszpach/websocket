import React, {Component} from 'react';

import Sell from './Sell';

class Index extends Component {
    render() {
        const {currency, response} = this.props.state;

        return (
            <div>
                <h1>API:</h1>
                <Sell response={response} currency={currency}/>
            </div>
        );
    }
}

export default Index;
