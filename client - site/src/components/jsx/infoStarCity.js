import React from 'react';
import '../../css/Dom.css'

export const  InfoStarCity=({city})=>{
    const convert=(temp)=>{
        return Math.round(temp-272)
    }
    return (
        <>
           <span className="main-info">{city.weather[0].main} in {city.name}</span>
                <ul className="list-group list-group-flush mt-5rem">
                    <li className="list-group-item">Current weather is {convert(city.main.temp)} degree</li>
                    <li className="list-group-item">Wind : breeze - {city.wind.speed} m/s</li>
                    <li className="list-group-item">Humidity : {city.main.humidity} %</li>
                    <li className="list-group-item">Geo coords : [{city.coord.lat},{city.coord.lon}]</li>
                </ul>
        </>
        
    )
}


