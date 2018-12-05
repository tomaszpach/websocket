import React from 'react';

const Errors = ({}) => {
    return (
        <div>
                <h2>Nieudana próba pobrania danych</h2>
                {this.props.response.hasOwnProperty('data') ? (
                    <div>
                        <p>Status: {this.props.response.data.status}</p>
                        <p>Błąd: {this.props.response.data.errors[0]}</p>
                    </div>
                ) : 'Nieznany bład'}
        </div>
    );
};

export default Errors;
