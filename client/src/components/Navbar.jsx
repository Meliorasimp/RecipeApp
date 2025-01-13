import React from 'react'
import '../styles/navbarstyles.css'
import { useNavigate } from 'react-router-dom'
import { Globe, Smile } from 'lucide-react'

import { Fish, LeafyGreen, Pizza, Ham, Amphora, Salad, Beef, IceCreamBowl, Milk, Wheat, EggFried, Star, Apple, Cherry } from 'lucide-react'
import NavigationHook from '../hooks/Navigationhook'

const Navbar = () => {
  const navigateTo = NavigationHook()

  return (
    <div className='navbar-background z-50'>
      <div className='flex justify-between items-center m-2'>
        <h1 className='sm:text-sm lg:font-bold lg:text-lg ml-1 cursor-pointer' onClick={() => navigateTo('/')}>Épicurienne</h1>
        <div className='flex gap-10 mr-2 justify-center items-center'>
            <h1 className='hover:text-orange-300'> &#x25BC; Top Rated Recipes</h1>
            <div className='cursor-pointer hover:text-orange-300 cuisine-dropdown' onClick={() => navigateTo('/cuisines')}>&#x25BC; Cuisines
              <div className='cuisine-dropdown-content'>
                <div className='flex flex-col'>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  navigateTo('/cuisines/spanish'); 
                }}><Fish className='mr-2'/>Spanish Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  navigateTo('/cuisines/japanese');
                }}><LeafyGreen className='mr-2'/>Japanese Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  navigateTo('/cuisines/italian');  
                }}><Pizza className='mr-2'/>Italian Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  navigateTo('/cuisines/indian');
                }}><Ham className='mr-2' />Indian Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  navigateTo('/cuisines/chinese');
                }}><Amphora className='mr-2' />Chinese Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  navigateTo('/cuisines/french');
                }}><Salad className='mr-2' />French Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  navigateTo('/cuisines/mexican');
                }}><Beef className='mr-2' />Mexican Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  navigateTo('/cuisines/greek');
                }}><IceCreamBowl className='mr-2' />Greek Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  navigateTo('/cuisines/thai');
                }}><Milk className='mr-2' />Thai Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  navigateTo('/cuisines/korean'); 
                }}><Wheat className='mr-2' />Korean Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  navigateTo('/cuisines/american');
                }}><EggFried className='mr-2' />American Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  navigateTo('/cuisines/philippines');  
                }}><Star className='mr-2' />Philippines Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  navigateTo('/cuisines/peruvian');
                }}><Apple className='mr-2' />Peruvian Cuisine</h1>
                <h1 className='lg:text-white flex items-center cursor-pointer text-lg mt-2 ml-2 hover:text-orange-300' 
                onClick={(event) => {
                  event.stopPropagation();
                  navigateTo('/cuisines/ethiopian');
                }}><Cherry className='mr-2' />Ethiopian Cuisine</h1>
                </div>
              </div>
            </div>
            <div className='hover:text-orange-300 about-dropdown cursor-pointer' onClick={() => navigateTo('/about')}>&#x25BC; About
              <div className='about-dropdown-content'>
                <div className='flex flex-col gap-2 m-2'>
                  <h1 className='text-lg cursor-pointer text-white flex flex-row items-center hover:text-orange-300'><Globe className='mr-2' />Website</h1>
                  <h1 className='text-lg cursor-pointer text-white flex flex-row items-center hover:text-orange-300'><Smile className='mr-2'/>Developer</h1>
                </div>
              </div>
            </div>
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
