import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Nave.css'
import AouthContext from './Aouth-context';
import LoginForm from './LoginForm';

const Nave = () => {
  const authCtx = useContext(AouthContext);

  const LoginL = authCtx?.isLonggedIn;
  useEffect(() => {
    console.log(LoginL);
  }, [authCtx]);

  return (
    <div className="navbar">
      <Link to="/Home" className="link">Home</Link>
      <Link to="/About" className="link">About</Link>
      <Link to="/Store" className="link">Store</Link>
     {!LoginL && <LoginForm />}
    </div>
  );
};

export default Nave;