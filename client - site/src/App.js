import React from 'react';
import {BrowserRouter as Router}from 'react-router-dom'
import './css/index.css'
import {useRoutes} from './routes'


function App() {
  const routes=useRoutes(false)
  return (
    <Router>
      <div>
      
          {routes}
    </div>
    </Router>
  );
}

export default App;
