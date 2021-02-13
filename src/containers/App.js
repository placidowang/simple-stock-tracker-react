// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

import StockTile from '../components/StockTile.js';


function App() {
  // const KEY = process.env.REACT_APP_AV_KEY;
  const [portfolio, setPortfolio] = useState([]);

  

  return (
    <div className="App">
      <StockTile />
      <StockTile />
      <StockTile />
      <StockTile />
      {/* <StockTile KEY={KEY} />
      <StockTile KEY={KEY} />
      <StockTile KEY={KEY} />
      <StockTile KEY={KEY} /> */}
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
