import React from 'react'
import '../styles/homepagestyles.css'

const Cuisines = () => {
  return (
    <div className='homepage-background flex justify-center items-center relative flex-col'>
        <h1 className='mb-4 mt-4 absolute top-12 homepage-text-color font-bold text-2xl'>Explore the Flavors of the World</h1>
        <div className='h-4/5 w-11/12 flex flex-wrap justify-evenly items-center mt-14'>
        <div className='h-4/5 w-2/5 bg-slate-100 rounded-xl shadow-2xl'>
            <div className='bg-yellow-300 h-2/3 w-full'>
                <img src="./mixed-seafood-paella.jpg" alt="" className='h-full w-full object-cover rounded-tl-xl rounded-tr-xl'/>
            </div>
            <h1 className='mt-2 ml-2 mb-2 text-black text-2xl font-bold'>Spanish Cuisine</h1>
           <div className='flex flex-row relative'>
                <p className='text-black mr-2 ml-2 w-80'>Spanish cuisine is a tapestry of vibrant flavors, colorful presentations, and rich culinary traditions</p>
                <button className='text-black absolute right-10 top-5 hover:text-slate-500'>View More >></button>
           </div>
        </div>
        <div className='h-4/5 w-2/5 bg-slate-100 rounded-xl shadow-2xl'>
            <h1 className='mt-2 ml-2 homepage-text-color text-2xl font-bold'>Italian Cuisine</h1>
        </div>
      </div>
    </div>
  )
}

export default Cuisines
