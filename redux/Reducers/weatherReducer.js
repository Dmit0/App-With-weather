import {SEARCH_CITY,CLEAN_SEARCH,ADD_CITY,REMOVE_CITY} from '../types'

const initialState={
    city:[],
    savedCites:[]
}

export const weatherReducer=(state=initialState,action)=>{
    
    switch (action.type){
        case SEARCH_CITY:  
            return {...state,city:[action.payload]}
        case CLEAN_SEARCH:
            return {...state,city:[]}
        case ADD_CITY:
            return {...state,savedCites:[action.payload,...state.savedCites]}
        case REMOVE_CITY:
            let newMas=state.savedCites.filter(item=>item.id!==action.payload)
            return {...state,savedCites:newMas}
        default:return state
    }
}