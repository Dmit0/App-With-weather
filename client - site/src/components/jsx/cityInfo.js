import React from 'react';
import {Link} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {cleanSearch} from '../../redux/actions'
import '../../css/cards.css'

export const  CityInfo = ({city}) => {

    const dispatch=useDispatch()
   
    const convert=(temp)=>{
        return Math.round(temp-272)
    }
    return (
        <div className="card bg-light  card_info">
            <div className="card-header d-flex justify-content-between">{city.list[0].name} 
            <input type="checkbox" ></input>
            </div>
                <div className="card-body">
                <div className="Weather">Current weather is {convert(city.list[0].main.temp)} degree</div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Wind : breeze - {city.list[0].wind.speed} m/s</li>
                    <li className="list-group-item">Clouds : {city.list[0].weather[0].description}</li>
                    <li className="list-group-item">Pressure : {city.list[0].main.pressure} hpa</li>
                    <li className="list-group-item">Humidity : {city.list[0].main.Humidity} %</li>
                    <li className="list-group-item">Sunrise : {city.list[0].main.pressure} hpa</li>
                    <li className="list-group-item">Geo coords : [{city.list[0].coord.lat},{city.list[0].coord.lon}]</li>
                </ul>
                <Link to=""><button className="btn btn-primary btn-lg return" onClick={()=>{dispatch(cleanSearch())}}>Return</button></Link>
                </div>
        </div>
    )
}


