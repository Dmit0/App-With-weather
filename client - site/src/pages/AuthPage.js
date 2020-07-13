import React,{useState,useEffect,/*useCallback,useContext*/} from 'react';
import {connect} from 'react-redux'
import {change_regist,show_loader,hide_loader,show_error,log_in} from '../redux/actions'
import {Spinner} from '../components/show_components/spinner'
import {Registration} from '../components/jsx/registration'
import {Login} from '../components/jsx/login'
import {Errors} from '../components/show_components/errors'
import '../css/loginpage.css' 




  const AuthPage=({application_state,show_loader,show_error,hide_loader,log_in})=>{

  const [Form,setForm]=useState({
      email:"",
      name:"",
      password:"",
      password_again:""
  })
  const [needregist,isNeedRegist]=useState(false)

  const errors=application_state.errors
  
  const changHandler = (event)=>{
    setForm({...Form,[event.target.name]:event.target.value})
  }
  const is_show_regist=()=>{
    setForm({email:"", name:"",password:"", password_again:""})
    isNeedRegist(!needregist)
  }
  const registerHeandler=async ()=>{
    show_loader()
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
        
        if(!response.ok){
            check(result)
            return
        }
        is_show_regist();  

  }
  
  const loginHeandler=async ()=>{ 
    show_loader()  
    
      let response = await fetch('api/auth/login',{
          method:"POST",
          headers:{'Content-Type': 'application/json;charset=utf-8'},
          body:JSON.stringify({
              email:Form.email,
              password:Form.password
          })
      })
      let result = await response.json();
      await hide_loader()
      if(!response.ok){
          check(result)
          return  
    }
      localStorage.setItem("UserInfo",JSON.stringify({token:result.token,userId:result.userId}));
      log_in(result.token,result.userId)
      
   
}


const check = (result) =>{
    if(result.errors){
        for(let i=0;i<result.errors.length;i++){
        show_error(result.errors[i].msg)
    }
    }
    else {
        show_error(result.message)
    }
    
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
                { errors 
                ? errors.map((error)=><Errors text={error} key={error.length + Date.now()}/>)
                : null}
                <div className="info_list"> 
                   Weather application
                   <p>App that help you with life time forecast</p>
                   <p className="marg">You need to log In  </p>
                   <p>If you wont to use app</p>
                </div>

                {application_state.loading 
                ? <Spinner/>  
                :needregist 
                     ? <Registration changHandler={changHandler} disable={!!errors.length} is_show_regist={is_show_regist} registerHeandler={registerHeandler} {...Form} />
                     : <Login changHandler={changHandler} disable={!!errors.length} is_show_regist={is_show_regist} loginHeandler={loginHeandler} {...Form}/>
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
    log_in
}
export default connect(mapStateToProps,mapDispatchToProps)(AuthPage)
