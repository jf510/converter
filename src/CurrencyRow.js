import React from "react";
import PropTypes from "prop-types";

CurrencyRow.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,

};

function CurrencyRow(props) {
  return (
    <div className="currencyRow">
      <input type="text" placeholder="Amount" value={props.amount} onChange={e => props.onAmountChange(e.target.value)} />
      <select value={props.currency} onChange={e => props.onCurrencyChange(e.target.value)}>
        {props.currencies.map((currency) => (
          <option value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow;
