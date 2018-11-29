import React from 'react';

const CurrencyButton = ({onClick}) => {
    return (
        <button onClick={() => onClick()}>zmien walute</button>
    );
};

export default CurrencyButton;
