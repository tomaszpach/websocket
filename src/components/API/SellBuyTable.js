import React from 'react';

// todo add loader
const SellBuyTable = ({response, currency, buySell}) => {

    if (!response.hasOwnProperty('data')) {
        return <h2>Fetching data from API</h2>
    } else {
        const splitCurrency = currency.split('-'),
            data = buySell === 'buy' ? response.data.buy : response.data.sell,
            text = buySell === 'buy' ? 'Oferty skupu - BID' : 'Oferty sprzedaży - ASK';

        let table = data.map((item, index) => {
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
                <h4>{text}</h4>
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

export default SellBuyTable;
