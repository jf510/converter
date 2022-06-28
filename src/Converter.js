import React, { useEffect, useState } from "react";
import "./Converter.css";

const BASE_URL = "http://api.exchangeratesapi.io/latest";

function Converter() {
    const [currencyOptions, setCurrencyOptions] = useState([]);
    

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      });
  }, []);

  return (
    <div className="converter">
      <h1>Converter</h1>
      <div className="converter__initial">
        <input className="input" type="text" placeholder="Amount" />
        <select className="select">
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="converter__final">
        <input className="input" type="text" placeholder="Amount" />
        <select className="select">
          <option>USD</option>
          <option>BTC</option>
          <option>GBP</option>
        </select>
      </div>
    </div>
  );
}

export default Converter;
