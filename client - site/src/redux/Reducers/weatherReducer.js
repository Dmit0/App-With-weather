import {SEARCH_CITY,CLEAN_SEARCH} from '../types'

const initialState={
    city:[]
}

export const weatherReducer=(state=initialState,action)=>{
    
    switch (action.type){
        case SEARCH_CITY:  
            return {...state,city:[action.payload]}
        case CLEAN_SEARCH:
            return {...state,city:[]}
        default:return state
    }
}