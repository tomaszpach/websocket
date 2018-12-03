import React from 'react';

class WebSocketData extends React.Component {
    state = {
        buyText: 'SKUP * BID:',
        sellText: 'SPRZEDAŻ * ASK:'
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data.hasOwnProperty('message')) {
            if (prevProps.data.message.market.code === this.props.currency) {
                return true;
            }
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

        return false;
    }

    render() {
        if (this.props.response.hasOwnProperty('data') && !this.props.data.hasOwnProperty('message')) {
            return (
                <div>
                    <p>{this.state.buyText} {this.props.response.data.buy[0].ra}</p>
                    <p>{this.state.sellText} {this.props.response.data.sell[0].ra}</p>
                </div>
            );
        }

        if (this.props.data.hasOwnProperty('message')) {
            return (
                <div>
                    <p>{this.state.buyText} {this.props.data.message.highestBid}</p>
                    <p>{this.state.sellText} {this.props.data.message.lowestAsk}</p>
                </div>
            );
        }

        return <div>Pobieranie danych</div>
    }
}

export default WebSocketData;
