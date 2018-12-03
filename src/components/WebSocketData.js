import React from 'react';

class WebSocketData extends React.Component {
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
                    <p>SKUP * BID: {this.props.response.data.buy[0].ra}</p>
                    <p>SPRZEDAŻ * ASK: {this.props.response.data.sell[0].ra}</p>
                </div>
            );
        }

        if (this.props.data.hasOwnProperty('message')) {
            return (
                <div>
                    <p>SKUP * BID: {this.props.data.message.highestBid}</p>
                    <p>SPRZEDAŻ * ASK: {this.props.data.message.lowestAsk}</p>
                </div>
            );
        }

        return <div>Pobieranie danych</div>
    }
}

export default WebSocketData;
