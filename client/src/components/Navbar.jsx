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
        <h1 className='font-bold text-xl ml-10 cursor-pointer' onClick={handleHomePageClick}>Épicurienne</h1>
        <div className='flex gap-5 mr-2 justify-center items-center'>
            <h1 className='cursor-pointer hover:text-orange-300'>Top Rated Recipes</h1>
            <h1 className='cursor-pointer hover:text-orange-300' onClick={handleCuisineClick}>Cuisines</h1>
            <h1 className='cursor-pointer hover:text-orange-300'>About</h1>
            <h1 className='cursor-pointer hover:text-orange-300'>Features</h1>
            <h1 className='cursor-pointer hover:text-orange-300'>Changelog</h1>
        </div>
        <div>
          <h1 className='mr-10'>Log-in</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar
