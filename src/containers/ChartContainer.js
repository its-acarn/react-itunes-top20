import { useEffect, useState } from 'react'
import ChartList from '../components/ChartList'

const ChartContainer = () => {

  const [chart, setChart] = useState({})
  const [loaded, setLoaded] = useState(false)

  const getChart = () => {
    console.log("getting chart info")
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then(res => res.json())
      .then(data => setChart(data.feed.entry))
      .then(() => setLoaded(true))
  }

  useEffect(() => {
    getChart();
  }, [])

  return(
    <>
      <header>
        <h1>UK Top 20</h1>
      </header>
      
      <ChartList chart={chart} loaded={loaded}/>
    </>
  )
}

export default ChartContainer;