// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

import StockTile from '../components/StockTile.js';


function App() {
  // const KEY = process.env.REACT_APP_AV_KEY;
  const [portfolio, setPortfolio] = useState([
    {
      name: 'GME',
      shares: 10
    },
    {
      name: 'TSLA',
      shares: 1
    },
    {
      name: 'AAPL',
      shares: 3
    }
  ]);
  const KEY = process.env.REACT_APP_AV_KEY;
  

  return (
    <div className="App">
      {portfolio.map(stock => 
        <StockTile stock={stock} KEY={KEY}/>)
      }
    </div>
  );
}

export default App;
