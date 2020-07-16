import {USER,STATES_OF_APPLICATION} from '../types'

const initialState={
    loading:false,
    errors:[],
    show_registration_window:false
}



export const appReducer=(state=initialState,action)=>{
    switch (action.type){
        case USER.LOG_OUT:
            return initialState
        case STATES_OF_APPLICATION.SHOW_LOADING:
            return {...state,loading:true}
        case STATES_OF_APPLICATION.HIDE_LOADING:
            return {...state,loading:false}
        case STATES_OF_APPLICATION.SHOW_ERORR:
            return {...state,errors:[...state.errors,action.payload]}
        case STATES_OF_APPLICATION.HIDE_ERROR:
            return  {...state,errors:[]}
        case STATES_OF_APPLICATION.CHANGE_STATE_REGIST:
            return {...state,show_registration_window:action.payload.state_regist}
        default:return state
    }
}