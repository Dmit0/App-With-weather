import React from 'react';
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {log_out,cleanSearch,addCity,removeCity} from '../redux/actions'
import {CityInfo} from '../components/jsx/searchCity/cityInfo'
import {ErrorInfo} from '../components/jsx/searchCity/errorInfo'
import {Errors} from '../components/show_components/errors'


 

export const SerchCity=(props)=>{
  

    
   const dispatch=useDispatch()
   const {city,savedCites,errors,token}=useSelector((state)=>{return {
    city:state.weather.city[0],
    savedCites:state.weather.savedCites,
    errors:state.app.errors,
    token:state.auth.token
   }}) 
   
  
   const onLogout=()=>{
    dispatch(log_out())
   }  
   
   const onReturn=()=>{
       dispatch(cleanSearch()) 
 
   }
   let check=(id)=>{
    if(savedCites.length){

      let checked = savedCites.find((item)=>{
          let num=item.id
          if(typeof num !== "number"){
              num=Number(item.id)
          }
          return num===id
        })
      return !!checked
    }
    else return false
   }

   const onToggle=(id,name,state,coordinates)=>{
    if(state){
        let City={
            id,
            name,
            coordinates
        }
        dispatch(addCity(id,name))
        fetch('/api/cities/add',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json;charset=utf-8',
                 Authorization:`Bearer ${token}`
            },
            body:JSON.stringify(City)
        })
    }else {
        dispatch(removeCity(id))

        fetch('/api/cities/remove',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json;charset=utf-8',
                 Authorization:`Bearer ${token}`
            },
            body:JSON.stringify({id})
        })

    }
   }

    return(
        <>
                {errors 
                ? errors.map((error)=><Errors text={error} key={error.length+Date.now()}/>)
                :null
                }
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
                :<ErrorInfo />
        }
        </div>
        </>

    )
}

