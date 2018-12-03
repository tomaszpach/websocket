import React from 'react';

const Header = ({currency}) => {
    return (
        <div>
            <h2>Booty Bay</h2>
            <p>Sprawdzasz kurs dla: {currency}</p>
        </div>
    );
};

export default Header;
