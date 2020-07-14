import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {log_out,search} from '../redux/actions'



export const DomWeatherPage=()=>{
   const [input,setInput]=useState(null)

   const dispatch=useDispatch();

   const onSearch=async()=>{
      let response=await fetch(`http://api.openweathermap.org/data/2.5/find?q=${input}&type=like&APPID=b7a3b8c98127397abf9e9f95763a91ce`)
      let city=await response.json();
      dispatch(search(city))
   }
   
    const onLogout=()=>{
       dispatch(log_out())
    }
    return(
        <div className="navbar navbar-light bg-light d-flex justify-content-between"> 
                <Link to=""><span className="navbar-brand ">WEATHER APP</span></Link>
                <div className="d-flex">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setInput(e.target.value)}></input>
                  <Link to={`/SerchCity/${input}`}><button className="btn btn-outline-success serch" type="submit" onClick={onSearch} >Search</button></Link> 
                </div> 
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={onLogout}>logout</button>
       </div>
 

    )
}