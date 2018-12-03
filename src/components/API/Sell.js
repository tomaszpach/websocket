import React from 'react';

const Sell = ({response, currency}) => {
    const splitCurrency = currency.split('-');
    // todo add loader
    if (!response.hasOwnProperty('data')) {
        return <h2>Fetching data from API</h2>
    } else {
        console.log(response);
        let table = response.data.buy.map((item, index) => {
            if (index <= 20) {
                return (
                    <tr key={index}>
                        <td>{item.ra}</td>
                        <td>{item.pa}</td>
                        <td>{(item.ra * item.pa).toFixed(2)}</td>
                    </tr>
                )
            }
        });

        return (
            <div>
                <h4>Oferty sprzedaży ASK - {currency}</h4>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                        <tr className="table-head">
                            <th>Kurs</th>
                            <th>Ilość<span className="curr1"> {splitCurrency[0]}</span></th>
                            <th>Suma<span className="curr2"> {splitCurrency[1]}</span></th>
                        </tr>
                        {table}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};

export default Sell;
