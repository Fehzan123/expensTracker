import React from 'react';
import { Link } from 'react-router-dom';

import './Nave.css'
const Nave = () => {
  

  return (
    
      <div className="navbar"> 
        <Link to="/Home" className="link">Home</Link>
        <Link to="/About" className="link">About</Link>
        <Link to="/Store" className="link">Store</Link>
      </div>
   
 
  );
};

export default Nave;