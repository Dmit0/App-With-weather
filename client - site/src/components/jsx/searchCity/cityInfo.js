import React from 'react';
import '../../../css/cards.css'

export const  CityInfo = ({city,checked,onToggle}) => {


    const convert=(temp)=>{
        return Math.round(temp-272)
    }

    return (
        <div className="card bg-light  card_info ">
            <div className="card-header d-flex justify-content-between">{city.name} 
            <input type="checkbox" checked={checked} onChange={(e)=>onToggle(city.id,city.name,e.target.checked,city.coord)}></input>
            </div>
                <div className="card-body">
                <div className="Weather">Current weather is {convert(city.main.temp)} degree</div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Wind : breeze - {city.wind.speed} m/s</li>
                    <li className="list-group-item">Clouds : {city.weather[0].description}</li>
                    <li className="list-group-item">Pressure : {city.main.pressure} hpa</li>
                    <li className="list-group-item">Humidity : {city.main.Humidity} %</li>
                    <li className="list-group-item">Sunrise : {city.main.pressure} hpa</li>
                    <li className="list-group-item">Geo coords : [{city.coord.lat},{city.coord.lon}]</li>
                </ul>
                {/* <Link to=""><button className="btn btn-primary btn-lg return" onClick={()=>{dispatch(cleanSearch())}}>Return</button></Link> */}
                </div>
        </div>
        
    )
}


