import React, { useContext } from 'react'

import Nave from './Nave';
import { Routes,Route, NavLink } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Store from './Page/Store';
import AuthContext from './Aouth-context';
import UserUpdate from './UserUpdate';
import UserContext from './UserUpdateContext';
import ForgetPassword from './ForgetPassword';
import LoginForm from './LoginForm';
import Daly from './Finentioal/Daly';
import Yearly from './Finentioal/Yearly';
import { useSelector } from 'react-redux';


const App = () => {
  const isAuth=useSelector(state=>state.auth.isAuthentication)
   const {ShowUpdateForm}=useContext(UserContext);
 const authctx=useContext(AuthContext);
 const LoginL=authctx?.isLonggedIn;
  return (
    <div>
     <Nave/>
  
     <Routes>

     {isAuth && <Route path='/Home' element={<Home/>}/>}
    {isAuth && <Route path='/About'element={<About/>}/>}
    {isAuth && <Route path='/Store' element={<Store/>}/>}
    {isAuth && <Route path='/UserForm' element={<UserUpdate/>}/>}
    <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
    <Route path='/Login' element={<LoginForm/>}/>
    <Route path='/Daly' element={<Daly/>}/>
    <Route path='/Monthly' element={<Daly/>}/>
    <Route path='/Yearly' element={<Yearly/>}/>
     </Routes>
      
     
   <p>learn react</p>
   
    </div>
  )
}

export default App