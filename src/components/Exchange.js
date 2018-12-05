import React from 'react';

const Exchange = ({highestBid, lowestBid, highestClass, lowestClass}) => {
    return (
        <div className="buy-sell-bar">
            <p className="buy">
                <b>SKUP • BID: </b>
                <span className={highestClass}>{highestBid}</span>
            </p>

            <p className="sell">
                <b>SPRZEDAŻ • ASK: </b>
                <span className={lowestClass}>{lowestBid}</span>
            </p>
        </div>
    );
};

export default Exchange;
