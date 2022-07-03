import React, { useEffect, useState } from "react";
import "./Converter.css";
import CurrencyRow from "./CurrencyRow";



function Converter() {
  return (
    <div className="converter">
      <h1>Converter</h1>
      <div className="currencyRow1">
        <CurrencyRow currencies={['USD', 'EUR', 'GBP', ]} amount={1} currency={'USD'}/>
      </div>

      <div>=</div>

      <div className="currencyRow2">
        <CurrencyRow currencies={['USD']} amount={1} currency={'USD'} />
      </div>
    </div>
  );
}

export default Converter;
