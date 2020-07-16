import {USER} from '../types'

const initialState={
    token:null,
    userId:null,
}

export const user_actionReducer=(state=initialState,action)=>{
    switch (action.type){
        case USER.LOG_IN:
            return {...state,token:action.payload.token,userId:action.payload.userId}
        case USER.LOG_OUT:
            return initialState
        default:return state
    }
}