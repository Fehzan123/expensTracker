import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css';
import ExpensForm from '../Finentioal/ExpensForm';
const Home = () => {
  return (
   <div className='expense-nav'>

    <h1>Day To Day Expenses</h1>
    <div className='ExpensLink'>

      <NavLink to='/Daly'>Daly</NavLink>
      <NavLink to='/Monthly'>Monthly</NavLink>
      <NavLink to='/Yearly'>Yearly</NavLink>
    </div>
     <ExpensForm/>
    </div>
  )
}

export default Home