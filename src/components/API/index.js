import React, {Component} from 'react';

import SellBuyTable from './SellBuyTable';

class Index extends Component {
    render() {
        const {currency, response} = this.props.state;

        return (
            <div>
                <SellBuyTable buySell={'buy'} response={response} currency={currency}/>
                <SellBuyTable buySell={'sell'} response={response} currency={currency}/>
            </div>
        );
    }
}

export default Index;
