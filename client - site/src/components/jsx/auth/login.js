import React  from 'react';

export const  Login =({email,password,changHandler,disable,is_show_regist,loginHeandler})=>{
    return ( <div className="Login">
                <div className="inputsFor">
                    <input type="text" className="input" value={email} placeholder="Email" name="email" onChange={changHandler}/>
                    <input type="password" className="input" value={password} placeholder="Password" name="password" onChange={changHandler}/>
                </div>
                <span className="healperbox">If dont have acc you  need to</span> 
                <button type="button" className="btn btn-link links" onClick={is_show_regist} disabled={disable}>registrate</button>
                <div className="ButtonsControl">
                <button type="button" className="btn btn-dark button " disabled={disable} onClick={loginHeandler}>Log In</button>
                </div>
            </div>)
}