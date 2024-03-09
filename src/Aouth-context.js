import React, { useState } from "react";

const AouthContext = React.createContext({
    token: '',
    isLogedIn: false, // Define isLogedIn here
    login: (token, email) => {},
    logout: () => {},
    emailInput: (email) => {},
});

export const AouthProvider = (props) => {
  

    const initialToken = localStorage.getItem('token');
    const [token, SetToken] = useState(initialToken);
    const [email, setEmail] = useState();
    const userIsLoggedIn = !!token;
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
    // Rename 'userIsLoggedn' to 'userIsLoggedIn'

    const contxtValue = {
              
      token:token, 
      isLonggedIn:userIsLoggedIn,
      login:logingHandler,
      longout:longoutHandler, // Use 'userIsLoggedIn' instead of 'isLogedIn'
    };

    return (
        <AouthContext.Provider value={contxtValue}>
            {props.children}
        </AouthContext.Provider>
    );
};

export default AouthContext;