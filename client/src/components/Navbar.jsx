import React from 'react'
import '../styles/navbarstyles.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();

  const handleHomePageClick = () => {
    navigate('/');
  }

  const handleCuisineClick = () => {
    navigate('/cuisines');
  }
  return (
    <div className='navbar-background z-50'>
      <div className='flex justify-between items-center m-2'>
        <h1 className='font-bold text-xl ml-2 cursor-pointer' onClick={handleHomePageClick}>Épicurienne</h1>
        <div className='flex gap-5 mr-2 '>
            <h1 className='cursor-pointer hover:text-orange-300'>Top Rated Recipes</h1>
            <h1 className='cursor-pointer hover:text-orange-300' onClick={handleCuisineClick}>Types of Cuisines</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar
