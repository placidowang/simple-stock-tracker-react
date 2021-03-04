import React, { useState, useEffect } from 'react';
import Graph from './Graph.js';

const StockTile = ({stock, KEY, setPortfolio}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState({
    "Time Series (5min)": {
      "2021-02-23 20:00:00": {
        "4. close": "Couldn't find " + stock.name
      }
    }
  })

  // Will need to set up Cleanup when/if auto-refreshing ticker data
  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock.name}&interval=5min&apikey=${KEY}`)
      .then(r => r.json())
      .then(d => {
        console.log(d);
        if (!d.Note) {
          setData(d);
        }
        setIsLoaded(true);
      })
  },[])

  const currVal = data["Time Series (5min)"]["2021-02-23 20:00:00"]["4. close"];

  const currValStr = () => {
    if (currVal.charAt(0) !== "C") {
      return(`Current value: $${parseFloat(val).toFixed(2)}`);
    } else {
      return currVal;
    }
  }

  return(
    <>
      {isLoaded ?
        <div>
          <h1>{stock.name}</h1>
          <p>{currValStr()}</p>
          <p>Shares: {stock.shares}</p>
          <p>Total value: {currVal * stock.shares}</p>
          <Graph />
        </div>
        :
        <div>
          <h1>{stock.name}</h1>
          <p>Searching for {stock.name}...</p>
          <Graph />
        </div>
      }
    </>
  )
}

export default StockTile;