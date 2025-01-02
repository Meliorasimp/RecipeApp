import React from 'react'
import '../styles/navbarstyles.css'
import { useNavigate } from 'react-router-dom'
import { Fish, LeafyGreen, Pizza, Ham, Amphora, Salad, Beef, IceCreamBowl, Milk, Wheat, EggFried, Star, Apple, Cherry } from 'lucide-react'
const Navbar = () => {
  const navigate = useNavigate();

  const handleHomePageClick = () => {
    navigate('/');
  }

  const handleCuisineClick = () => {
    navigate('/cuisines');
  }

  const handleSpanishCuisineClick = () => {
    navigate('/cuisines/spanish');
  }

  return (
    <div className='navbar-background z-50'>
      <div className='flex justify-between items-center m-2'>
        <h1 className='sm:text-sm lg:font-bold lg:text-xl ml-10 cursor-pointer' onClick={handleHomePageClick}>Épicurienne</h1>
        <div className='flex gap-10 mr-2 justify-center items-center'>
            <h1 className='hover:text-orange-300'> &#x25BC; Top Rated Recipes</h1>
            <div className='cursor-pointer hover:text-orange-300 cuisine-dropdown' onClick={handleCuisineClick}>&#x25BC; Cuisines
              <div className='cuisine-dropdown-content'>
                <div className='flex flex-col'>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  handleSpanishCuisineClick();
                }}><Fish className='mr-2'/>Spanish Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  handleHomePageClick();
                }}><LeafyGreen className='mr-2'/>Japanese Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  handleHomePageClick();
                }}><Pizza className='mr-2'/>Italian Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  handleHomePageClick();
                }}><Ham className='mr-2' />Indian Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  handleHomePageClick();
                }}><Amphora className='mr-2' />Chinese Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  handleHomePageClick();
                }}><Salad className='mr-2' />French Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  handleHomePageClick();
                }}><Beef className='mr-2' />Mexican Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  handleHomePageClick();
                }}><IceCreamBowl className='mr-2' />Greek Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  handleHomePageClick();
                }}><Milk className='mr-2' />Thai Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  handleHomePageClick();
                }}><Wheat className='mr-2' />Korean Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  handleHomePageClick();
                }}><EggFried className='mr-2' />American Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  handleHomePageClick();
                }}><Star className='mr-2' />Philippines Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  handleHomePageClick();
                }}><Apple className='mr-2' />Peruvian Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  handleHomePageClick();
                }}><Cherry className='mr-2' />Ethiopian Cuisine</h1>
                </div>
              </div>
            </div>
            <h1 className='hover:text-orange-300'>&#x25BC; About</h1>
            <h1 className='hover:text-orange-300'>&#x25BC; Features</h1>
            <h1 className='hover:text-orange-300'>&#x25BC; Changelog</h1>
        </div>
        <div>
          <h1 className='mr-10'>Log-in</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar