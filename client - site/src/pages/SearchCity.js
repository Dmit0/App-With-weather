import React from 'react';
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {log_out} from '../redux/actions'
import {CityInfo} from '../components/jsx/cityInfo'
import {ErrorInfo} from '../components/jsx/errorInfo'


 

export const SerchCity=(props)=>{
  

   const dispatch=useDispatch()
   const city=useSelector((state)=>{return state.weather.city[0]}) 
   const onLogout=()=>{
    dispatch(log_out())
   }  
    return(
        <>
        <div className="navbar navbar-light bg-light d-flex justify-content-between"> 
        <Link to=""><span className="navbar-brand ">WEATHER APP</span></Link>
        <span></span>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={onLogout}>logout</button>
        </div>
        {
        city===undefined
            ?null
            :city.count!==0
                ?<CityInfo city={city}/>
                :<ErrorInfo/>
        }
        </>

    )
}

