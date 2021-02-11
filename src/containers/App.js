// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

import StockTile from '../components/StockTile.js';


function App() {
  const KEY = process.env.REACT_APP_AV_KEY;
  const [portfolio, setPortfolio] = useState([]);
  const [data, setData] = useState({})

  // Will need to set up Cleanup when/if auto-refreshing ticker data
  useEffect(() => {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GME&interval=5min&apikey=' + KEY)
      .then(r => r.json())
      .then(d => setData(d))
      .then(console.log(data))
  },[])

  return (
    <div className="App">
      <StockTile />
      <StockTile />
      <StockTile />
      <StockTile />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
