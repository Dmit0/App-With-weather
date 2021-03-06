import {USER,STATES_OF_APPLICATION,REGISTRATION_FORM,SEARCH_CITY,CLEAN_SEARCH,ADD_CITY,REMOVE_CITY,SEARCH_LOVE_CITY,CLEAN_LOVE_CITY,STAR_CITIES} from './types'

export const show_loader=()=>{
    return{
        type:STATES_OF_APPLICATION.SHOW_LOADING,
    }
}

export const hide_loader=()=>{
    return{
        type:STATES_OF_APPLICATION.HIDE_LOADING,
    }
}

export const show_error=(errors)=>{

    return dispatch=>{
        dispatch({
            type:STATES_OF_APPLICATION.SHOW_ERORR,
            payload:errors
        })
        
        setTimeout(()=>{
            dispatch(hide_error(errors))
         },2000)
    }

    
}

export const hide_error=(errors)=>{
    return{
        type:STATES_OF_APPLICATION.HIDE_ERROR
    }
}

export const change_regist=(state_regist)=>{
    return {
        type:REGISTRATION_FORM.SHOW_REGISTRATION_FORM,
        payload:state_regist
    }
}



export const log_in=(token,userId)=>{
    return async dispatch=>{
        dispatch({type:USER.LOG_IN, payload:{
            token,
            userId
        }})    
        let response = await fetch('/api/cities/',{ headers:{Authorization:`Bearer ${token}`}})
        let result = await response.json();
        if(!response.ok){
            return
        }
        for(let city of result){
            dispatch(starCities(city.id,city.name))
          }
    }
   
}


export const log_out=()=>{
    return dispatch=>{
        localStorage.removeItem("UserInfo");
        dispatch({
            type:USER.LOG_OUT
        })
    }
}

export const search=(city)=>{
    return{
        type:SEARCH_CITY,
        payload:city
    }
}
export const cleanSearch=()=>{
    return{
        type:CLEAN_SEARCH
    }
}

export const addCity=(id,name)=>{
    return{
        type:ADD_CITY,
        payload:{id,name}
    }
}

export const removeCity=(id)=>{
    return{
        type:REMOVE_CITY,
        payload:id
    }
}

export const searchLoveCity=(city)=>{
    return{
        type:SEARCH_LOVE_CITY,
        payload:city
    }
}

export const cleanLoveCity=()=>{
    return{
        type:CLEAN_LOVE_CITY,
    }
}
export const starCities=(id,name)=>{
    
    return{
        type:STAR_CITIES,
        payload:{id,name}
    }
}
