import React from 'react'

const WeatherDisplay = (props) => {
    const{data} = props

    const styleObj = {
        color : data.temperature > 20 ? "red" : "blue"
    }

  return (
    <div style={styleObj}>
        <p>{data.temperature}</p>
        <p>{data.conditions}</p>
    </div>
  )
}

export default WeatherDisplay