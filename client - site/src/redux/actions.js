import {USER,STATES_OF_APPLICATION,REGISTRATION_FORM} from './types'

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
            dispatch(hide_error())
         },3000)
    }

    
}

export const hide_error=()=>{
    return{
        type:STATES_OF_APPLICATION.HIDE_ERROR,
    }
}

export const change_regist=(state_regist)=>{
    return {
        type:REGISTRATION_FORM.SHOW_REGISTRATION_FORM,
        payload:state_regist
    }
}



export const log_in=(token,userId)=>{
    return{
        type:USER.LOG_IN,
        payload:{
            token,
            userId
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
