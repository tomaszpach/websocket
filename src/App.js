import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import './styles/main.css';

import FetchApi from './containers/fetchApi';
import Header from './components/Header';
import CurrencyButton from './components/CurrencyButton';
import WebSocket from './components/Websocket/WebSocketComponent';
import API from './components/API/index';

// todo add gh-pages and push build
// todo dodaj podświetlenie dla zmian
// todo posprzataj i przebuduj wszystko pod reduxa
class App extends Component {
    changeCurrency(e) {
        const value = e.target.value;
        this.props.changeCurrencyR(value);
    }

    render() {
        return (
            <div className="container-fluid">
                <FetchApi />
                <Header currency={this.props.currency}/>
                <CurrencyButton currency={this.props.currency} onChange={(e) => this.changeCurrency(e)}/>
                {this.props.response.hasOwnProperty('data') ?
                    <WebSocket response={this.props.response} currency={this.props.currency}/> : null}

                <API state={this.props} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        url: state.url,
        currency: state.currency,
        response: state.response
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrencyR: (currency) => {
            dispatch({type: 'CHANGE_CURRENCY', currency: currency})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
