import "./App.css";
import Country from "./Country";
import { useState } from "react";


function App() {
  let [isLoginIn, setIsLoginIn] = useState(false);
  let [countries, setCountries] = useState([
    { id: 1, country: "India", capital: "New Delhi", pop: "1.5B", key: 1 },
    { id: 2, country: "Nepal", capital: "Kathmandu", pop: "30M", key: 2 },
    { id: 3, country: "Pakistan", capital: "Islamabad", pop: "50M", key: 3 },
    { id: 4, country: "Bhutan", capital: "Thimphu", pop: "20M", key: 4 },
  ]);

  function loadNewCountry() {
    setCountries([
      { id: 1, country: "Japan", capital: "Tokyo", pop: "1B", key: 1 },
      { id: 2, country: "Korea", capital: "Seoul", pop: "300M", key: 2 },
      { id: 3, country: "USA", capital: "Washington DC", pop: "500M", key: 3 },
      { id: 4, country: "France", capital: "Paris", pop: "50M", key: 4 },
    ]);
  }
  return (
    <div>
      <button onClick={loadNewCountry}>Click Me</button>
      {isLoginIn == true ? (
        <h1>Please Login</h1>
      ) : (
        countries.map((country) => {
          return (
            <Country
              name={country.name}
              capital={country.capital}
              pop={country.pop}
            />
          );
        })
      )}
    </div>
  );
}

export default App;
