import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {


    componentDidMount() {
        const websocket = new WebSocket('wss://api2.bitbay.net/websocket/');
        websocket.onopen = e => {
            console.log('CONNECTED');

            websocket.send('{"action": "subscribe-public", "module": "trading", "path": "ticker"}')
        };

        websocket.onmessage = e => {
            const data = e.data,
                parsedData = JSON.parse(data);

            console.log('CALOSC', e);
            console.log('parsedData', parsedData);
            console.log('data', parsedData.message.market.code);
        };
        console.log('componentDidMount()')
    }


    render() {
        return (
            <div className="App">
                placeholder
            </div>
        );
    }
}

export default App;
