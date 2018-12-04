import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import './styles/main.css';

import WebSocketApi from './containers/webSocketApi';
import Header from './components/Header';
import CurrencyButton from './components/CurrencyButton';
import Tables from './components/Tables/index';
import Exchange from './components/Exchange';

class App extends Component {
    state = {
        lowestClass: '',
        highestClass: ''
    };

    changeCurrency(e) {
        const value = e.target.value;
        this.props.changeCurrencyR(value);
    }

    highlightChanges(className) {
        this.setState({[className]: 'updated'},
            () => setTimeout(() => {
                this.setState({[className]: ''})
            }, 250));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.highestBid !== this.props.highestBid) {
            this.highlightChanges('highestClass');
        }

        if (prevProps.lowestBid !== this.props.lowestBid) {
            this.highlightChanges('lowestClass');
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <WebSocketApi/>
                <Header/>
                {this.props.response.hasOwnProperty('data') && this.props.response.data.status !== 'Fail' ? (
                    <div>
                        <CurrencyButton currency={this.props.currency} onChange={(e) => this.changeCurrency(e)}/>
                        <Exchange highestBid={this.props.highestBid}
                                  lowestBid={this.props.lowestBid}
                                  highestClass={this.state.highestClass}
                                  lowestClass={this.state.lowestClass}/>
                        <Tables state={this.props}/>
                    </div>
                ) : (
                    <div>
                        <h2>Nieudana próba pobrania danych</h2>
                        {this.props.response.hasOwnProperty('data') ? (
                            <div>
                                <p>Status: {this.props.response.data.status}</p>
                                <p>Błąd: {this.props.response.data.errors[0]}</p>
                            </div>
                        ) : 'Nieznany bład'}

                    </div>
                )}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        currency: state.currency,
        response: state.response,
        highestBid: state.highestBid,
        lowestBid: state.lowestBid
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
