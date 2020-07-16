import {USER,SEARCH_CITY,CLEAN_SEARCH,ADD_CITY,REMOVE_CITY,SEARCH_LOVE_CITY,CLEAN_LOVE_CITY,STAR_CITIES} from '../types'

const initialState={
    city:[],
    savedCites:[],
    seachrLovedCity:[]
}

export const weatherReducer=(state=initialState,action)=>{
    
    switch (action.type){
        case USER.LOG_OUT:
            return initialState
        case SEARCH_CITY:  
            return {...state,city:[action.payload]}
        case CLEAN_SEARCH:
            return {...state,city:[]}
        case ADD_CITY:
            return {...state,savedCites:[action.payload,...state.savedCites]}
        case REMOVE_CITY:
            let newMas=state.savedCites.filter(item=>{
                let num=item.id
                if(typeof num !== "number"){
                    num=Number(item.id)
                }
               return num!==action.payload
            })
            return {...state,savedCites:newMas}
        case SEARCH_LOVE_CITY:
            return  {...state,seachrLovedCity:[action.payload]}
        case CLEAN_LOVE_CITY:
            return {...state,seachrLovedCity:[]}
        case STAR_CITIES:
            return {...state,savedCites:[action.payload,...state.savedCites]}
        default:return state
    }
}