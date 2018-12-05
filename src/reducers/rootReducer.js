const initState = {
    url: 'https://api.bitbay.net/rest/trading/orderbook/',
    currency: 'BTC-PLN',
    response: {},
    loading: true
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_LOADER':
            return {
                ...state,
                loading: action.toggle
            };

        case 'FETCH_API':
            return {
                ...state,
                response: {...action.response},
                highestBid: action.response.data.buy[0].ra,
                lowestBid: action.response.data.sell[0].ra
            };

        case 'FETCH_ERROR':
            return {
                ...state,
                response: {...action.error}
            };

        case 'UPDATE_WEBSOCKET':
            return {
                ...state,
                highestBid: action.bids.highestBid,
                lowestBid: action.bids.lowestAsk
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
