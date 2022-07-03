import React from "react";
import PropTypes from "prop-types";

CurrencyRow.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
};

function CurrencyRow(props) {
  return (
    <div className="currencyRow">
      <input type="number" placeholder="Amount" value={props.amount} />
      <select value={props.currency}>
        {props.currencies.map((currency) => (
          <option value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow;
