import {Component} from 'react'
import {connect} from 'react-redux';
import axios from "axios";

class WebSocketApi extends Component {
    state = {
        array: []
    };

    fetchApi() {
        this.props.toggleLoader(true);
        axios.get(this.props.state.url + this.props.state.currency)
            .then(response => {
                if (response.data.status !== 'Fail') {
                    this.props.fetchApi(response);
                    this.props.toggleLoader(false)
                } else {
                    this.props.fetchError(response);
                }
            })
            .catch(error => {
                this.props.fetchError(error);
            });
    }

    websocket() {
        const webSocket = new WebSocket('wss://api2.bitbay.net/websocket/');
        webSocket.onopen = () => {
            webSocket.send(JSON.stringify({
                action: "subscribe-public",
                module: "trading",
                path: "ticker"
            }));
            webSocket.send(JSON.stringify({
                action: "subscribe-public",
                module: "trading",
                path: "orderbook/BTC-PLN"
            }));

            webSocket.send(`{"action": "subscribe-public", "module": "trading", "path": "ticker"}`);
        };

        webSocket.onmessage = e => {
            const data = JSON.parse(e.data);

            // console.log(data.topic, data);

            // Aktualizacja dla tickera (tego na samej gorze)
            if (data.topic === 'trading/ticker') {
                if (data.hasOwnProperty('message')) {
                    if (data.message.market.code === this.props.state.currency) {
                        this.props.updateWebsocket(data.message);
                    }
                }
            }

            // if (data.topic === 'trading/orderbook/btc-pln') {
            //     if (data.hasOwnProperty('message')) {
            //         if (data.message.changes.length > 0) {
            //             for (let i=0; i < data.message.changes.length; i++) {
            //                 if (data.message.changes[i].action === 'remove' && data.message.changes[i].entryType === 'Buy') {
            //                     // console.log('data.message.changes[i]', data.message.changes[i]);
            //                     this.doSomethingOnChange(`remove ${i}`, data.message.changes[i]);
            //                 }
            //             }
            //
            //         }
            //         // if (data.message.market.code === this.props.state.currency) {
            //         //     this.props.updateWebsocket(data.message);
            //         // }
            //     }
            // }
        };
    }

    doSomethingOnChange(type, data) {
        let array = this.state.array;
        array.push(data);
        // console.log(type, data);

        this.setState({array});
        if (this.state.array.length === 10) {
            console.log('this.state.array', this.state.array);
        }

    }

    componentDidMount() {
        this.fetchApi();
        this.websocket();
        // this.websocketOrderbook();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.state.currency !== this.props.state.currency) {
            this.fetchApi();
        }
    }


    render() {
        return null
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLoader: (toggle) => {
            dispatch({type: 'TOGGLE_LOADER', toggle: toggle})
        },
        fetchApi: (response) => {
            dispatch({type: 'FETCH_API', response: response})
        },
        fetchError: (error) => {
            dispatch({type: 'FETCH_ERROR', error: error})
        },
        updateWebsocket: (bids) => {
            dispatch({type: 'UPDATE_WEBSOCKET', bids: bids})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WebSocketApi);
