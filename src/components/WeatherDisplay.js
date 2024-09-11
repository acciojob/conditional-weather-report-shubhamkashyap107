import React from 'react'

const WeatherDisplay = (props) => {
    const{data} = props

    const styleObj = {
        color : data.temperature > 20 ? "red" : "blue"
    }

  return (
    <div style={styleObj}>
        <h2>{data.temperature}</h2>
        <h3>{data.conditions}</h3>
    </div>
  )
}

export default WeatherDisplay