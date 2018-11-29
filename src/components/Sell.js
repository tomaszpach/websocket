import React from 'react';

const Sell = ({data, currency}) => {
    console.log('sell data', data);

    if (data === undefined) {
        return <h2>FETCHING DATA</h2>
    }

    return (
        <div>
            <h2>Sell - ${currency}</h2>
            {
                data.sell.map((item, index) => {
                    return <li key={index}>{item.ra}</li>
                })
            }
        </div>
    );
};

export default Sell;
