import React, { useContext } from 'react'

import Nave from './Nave';
import { Routes,Route } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Store from './Page/Store';
import AuthContext from './Aouth-context';


const App = () => {
   
 const authctx=useContext(AuthContext);
 const LoginL=authctx?.isLonggedIn;
  return (
    <div>
     <Nave/>
  
     <Routes>

     {LoginL && <Route path='/Home' element={<Home/>}/>}
    <Route path='/About'element={<About/>}/>
    <Route path='/Store' element={<Store/>}/>
     </Routes>
     
   
    </div>
  )
}

export default App