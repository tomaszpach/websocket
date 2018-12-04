import {Component} from 'react'
import {connect} from 'react-redux';
import axios from "axios";

class FetchApi extends Component {

    fetchApi() {
        axios.get(this.props.state.url + this.props.state.currency)
            .then(response => {
                this.props.fetchApi(response);
            })
            .catch(error => {
                // this.setState({error});
            });

    }

    componentDidMount() {
        this.fetchApi();
    }

    componentDidUpdate(prevProps) {

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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchApi);
