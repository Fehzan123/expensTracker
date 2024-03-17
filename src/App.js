import React, { useContext } from 'react'

import Nave from './Nave';
import { Routes,Route } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Store from './Page/Store';
import AuthContext from './Aouth-context';
import UserUpdate from './UserUpdate';
import UserContext from './UserUpdateContext';


const App = () => {
   const {ShowUpdateForm}=useContext(UserContext);
 const authctx=useContext(AuthContext);
 const LoginL=authctx?.isLonggedIn;
  return (
    <div>
     <Nave/>
  
     <Routes>

     {LoginL && <Route path='/Home' element={<Home/>}/>}
    {LoginL && <Route path='/About'element={<About/>}/>}
    {LoginL && <Route path='/Store' element={<Store/>}/>}
    {LoginL && <Route path='/UserForm' element={<UserUpdate/>}/>}
     </Routes>
   
     
   
    </div>
  )
}

export default App