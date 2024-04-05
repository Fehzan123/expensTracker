import React, { useContext, useRef, useState } from 'react';

import AuthContext from './Aouth-context'
import { NavLink, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import {authAction} from './store/auth';
import { useDispatch } from 'react-redux';
function LoginForm() {
const dispatch= useDispatch()
     const navigate=useNavigate()
    const [isLogin,Setloging]=useState(false)

   const authCtx= useContext(AuthContext)
 
    
    const emailInputRef=useRef()
    const passwordInputRef=useRef()
    const [isLoading, setLoading]=useState(false);
    const switchAuthModeHandler=()=>{
        Setloging((preState)=>!preState)
    }

    const submitHandler = (event) => {
      Setloging(true);
      event.preventDefault();
      const enterEmail = emailInputRef.current.value;
      const enterPassword = passwordInputRef.current.value;
    
      setLoading(true);
      let url;
      if (isLogin) {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDWVq8j72BgEU6JeJm1jPXJD23CNh_f5Tw";
      } else {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDWVq8j72BgEU6JeJm1jPXJD23CNh_f5Tw";
      }
    
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enterEmail,
          password: enterPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication failed";
              // if (data && data.error && data.error.message) {
              //   errorMessage = data.error.message;
              // }
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
         
           // Use setIsLonggedIn to update the state
          
           dispatch(authAction.login(data.idToken))
          localStorage.setItem("email", enterEmail);
          navigate("/Home");
          console.log(data);
        })
        .catch((err) => {
          alert(err.message);
        });
    
  
    }
  return (
    <section className=''>
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
        </div>
        <div>
       {!isLoading && <button style={{padding:"8px"}}>{isLogin ? "Login" : "Create Account"}</button>}
       {isLoading && <p>send request</p>}
        </div>
          <NavLink to="/ForgetPassword">Forget Password</NavLink>
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