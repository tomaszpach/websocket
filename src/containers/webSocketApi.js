import {Component} from 'react'
import {connect} from 'react-redux';
import axios from "axios";

class WebSocketApi extends Component {

    fetchApi() {
        axios.get(this.props.state.url + this.props.state.currency)
            .then(response => {
                this.props.fetchApi(response);
            })
            .catch(error => {
                // this.setState({error});
            });

    }

    websocket() {
        const webSocket = new WebSocket('wss://api2.bitbay.net/websocket/');
        webSocket.onopen = () => {
            webSocket.send(`{"action": "subscribe-public", "module": "trading", "path": "ticker"}`)
        };

        webSocket.onmessage = e => {
            const data = e.data,
                parsedData = JSON.parse(data);

            // this.props.updateWebsocket(parsedData);

            if (parsedData.hasOwnProperty('message')) {
                if (parsedData.message.market.code === this.props.state.currency) {
                    this.props.updateWebsocket(parsedData.message);
                    console.log(parsedData);
                }
            }

            this.setState({parsedData});
        };
    }

    componentDidMount() {
        this.fetchApi();
        this.websocket();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.state.currency !== this.props.state.currency) {
            this.fetchApi();
            this.websocket();
        }
        // console.log(prevProps);
        // console.log('update?')
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
        fetchApi: (response) => {
            dispatch({type: 'FETCH_API', response: response})
        },
        updateWebsocket: (bids) => {
            dispatch({ type: 'UPDATE_WEBSOCKET', bids: bids })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WebSocketApi);
