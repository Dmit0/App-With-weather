import React,{useState,useEffect,/*useCallback,useContext*/} from 'react';
import {connect} from 'react-redux'
import {change_regist,show_loader,hide_loader,show_error,hide_error,log_in,log_out} from '../redux/actions'
import '../css/loginpage.css' 


  const AuthPage=({application_state,change_regist,show_loader,hide_loader,log_in})=>{

  const [Form,setForm]=useState({
      email:"",
      name:"",
      password:"",
      password_again:""
  })
  const [needregist,isNeedRegist]=useState(false)
  
  const changHandler = (event)=>{
    setForm({...Form,[event.target.name]:event.target.value})
  }
  const is_show_regist=()=>{
    setForm({email:"", name:"",password:"", password_again:""})
    //change_regist(!application_state.show_registration_window )
    isNeedRegist(!needregist)
  }
  const registerHeandler=async ()=>{
    show_loader()
      try{
        let response = await fetch('api/auth/register',{
            method:"POST",
            headers:{'Content-Type': 'application/json;charset=utf-8'},
            body:JSON.stringify({
                email:Form.email,
                name:Form.name,
                password:Form.password
            })
        })
        let result = await response.json()
        await hide_loader()
        is_show_regist();        
        console.log(result.message)      
      }catch(e){
        hide_loader()
      }
  }
  
  const loginHeandler=async ()=>{ 
    show_loader()  
    try{
      let response = await fetch('api/auth/login',{
          method:"POST",
          headers:{'Content-Type': 'application/json;charset=utf-8'},
          body:JSON.stringify({
              email:Form.email,
              password:Form.password
          })
      })
      let result = await response.json();
      localStorage.setItem("UserInfo",JSON.stringify({token:result.token,userId:result.userId}));
      hide_loader();
      log_in(result.token,result.userId)
      
    }catch(e){hide_loader()}
    
    
    
}
useEffect(()=>{
                const data=JSON.parse(localStorage.getItem("UserInfo"))
                if( data && data.token){
                    log_in(data.token,data.userId)
                }
            },[log_in])

    return(
        <> 
            <div className="head_bg ">
                <div className="info_list"> 
                   Weather application
                   <p>App that help you with life time forecast</p>
                   <p className="marg">You need to log In  </p>
                   <p>If you wont to use app</p>
                </div>
                {needregist 
            ?
            
            <div className="Registration">
                <div className="inputsFor">
                    <input type="text"  value={Form.email} className="input" placeholder="Email" name="email" onChange={changHandler}/>
                    <input type="text"  value={Form.name} className="input" placeholder="Name"  name="name" onChange={changHandler}/>
                    <input type="password"  value={Form.password} className="input" placeholder="Password" name="password" onChange={changHandler}/>
                    <input type="password"  value={Form.password_again} className="input" placeholder="Password again" name="password_again" onChange={changHandler}/>
                </div>
               
                <div className="ButtonsControl">  
                    <span className="buttons" onClick={is_show_regist}>Return</span>
                    <span className="buttons"  onClick={registerHeandler}>Registrate</span> 
                </div>
            </div>
            :<div className="Login">
                <div className="inputsFor">
                    <input type="text" className="input" value={Form.email} placeholder="Email" name="email" onChange={changHandler}/>
                    <input type="password" className="input" value={Form.password} placeholder="Password" name="password" onChange={changHandler}/>
                </div>
                <span className="healperbox">If you dont have account you need to <span className="link_to_regist" onClick={is_show_regist}>registrate</span></span>
                <div className="ButtonsControl">
                    <span className="buttons"  onClick={loginHeandler}>Log in</span>   
                </div>
            </div>
            }
            </div>
            
           
           
            
        </>
    )
}

const mapStateToProps=(state)=>{
    return {
        application_state:state.app
    }
}

const mapDispatchToProps={
    change_regist,
    show_loader,
    hide_loader,
    show_error,
    hide_error,
    log_in,
    log_out


}
export default connect(mapStateToProps,mapDispatchToProps)(AuthPage)
