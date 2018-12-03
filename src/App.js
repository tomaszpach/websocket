import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import WebSocket from './components/Websocket/WebSocketComponent';
import Api from './components/API/Api';
import axios from "axios";

// todo add gh-pages and push build
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
                <Header currency={this.state.currency}/>
                <WebSocket response={this.state.response} currency={this.state.currency}/>
                <Api state={this.state} changeCurrency={(e) => this.changeCurrency(e)}/>
            </div>
        );
    }
}

export default App;
