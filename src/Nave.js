import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Nave.css'
import AouthContext from './Aouth-context';
import LoginForm from './LoginForm';
import UserContext from './UserUpdateContext';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from './store/auth';

const Nave = () => {
 const dispatch= useDispatch();
  const isAuth=useSelector(state=>state.auth.isAuthentication)
  const authCtx = useContext(AouthContext);
  const {ShowUpdateForm,setShowUpdateForm}=useContext(UserContext);

  const LoginL = authCtx?.isLonggedIn;
  useEffect(() => {
    console.log(LoginL);
  }, [authCtx]);

 const LogOutHandler=()=>{
  
  dispatch(authAction.logout());
 }
  const ShowUpdatFormHandler=()=>{
    setShowUpdateForm(true);
  }

  

 
  
  return (
    <div className="navbar">
      <Link to="/Home" className="link">Home</Link>
      <Link to="/About" className="link">About</Link>
      <Link to="/Store" className="link">Store</Link>
     
      {!isAuth && <NavLink to="/Login">Login</NavLink>}
      {isAuth && <Link to="/UserForm" >Update Profile</Link>}
     {isAuth && <button onClick={LogOutHandler}>LogOut</button>}
     
    </div>
  );
};

export default Nave;