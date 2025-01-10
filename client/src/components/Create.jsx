import React from 'react'
import { ChefHat } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import '../styles/dashboardstyles.css';
import { Coffee, Utensils } from 'lucide-react';



const Create = ({onCancel}) => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');
  const handleNavigation = (category) => {
    localStorage.setItem('category', category);
    navigate('/editor');
  }

  const handleRadioClick = (e) => {
    const value = e.target.value;
    setCategory(value);
    console.log('Category:', value);
  }

  const handleNextSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('title', title);
    localStorage.setItem('category', category);
    navigate(`/dashboard/${username}/editor`);
  }
  return (
    <div className='flex justify-center items-center flex-col h-screen w-screen dashboard-main-background relative'>
        <form className='flex flex-col items-center justify-between w-10/12 gap-6'>
          <label htmlFor="title" className='text-3xl flex flex-row items-center justify-center'>Enter Your Recipe Title<Coffee size={32} className='ml-3'/></label>
          <input type="text" 
          id='title' 
          value={title} 
          placeholder='An Amazing Recipe of...'
          onChange={(e) => setTitle(e.target.value)}
          required
          className='bg-slate-500 w-1/2 h-12 pl-2 text-xl rounded-md'/>
          <label htmlFor="category" className='text-2xl flex flex-row items-center justify-center'>Select Category<Utensils size={28} className='ml-3' /></label>
          <div className='flex flex-row item-center gap-20'>
            <div className='flex'>
              <div className='flex flex-col gap-5'>
                <div className='flex items-center'>
                  <input type="radio" name='category' value='Soup' checked={category === 'Soup'} onChange={handleRadioClick} required />
                  <label htmlFor="category" className='text-xl ml-2'>Soup</label>
                </div>
                <div className='flex items-center'>
                  <input type="radio" name='category' value='Salad' checked={category === 'Salad'} onChange={handleRadioClick} required />
                  <label htmlFor="category" className='text-xl ml-2'>Salad</label>
                </div>
                <div className='flex items-center'>
                  <input type="radio" name='category' value='Side Dish' checked={category === 'Side Dish'} onChange={handleRadioClick} />
                  <label htmlFor="category" className='text-xl ml-2'>Side Dish</label>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex items-center'>
                <input type="radio" name='category' value='Appetizer' checked={category === 'Appetizer'} onChange={handleRadioClick} />
                <label htmlFor="category" className='text-xl ml-2'>Appetizer</label>
              </div>
              <div className='flex items-center'>
                <input type="radio" name='category' value='Dessert' checked={category === 'Dessert'} onChange={handleRadioClick} />
                <label htmlFor="category" className='text-xl ml-2'>Desert</label>
              </div>
              <div className='flex items-center justify-center'>
                <input type="radio" name='category' value='Main Course' checked={category === 'Main Course'} onChange={handleRadioClick} />
                <label htmlFor="category" className='text-xl ml-2'>Main Course</label>
              </div>
            </div>
          </div>
          <div className='flex flex-row items-between justify-center w-full   mt-10 absolute bottom-10'>
            <button type='submit' className='absolute left-14 bottom-2 dashboard-second-background px-8 py-3 font-bold rounded-lg hover:text-black hover:bg-white transition-all duration-200' onClick={onCancel} >&larr; Cancel</button>
            <button className='absolute right-14 bottom-2 dashboard-second-background px-8 py-3 font-bold rounded-lg hover:text-black hover:bg-white transition-all duration-200' onClick={handleNextSubmit}>Next &rarr;</button>
          </div>
        </form>
      </div>
  )
}

export default Create
