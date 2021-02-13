import React, { useState, useEffect } from 'react';
import Graph from './Graph.js';

const StockTile = ({stock, KEY}) => {
  const [data, setData] = useState({})

  // Will need to set up Cleanup when/if auto-refreshing ticker data
  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GME&interval=5min&apikey=${KEY}`)
      .then(r => r.json())
      .then(d => {
        console.log(d);
        setData(d)
      })
  },[])

  return(
    <div>
        <h1>{stock.name}</h1>
        <Graph />
    </div>
    )
}

export default StockTile;