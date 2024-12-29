import React from 'react'
import '../styles/homepagestyles.css'

const Cuisines = () => {
  return (
    <div className='homepage-background flex justify-center items-center relative flex-col'>
        <h1 className='mb-4 mt-4 absolute top-12 homepage-text-color font-bold text-2xl'>Explore the Flavors of the World</h1>
        <div className='h-4/5 w-11/12 flex flex-wrap justify-evenly items-center mt-14'>
          <div className='group h-4/5 w-2/5 [perspective: 1000px]'>
            <div className='relative h-full w-full rounded-xl shadow-xl [transform-style: preserve-3d] group-hover:[transform:rotateY(180deg)] transition-all duration-700'>
              <div className='absolute inset-0'>
                <img src="./mixed-seafood-paella.jpg" alt="dasd" className='h-2/3 w-full  rounded-xl object-cover shadow-black/40'/>
                <h1 className='mt-2 ml-2 text-black text-xl font-bold'>Spanish Cuisine</h1>
                <p className='ml-2 mr-2 text-black'>short intro for spanish cuisine
                Spanish cuisine is a delightful blend of vibrant flavors, rich history, and diverse ingredients. It emphasizes fresh, high-quality produce, with key elements including olive oil, garlic, tomatoes, and saffron.</p>
              </div>
              <div className='absolute inset-0 rounded-xl bg-black/40 flex justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden]'>  
                <div className='flex'>
                  <h1>Hello World</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='group h-4/5 w-2/5 [perspective: 1000px]'>
            <div className='relative h-full w-full rounded-xl shadow-xl [transform-style: preserve-3d] group-hover:[transform:rotateY(180deg)] transition-all duration-500'>
              <div className='absolute inset-0'>
                <img src="./mixed-seafood-paella.jpg" alt="dasd" className='h-2/3 w-full  rounded-xl object-cover shadow-black/40'/>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cuisines
