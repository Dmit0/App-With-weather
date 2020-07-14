import {combineReducers} from 'redux'
import {user_actionReducer} from './Reducers/user_actionReducer'
import {appReducer} from './Reducers/appReducer'
import {weatherReducer} from './Reducers/weatherReducer'

export const rootReducer = combineReducers({
   auth:user_actionReducer,
   app:appReducer,
   weather:weatherReducer
})