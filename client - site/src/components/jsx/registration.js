import React  from 'react';

export const  Registration =({email,disable,name,password,password_again,changHandler,is_show_regist,registerHeandler})=>{
    return ( <div className="Registration">
    <div className="inputsFor">
        <input type="text"  value={email} className="input" placeholder="Email" name="email" onChange={changHandler}/>
        <input type="text"  value={name} className="input" placeholder="Name"  name="name" onChange={changHandler}/>
        <input type="password"  value={password} className="input" placeholder="Password" name="password" onChange={changHandler}/>
        <input type="password"  value={password_again} className="input" placeholder="Password again" name="password_again" onChange={changHandler}/>
    </div>
   
    <div className="ButtonsControl">  
    <button type="button" disabled={disable} className="btn btn-dark button " onClick={is_show_regist}>Return</button>
    <button type="button" disabled={disable} className="btn btn-dark button "  onClick={registerHeandler}>Registrate</button> 
    </div>
</div>)
}