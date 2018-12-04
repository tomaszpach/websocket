import React from 'react';

const Exchange = ({highestBid, lowestBid}) => {
    return (
        <div className="buy-sell">
            <p className="buy">
                <b>SKUP • BID: </b><span>{highestBid}</span>
            </p>

            <p className="sell">
                <b>SPRZEDAŻ • ASK: </b><span>{lowestBid}</span>
            </p>
        </div>
    );
};

export default Exchange;
