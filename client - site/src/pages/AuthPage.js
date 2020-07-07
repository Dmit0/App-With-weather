import React,{useState} from 'react';
import '../css/loginpage.css' ;
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export const AuthPage=()=>{
  const [needRegist,isneedRegist]=useState(false);
  const [Form,setForm]=useState({
      email:"",
      name:"",
      password:"",
      password_again:""
  })
    return(
        <> 
            <div className="head_bg"></div>
            {needRegist 
            ? <div className="Login">
                <div className="inputsFor">
                    <input type="text" className="input" placeholder="Email"/>
                    <input type="text" className="input" placeholder="Name"/>
                    <input type="text" className="input" placeholder="Password"/>
                    <input type="text" className="input" placeholder="Password again"/>
                </div>
               
                <div className="ButtonsControl">  
                    <span className="buttons" onClick={()=>{isneedRegist(false)}}>Return</span>
                    <span className="buttons">Registrate</span> 
                </div>
            </div>
            :<div className="Registration">
                <div className="inputsFor">
                    <input type="text" className="input" placeholder="Email"/>
                    <input type="text" className="input" placeholder="Password"/>
                </div>
                <span className="healperbox">If you dont have account you need to <a className="link_to_regist" onClick={()=>{isneedRegist(true)}}>registrate</a></span>
                <div className="ButtonsControl">
                    <span className="buttons">Log in</span>   
                </div>
            </div>
            }
           
            
        </>
    )
}