import React from 'react'
import { Edit, Delete, Eye } from 'react-feather'

const MyRecipes = () => {
  return (
    <div className='flex justify-start items-start flex-col h-screen w-11/12 gap-12'>
      <div className='ml-4 w-full h-12 text-gray-600 flex-col items-center justify-center gap-2 pt-16'>
        <div className='flex  mr-8 flex-wrap gap-8'>
          <div className='h-60 w-96 bg-white rounded-xl shadow-md font-serif relative'>
            <h1 className='text-2xl font-bold mt-2 ml-6'><a>Fetuccini Alfredo</a></h1>
            <p className='ml-6 mt-2'>is a classic Italian pasta dish that combines fettuccine noodles with a rich and creamy sauce made primarily from butter, 
              heavy cream, and Parmesan cheese.</p>
            <div className='flex justify-center items-center absolute bottom-10 left-5'>
              <Edit /><a href="/" className='text-gray-600 ml-2 font-bold hover:text-black hover:underline cursor-pointer mr-5'>Edit</a>
              <Delete /><a href="/" className='text-gray-600 ml-2 font-bold hover:text-black hover:underline cursor-pointer mr-5'>Delete</a>
              <Eye /><a href="/" className='text-gray-600 ml-2 font-bold hover:text-black hover:underline cursor-pointer mr-5'>View</a>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default MyRecipes
