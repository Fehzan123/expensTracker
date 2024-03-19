import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Nave.css'
import AouthContext from './Aouth-context';
import LoginForm from './LoginForm';
import UserContext from './UserUpdateContext';

const Nave = () => {
  const authCtx = useContext(AouthContext);
  const {ShowUpdateForm,setShowUpdateForm}=useContext(UserContext);

  const LoginL = authCtx?.isLonggedIn;
  useEffect(() => {
    console.log(LoginL);
  }, [authCtx]);

 const LogOutHandler=()=>{
  authCtx.longout();
 }
  const ShowUpdatFormHandler=()=>{
    setShowUpdateForm(true);
  }
  return (
    <div className="navbar">
      <Link to="/Home" className="link">Home</Link>
      <Link to="/About" className="link">About</Link>
      <Link to="/Store" className="link">Store</Link>
      {!LoginL && <NavLink to="/Login">Login</NavLink>}
      {LoginL && <Link to="/UserForm" >Update Profile</Link>}
     {LoginL && <button onClick={LogOutHandler}>LogOut</button>}
     
    </div>
  );
};

export default Nave;