import React, { useEffect } from "react";
import "./Converter.css";

const BASE_URL = "http://api.exchangeratesapi.io/latest";

function Converter() {
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="converter">
      <h1>Converter</h1>
      <div className="converter__initial">
        <input type="text" placeholder="Amount" />
        <button>Currency</button>
      </div>

      <div className="converter__final">
        <input type="text" placeholder="Amount" />
        <button>Currency</button>
      </div>
    </div>
  );
}

export default Converter;
