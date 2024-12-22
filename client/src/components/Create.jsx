import React from 'react'
import { ChefHat } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate();
  const handleNavigation = (category) => {
    localStorage.setItem('category', category);
    navigate('/editor');
  }
  return (
    <div className='flex justify-start items-start flex-col h-screen w-10/12 gap-12'>
        <div className='ml-4 w-full h-12 text-gray-600 flex-col items-center gap-2 pt-16'>
          <h1 className='text-3xl font-bold flex items-center'>Select a Recipe Category to Create.<ChefHat size={36} className='ml-3'/></h1>
        </div>
        <div className='ml-4 w-11/12 h-5/6 grid grid-cols-3 grid-rows-2 gap-4'>
          <div className='col-start-1 col-span-1 row-start-1 row-span-1 bg-red-400 rounded-md dashboard-card-background text-gray-600 font-light text-xl pt-2 pl-2 flex flex-col items-left scale-animation cursor-pointer shadow-xl'
          onClick={() => handleNavigation('Appetizers')}
          >
            <h1 className='text-left mb-3'>Appetizers</h1>
            <img src="https://tinyurl.com/34hw6w46" alt="Appetite for your Might" className='h-5/6 w-full rounded-lg'/>
          </div>
          <div className='col-start-2 col-span-1 row-start-1 row-span-1 bg-red-400 rounded-md dashboard-card-background text-gray-600 font-light text-xl pt-2 pl-2 shadow-xl scale-animation cursor-pointer' onClick={() => handleNavigation('Main Course')}>
            <h1 className='text-left mb-3'>Main Courses</h1>
            <img src="https://tinyurl.com/yrdt654w" alt="Main Dishes" className='h-5/6 w-full rounded-lg'/>
          </div>
          <div className='col-start-3 col-span-1 row-start-1 row-span-1 bg-red-400 rounded-md dashboard-card-background text-gray-600 font-light text-xl pt-2 pl-2 shadow-xl scale-animation cursor-pointer' onClick={() => handleNavigation('Side Dishes')}>
            <h1 className='text-left mb-3'>Side Dishes</h1>
            <img src="https://tinyurl.com/358mwh7d" alt="Side Dishes" className='h-5/6 w-full rounded-lg'/>
          </div>
          <div className='col-start-1 col-span-1 row-start-2 row-span-1 bg-red-400 rounded-md dashboard-card-background text-gray-600 font-light text-xl pt-2 pl-2 shadow-xl scale-animation cursor-pointer' onClick={() => handleNavigation('Desserts')}>
            <h1 className='text-left mb-3'>Desserts</h1>
            <img src="https://tinyurl.com/2aasemvf" alt="Desserts" className='h-5/6 w-full rounded-lg'/>
          </div>
          <div className='col-start-2 col-span-1 row-start-2 row-span-1 bg-red-400 rounded-md dashboard-card-background text-gray-600 font-light text-xl pt-2 pl-2 shadow-xl scale-animation cursor-pointer' onClick={() => handleNavigation('Beverages')}>
            <h1 className='text-left mb-3'>Beverages</h1>
            <img src="https://tinyurl.com/m4s99p83" alt="Beverages" className='h-5/6 w-full rounded-lg'/>
          </div>
          <div className='col-start-3 col-span-1 row-start-2 row-span-1 bg-red-400 rounded-md dashboard-card-background text-gray-600 font-light text-xl pt-2 pl-2 shadow-xl scale-animation cursor-pointer' onClick={() => handleNavigation('Snacks')}>
            <h1 className='text-left mb-3'>Snacks</h1>
            <img src="https://tinyurl.com/9ja5sywm" alt="Snacks" className='h-5/6 w-full rounded-lg'/>
          </div>
        </div>
      </div>
  )
}

export default Create
