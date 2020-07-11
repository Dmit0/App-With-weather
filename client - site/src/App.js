import React from 'react';
import {BrowserRouter as Router}from 'react-router-dom'
import './css/index.css'
import {useRoutes} from './routes'
import {useSelector} from 'react-redux'
//import {useAuth} from './hooks/auth_hook'
//import {AuthContext} from './context/AuthContext'


function App() {
 
  const isAuthenticated=useSelector((state)=>{
    return state.auth.token
  })
  const routes=useRoutes(!!isAuthenticated)
  return (
    <Router>
      <div>
          {routes}
    </div>
    </Router>
  );
}

export default App;
