import React, {Component} from 'react';

import SellBuyTable from './SellBuyTable';

class Index extends Component {
    render() {
        const {currency, response} = this.props.state;

        return (
            <div className="offers">
                <div className="row">
                    <div className="col-sm-6">
                        <SellBuyTable buySell={'buy'} response={response} currency={currency}/>
                    </div>

                    <div className="col-sm-6">
                        <SellBuyTable buySell={'sell'} response={response} currency={currency}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
