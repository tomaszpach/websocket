import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import WebSocket from './components/WebSocketComponent';
import Api from './components/Api';
import axios from "axios";

class App extends Component {
    state = {
        url: 'https://api.bitbay.net/rest/trading/orderbook/',
        currency: 'BTC-PLN',
        response: {}
    };

    fetchData() {
        axios.get(this.state.url + this.state.currency)
            .then(response => {
                this.setState({response})
            })
            .catch(error => {
                this.setState({error});
            });
    }

    changeCurrency(e) {
        const value = e.target.value;
        this.setState({currency: value}, () => this.fetchData());
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div className="App">
                <h2>Booty Bay</h2>
                <WebSocket currency={this.state.currency}/>
                <Api state={this.state} changeCurrency={(e) => this.changeCurrency(e)}/>
            </div>
        );
    }
}

export default App;
