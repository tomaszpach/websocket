import React from 'react';

const Sell = ({response, currency}) => {
    // todo add loader
    if (!response.hasOwnProperty('data')) {
        return <h2>Fetching data from API</h2>
    }

    return (
        <div>
            <h2>Sell - {currency}</h2>
            {
                response.data.sell.map((item, index) => {
                    return <li key={index}>{item.ra}</li>
                })
            }
        </div>
    );
};

export default Sell;
