import React from 'react'
import '../styles/navbarstyles.css'
const Navbar = () => {

  return (
    <div className='navbar-background'>
      <div className='flex justify-between items-center m-2'>
        <h1 className='font-bold text-xl ml-2'>Épicurienne</h1>
        <div className='flex gap-5 mr-2 '>
            <h1 className='cursor-pointer hover:text-orange-300'>Top Rated Recipes</h1>
            <h1 className='cursor-pointer hover:text-orange-300'>Types of Cuisines</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar
