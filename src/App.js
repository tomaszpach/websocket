import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles/main.css';

import WebSocketApi from './containers/webSocketApi';
import Header from './components/Header';
import CurrencyButton from './components/CurrencyButton';
import Tables from './components/Tables/index';
import Exchange from './components/Exchange';
// import Errors from './components/Errors/Errors';
import Loader from './components/Loader/Loader';

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
        const loadComponents = this.props.response.hasOwnProperty('data') &&
            this.props.response.data.status !== 'Fail' && !this.props.loading;
        return (
            <div className="container-fluid">
                <WebSocketApi/>
                <Header/>
                {loadComponents ? (
                    <div className="content-wrapper">
                        <CurrencyButton currency={this.props.currency} onChange={(e) => this.changeCurrency(e)}/>
                        <Exchange highestBid={this.props.highestBid}
                                  lowestBid={this.props.lowestBid}
                                  highestClass={this.state.highestClass}
                                  lowestClass={this.state.lowestClass}/>
                        <Tables state={this.props}/>
                    </div>
                ) : (
                    <Loader/>
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
        lowestBid: state.lowestBid,
        loading: state.loading
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
