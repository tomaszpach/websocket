import React, {Component} from 'react';
import './App.css';
import './styles/main.css';

import Header from './components/Header';
import CurrencyButton from './components/CurrencyButton';
import WebSocket from './components/Websocket/WebSocketComponent';
import API from './components/API/index';
import axios from "axios";

// todo add gh-pages and push build
// todo przebuduj pod reduxa
// todo dodaj podświetlenie dla zmian!
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
            <div className="App container-fluid">
                <Header currency={this.state.currency}/>
                <CurrencyButton currency={this.state.currency} onChange={(e) => this.changeCurrency(e)}/>
                <WebSocket response={this.state.response} currency={this.state.currency}/>
                <API state={this.state} />
            </div>
        );
    }
}

export default App;
