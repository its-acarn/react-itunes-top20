import ChartItem from './ChartItem'

const ChartList = ({chart, loaded}) => {
  if(!loaded) {
    return <h1> loading... </h1>
  }

  const getChartItem = chart.map((item, index) => { 
    return (
      <ChartItem loaded={loaded} item={item} position={index+1}/>
    );
  });

  return (
    <div className="chart-item-container">
      {getChartItem}
    </div>
  )
}

export default ChartList;