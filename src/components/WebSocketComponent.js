import React, {Component} from 'react';

class WebSocketComponent extends Component {
    componentDidMount() {
        const webSocket = new WebSocket('wss://api2.bitbay.net/websocket/');
        webSocket.onopen = e => {
            console.log('CONNECTED');

            webSocket.send('{"action": "subscribe-public", "module": "trading", "path": "ticker"}')
        };

        webSocket.onmessage = e => {
            const data = e.data,
                parsedData = JSON.parse(data);

            console.log('CALOSC', e);
            console.log('parsedData', parsedData);
            if (parsedData.message) {
                console.log('Market code:', parsedData.message.market.code);
            }
        };
        console.log('componentDidMount()')
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default WebSocketComponent;
