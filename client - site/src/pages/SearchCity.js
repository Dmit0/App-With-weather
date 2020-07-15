import React from 'react';
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {log_out,cleanSearch,addCity,removeCity} from '../redux/actions'
import {CityInfo} from '../components/jsx/searchCity/cityInfo'
import {ErrorInfo} from '../components/jsx/searchCity/errorInfo'


 

export const SerchCity=(props)=>{
  

    
   const dispatch=useDispatch()
   const {city,savedCites}=useSelector((state)=>{return {
    city:state.weather.city[0],
    savedCites:state.weather.savedCites
   }}) 
   
  
   const onLogout=()=>{
    dispatch(log_out())
   }  
   
   const onReturn=()=>{
       dispatch(cleanSearch()) 
 
   }
   let check=(id)=>{
    if(savedCites.length){
      let checked = savedCites.find((item)=>item.id===id)
      return !!checked
    }
    else return false
   }

   const onToggle=(id,name,state)=>{
    if(state){
        dispatch(addCity(id,name))
    }else dispatch(removeCity(id))
   }

    return(
        <>
        <div className="navbar navbar-light bg-light d-flex justify-content-between"> 
        <Link to=""><span className="navbar-brand " onClick={onReturn}>WEATHER APP</span></Link>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={onLogout}>logout</button>
        </div>
        <div className="wrapper">
        {
        city===undefined
            ?null
            :city.count!==0
                ?city.list.map((current)=><CityInfo city={current}  key={current.id} checked={check(current.id)} onToggle={onToggle}/>)
                :<ErrorInfo/>
        }
        </div>
        </>

    )
}

