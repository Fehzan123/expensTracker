import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './LoginForm.css'

import AouthContext from './Aouth-context';

function LoginForm() {
    const navigate=useNavigate()
    const [isLogin,Setloging]=useState(false)

   const authCtx= useContext(AouthContext)
    
    const emailInputRef=useRef()
    const passwordInputRef=useRef()
    const [isLoading, setLoading]=useState(false);
    const switchAuthModeHandler=()=>{
        Setloging((preState)=>!preState)
    }

    const submitHandler=(event)=>{
      event.preventDefault();
      const enterEmail=emailInputRef.current.value;
      const enterpassword=passwordInputRef.current.value;
      /// add validatiiom optional

      setLoading(true)
      let url;
     if(isLogin){
      url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSG5Kbk3sUVdj-uTdvWKMEOnbV-pe5QZY"
     }else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCSG5Kbk3sUVdj-uTdvWKMEOnbV-pe5QZY'
  
     }
     fetch(
      url,
     {
       method:"POST",
       body:JSON.stringify({
         email:enterEmail,
         password:enterpassword,
         returnSecureToken:true,
       }),
       headers:{
        'Content-Type': 'application/json'
       }
     }
     ).then(res=>{
       setLoading(true)
       if(res.ok){
        return res.json()
       }else{
         return res.json().then((data=>{
           let errormassage="Authentication failed";
          // if(data && data.error && data.error.message){
          //  errormassage=data.error.message
          // }
  
            throw new Error(errormassage)
         }))
  
       }
     }).then((data)=>{
        
        authCtx.login(data.idToken)
        localStorage.setItem("email",enterEmail)
        navigate("/")
      console.log(data)
     }).catch((err)=>{
      alert(err.message)
     })
  
    }
  return (
    <section >
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div >
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div >
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required ref={passwordInputRef}
          />
          <label htmlFor='password'>ReconformPassword</label>
          <input
            type='password'
            id='password'
            required ref={passwordInputRef}
          />
        </div>
        <div>
       {!isLoading && <button style={{padding:"8px"}}>{isLogin ? "Login" : "Create Account"}</button>}
       {isLoading && <p>send request</p>}
        </div>
        <div >
          <button
            type='button'
            
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default LoginForm