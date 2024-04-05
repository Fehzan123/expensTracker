import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css';
import ExpensForm from '../Finentioal/ExpensForm';
import { useDispatch, useSelector } from 'react-redux';
import { darkModeAction } from '../store/auth';
const Home = () => {
  const dispatch= useDispatch();
  const isAuth=useSelector(state=>state.auth.isAuthentication)
  const isDarkMode = useSelector(state => state.darkMode.isDarkMode);
  const toggleHandler = () => {
    dispatch(darkModeAction.toggleDarkMode());
  };
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  return (
   <div className='expense-nav'>
{isAuth && <input type="checkbox" checked={isDarkMode} onChange={toggleHandler} />}
    <h1>Day To Day Expenses</h1>
    <div className='ExpensLink'>

      <NavLink className="link" to='/Daly'>Daly</NavLink>
      <NavLink className="link" to='/Monthly'>Monthly</NavLink>
      <NavLink className="link" to='/Yearly'>Yearly</NavLink>
    </div>
     <ExpensForm/>
    </div>
  )
}

export default Home