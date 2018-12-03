import React, {Component} from 'react';
import WebSocketData from './WebSocketData';

class WebSocketComponent extends Component {
    state = {
        parsedData: {}
    };

    componentDidMount() {
        const webSocket = new WebSocket('wss://api2.bitbay.net/websocket/');
        webSocket.onopen = () => {
            webSocket.send('{"action": "subscribe-public", "module": "trading", "path": "ticker"}')
        };

        webSocket.onmessage = e => {
            const data = e.data,
                parsedData = JSON.parse(data);

            this.setState({parsedData});
        };
    }

    render() {
        return (
            <WebSocketData response={this.props.response} data={this.state.parsedData} currency={this.props.currency}/>
        );
    }
}

export default WebSocketComponent;
