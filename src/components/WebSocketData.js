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
        }

        return false;
    }

    render() {
        if (this.props.data.hasOwnProperty('message')) {
            return (
                <div>
                    <h2>Update: {this.props.data.message.market.code}</h2>
                    <p>Highest bid: {this.props.data.message.highestBid}</p>
                    <p>Lowest ask: {this.props.data.message.lowestAsk}</p>
                </div>
            );
        }

        return <h2>Waiting for changes for {this.props.currency}</h2>
    }
}

export default WebSocketData;
