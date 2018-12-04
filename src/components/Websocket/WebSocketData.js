import React from 'react';

// todo zaktualizuj dane po zmianie waluty / kursu
class WebSocketData extends React.Component {
    state = {
        buy: 0,
        sell: 0,
        buyText: 'SKUP • BID:',
        sellText: 'SPRZEDAŻ • ASK:',
        currency: this.props.currency
    };

    componentDidMount() {
        // console.log('mount', this.props.response);
        // console.log('mount', this.props.data);
        this.setState({
            buy: this.props.response.data.buy[0].ra,
            sell: this.props.response.data.sell[0].ra
        });
    }

    componentDidUpdate(prevProps) {
        // console.log('prevProps', prevProps); // api
        // console.log('this.props.data', this.props.data); // websocket
        // if (prevProps.data) 
        // console.log('prevProps', prevProps.currency);
        // if (prevProps.data.hasOwnProperty('message')) {
        //     if (prevProps.data.message.market.code === this.props.currency) {
        //         return true;
        //     }
        // }

        // console.log('prevProps.currency', prevProps.currency);
        // console.log('this.state.currency', this.state.currency);

        if (prevProps.currency !== this.state.currency) {
            console.warn('update po zmianie waluty!');
            this.setState({
                currency: this.props.currency,
                buy: this.props.response.data.buy[0].ra,
                sell: this.props.response.data.sell[0].ra
            });
        }
        return false;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.data.hasOwnProperty('message')) {
            if (nextProps.data.message.market.code === this.props.currency) {
                return true;
            }
        } else if (this.props.response.hasOwnProperty('data')) {
            return true;
        }


        if (nextProps.response.data.buy[0].ra !== this.state.buy) {
            return true;
        }

        // console.log('nextProps.currency', nextProps.currency);
        // console.log('nextState.currency', nextState.currency);
        // if (this.props.response.hasOwnProperty('data')) {
        //     return true
        // }
        //
        if (nextProps.currency !== this.state.currency) {

            return true;
        }
        //
        return false;
    }

    componentWillUnmount() {
        console.log('unmount!')
    }

    render() {
        const displayApiData = !this.props.data.hasOwnProperty('message');

        if (this.props.response.hasOwnProperty('data') || this.props.data.hasOwnProperty('message')) {
            return (
                <div className="buy-sell">
                    <p className="buy">
                        <b>{this.state.buyText} </b>

                        <span>
                            {this.state.buy}
                        </span>
                    </p>


                    <p className="sell">
                        <b>{this.state.sellText} </b>

                        <span>
                            {this.state.sell}
                        </span>
                    </p>
                </div>
            );
        }

        return <div>Pobieranie danych</div>
    }
}

export default WebSocketData;
