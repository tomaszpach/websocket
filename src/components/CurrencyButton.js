import React from 'react';
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

const CurrencyButton = ({currency, onChange}) => {
    return (
        <FormControl className="currency-select">
            <InputLabel htmlFor="currency-simple">Waluta</InputLabel>
            <Select
                value={currency}
                onChange={(e) => onChange(e)}
                inputProps={{
                    name: 'currency',
                    id: 'currency-simple',
                }}
            >
                <MenuItem value="BTC-PLN">BTC-PLN</MenuItem>
                <MenuItem value="BTC-EUR">BTC-EUR</MenuItem>
                <MenuItem value="BTC-USD">BTC-USD</MenuItem>
                <MenuItem value="ETH-PLN">ETH-PLN</MenuItem>
                <MenuItem value="LSK-PLN">LSK-PLN</MenuItem>
                <MenuItem value="LTC-PLN">LTC-PLN</MenuItem>
                <MenuItem value="GAME-PLN">GAME-PLN</MenuItem>
                <MenuItem value="DASH-PLN">DASH-PLN</MenuItem>
            </Select>
        </FormControl>
    );
};

export default CurrencyButton;
