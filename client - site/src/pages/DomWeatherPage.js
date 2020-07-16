import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {log_out,search,searchLoveCity,show_error,cleanLoveCity} from '../redux/actions'
import {DomLovedCites} from '../components/jsx/domLovedCites'
import {InfoStarCity} from '../components/jsx/infoStarCity'
import '../css/Dom.css'



export const DomWeatherPage=()=>{
   const [input,setInput]=useState(null)
   const [select,setSelect]=useState({
      id:null,
      select:false
   })


   const {currentCity,lovedCity}=useSelector((state)=>{
      return {
               currentCity:state.weather.savedCites,
               lovedCity:state.weather.seachrLovedCity
             }
    })
    
   const dispatch=useDispatch();

   const onSearch=async()=>{
      let response=await fetch(`http://api.openweathermap.org/data/2.5/find?q=${input}&type=like&APPID=b7a3b8c98127397abf9e9f95763a91ce`)
      let city=await response.json();
      if(!response.ok){
         console.log()
         dispatch(show_error(city.message))
         return
      }
      dispatch(cleanLoveCity())
      dispatch(search(city))
   }
   
    const onLogout=()=>{
       dispatch(log_out())
    }

    const onSelect=async(id)=>{
      let response=await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=b7a3b8c98127397abf9e9f95763a91ce`)
      let lovecity=await response.json();
      dispatch(searchLoveCity(lovecity))
      setSelect({
         ...select,
         id:id,
         select:true
      })
    }

    return(
       <>
        <div className="navbar navbar-light bg-light d-flex justify-content-between"> 
                 <Link to=""><span className="navbar-brand ">WEATHER APP</span></Link>
                <div className="d-flex">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setInput(e.target.value)}></input>
                  <Link to={`/SerchCity/${input}`}><button className="btn btn-outline-success serch" type="submit" onClick={onSearch} >Search</button></Link> 
                </div> 
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={onLogout}>logout</button>
       </div>
       <div className="Main-Content">
         <div className="Block-Star col-4">
         {currentCity.length 
         ?<div> <span className="Header-Select">Select a city</span> <p/> {currentCity.map((city)=><DomLovedCites name={city.name} id={city.id} key={city.id} onChoose={onSelect} 
         active={city.id===select.id?select.select ? "LovedCity_active":null :null}/>)}</div>
         :<span className="main-info ml-5" >there is no stared city at the moment</span>
         }
         </div>
         <div className="">
         {lovedCity.length
         ?<InfoStarCity city={lovedCity[0]}/>
         :currentCity.length 
            ?<span className="main-info">Information</span>
            :null
         }
         </div>
       </div>
       </>
    )
}