import React, {  useState } from 'react'

import Nave from './Nave';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Store from './Store';
import LoginForm from './LoginForm';

const App = () => {
      
  const [LoginButtonn, setLoginButton] = useState(false);
  // Correct the typo here
 const ShowLoginForm = () => {
   setLoginButton(true); // Correct the typo here
 };
  return (
    <div>
     <Nave/>
  
     <Routes>

     <Route path='/Home' element={<Home/>}/>
     <Route path='/About'element={<About/>}/>
     <Route path='/Store' element={<Store/>}/>
     </Routes>
     
     <LoginForm />
    </div>
  )
}

export default App