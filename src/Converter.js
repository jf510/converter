import React, { useEffect, useState } from "react";
import "./Converter.css";
import axios from "axios";
import CurrencyRow from "./CurrencyRow";

//api_key: ZlRvraUrkxabJLU1CZEwXaWRUHad6cuD

function Converter() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("USD");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://data.fixer.io/api/latest?access_key=ZlRvraUrkxabJLU1CZEwXaWRUHad6cuD"
      )
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  const format = (number) => {
    return number.toFixed(4);
  };

  const handleAmount1Change = (amount1) => {
    setAmount2(format(amount1 * rates[currency2]) / rates[setCurrency1]);
    setAmount1(amount1);
  };

  const handleCurrency1Change = (currency1) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[setCurrency1]));
    setCurrency1(currency1);
  };

  const handleAmount2Change = (amount2) => {
    setAmount2(format((amount2 * rates[currency1]) / rates[setCurrency2]));
    setAmount2(amount2);
  };

  const handleCurrency2Change = (currency2) => {
    setAmount2(format((amount2 * rates[currency2]) / rates[setCurrency1]));
    setCurrency2(currency2);
  };

  return (
    <div className="converter">
      <h1>Converter</h1>
      <div className="currencyRow1">
        <CurrencyRow
          onAmountChange={handleAmount1Change}
          onCurrencyChange={handleCurrency1Change}
          currencies={Object.keys(rates)}
          amount={amount1}
          currency={currency1}
        />
      </div>

      <div>=</div>

      <div className="currencyRow2">
        <CurrencyRow
          onCurrencyChange={handleCurrency2Change}
          onAmountChange={handleAmount2Change}
          currencies={Object.keys(rates)}
          amount={amount2}
          currency={currency2}
        />
      </div>
    </div>
  );
}

export default Converter;
