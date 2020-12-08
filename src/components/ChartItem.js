const ChartItem = ({loaded, item, position}) => {

  if(!loaded) {
    return <h1> loading... </h1>
  }

  return (
    <>
      <div className="chart-item" > 
        <p className="position-text" >No. <span>{position}</span></p>
        <a href={item.link[0].attributes.href} target="_blank">
        <img src={item["im:image"][2]["label"]} alt="album cover"/>
        </a>
        <p className="track-text" >{item["im:name"]["label"]}</p>
        <p className="artist-text" >{item["im:artist"]["label"]}</p>
        
      </div>
    </>
  )
}

export default ChartItem;