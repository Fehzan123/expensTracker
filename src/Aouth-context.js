import React, { useState,useEffect } from "react"

const AuthContext=React.createContext({
       token:'',
    isLonggedIn:false,
    login:(token,email)=>{},
    longout:()=>{},
    autoLogout:()=>{},
    emailInput:(email)=>{}

})

  export const AuthContextProvider=(props)=>{
    const innialToken=localStorage.getItem('token')
    const [token,SetToken]=useState(innialToken)
    const [email,setEmail]=useState();
    const userIsLoggedn=!!token;

    const logingHandler=(token)=>{
      SetToken(token)
      localStorage.setItem('token',token)
      localStorage.setItem('email',email)

    }

    const longoutHandler=()=>{
        SetToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('email')
    }
    const emailInputHandler=()=>{
      setEmail(email);
      localStorage.setItem("email",email)
  }

    function autoLogoutHandler(){
        setTimeout(()=>{
          console.log('You have been logged out');
          localStorage.removeItem('token');
          localStorage.removeItem('email');
          SetToken(null); // Update the token state to reflect logout
        },200000)
      }
      useEffect(()=>{
        autoLogoutHandler();
      },[])

      
    

    const ContextValue={
             
      token:token, 
        isLonggedIn:userIsLoggedn,
        login:logingHandler,
        longout:longoutHandler,
        autoLogout:autoLogoutHandler,
        emailInput:emailInputHandler
    }
    return <AuthContext.Provider value={ContextValue}>{props.children}</AuthContext.Provider>
}


export default AuthContext;