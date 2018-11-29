import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import WebSocket from './components/WebSocketComponent';
import Api from './components/Api';

class App extends Component {
    state = {
        response: {}
    };

    render() {
        return (
            <div className="App">
                <h2>Booty Bay</h2>
                <Api/>
                {/*<WebSocket />*/}
            </div>
        );
    }
}

export default App;
