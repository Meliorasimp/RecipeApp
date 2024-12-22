import React from 'react'

const MyRecipes = () => {
  return (
    <div className='flex justify-start items-start flex-col h-screen w-11/12 gap-12'>
      <div className='ml-4 w-full h-12 text-gray-600 flex-col items-center justify-center gap-2 pt-16'>
        <div className='flex items-center justify-evenly mr-8'>
          <div className='h-60 w-96 bg-white rounded-xl'>
            <h1 className='text-xl font-bold mt-2 ml-2'>Fetuccini Alfredo</h1>
          </div>
          <div className='h-60 w-96 bg-white rounded-xl'>
            <h1 className='text-2xl font-bold'></h1>
          </div>
          <div className='h-60 w-96 bg-white rounded-xl'>
            <h1 className='text-2xl font-bold'></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyRecipes
