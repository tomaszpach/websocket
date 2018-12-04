const initState = {
    url: 'https://api.bitbay.net/rest/trading/orderbook/',
    currency: 'BTC-PLN',
    response: {}
};

const rootReducer = (state = initState, action) => {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case 'FETCH_API':
            return {
                ...state,
                response: {...action.response}
            };

        case 'CHANGE_CURRENCY':
            return {
                ...state,
                currency: action.currency
            };

        default:
            return state;
    }
};

export default rootReducer;
