import React, { useState, useEffect } from 'react';
import Graph from './Graph.js';

const StockTile = () => {
  const [data, setData] = useState({})
  const KEY = process.env.REACT_APP_AV_KEY;

  // Will need to set up Cleanup when/if auto-refreshing ticker data
  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GME&interval=5min&apikey=${KEY}`)
      .then(r => r.json())
      .then(d => setData(d))
      .then(console.log(data))
  },[])

  return(
    <div>
        <h1>GME</h1>
        <Graph />
    </div>
    )
}

export default StockTile;