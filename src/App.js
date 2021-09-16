import "./App.css";
import React, { useEffect, useState } from "react";
import Country from "./Country";

function App() {
  const [countrys, setCounterys] = useState([]);

  //getdata

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCounterys(data));
  }, []);
  console.log(countrys);
  return (
    <div className="container">
      {countrys.map((country) => (
        <Country {...country}></Country>
      ))}
    </div>
  );
}

export default App;
