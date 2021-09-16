import React from "react";
import "./County.css";

function Country({ name, flag, population, region, capital, area }) {
  return (
    <div className="Country-in">
      <div className="image">
        <img src={flag} alt="flag" />
      </div>
      <div className="countery-details">
        <h2>{name}</h2>
        <p>Capital : {capital}</p>
        <p>Region : {region}</p>
        <p>population :{population}</p>
        <p>Area :{area}</p>
      </div>
    </div>
  );
}

export default Country;
