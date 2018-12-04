import React from 'react';

const SellBuyTable = ({response, currency, buySell}) => {

    if (!response.hasOwnProperty('data')) {
        return <h2>Fetching data from API</h2>
    } else {
        const splitCurrency = currency.split('-');

        let data, text1, text2;

        if (buySell === 'buy') {
            data = response.data.buy;
            text1 = 'Oferty skupu - ';
            text2 = 'BID'
        } else {
            data = response.data.sell;
            text1 = 'Oferty sprzedaży - ';
            text2 = 'ASK';
        }

        let table = data.slice(0, 10).map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.ra}</td>
                    <td>{item.pa}</td>
                    <td>{(item.ra * item.pa).toFixed(2)}</td>
                </tr>
            )
        });

        return (
            <div className={'orderbook ' + text2}>
                <h4>{text1}<span>{text2}</span></h4>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                        <tr className="table-head">
                            <th>Kurs</th>
                            <th>Ilość <span>{splitCurrency[0]}</span></th>
                            <th>Suma <span>{splitCurrency[1]}</span></th>
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
