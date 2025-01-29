import NavigationHook from '../hooks/Navigationhook'
import '../styles/homepagestyles.css'

const Cuisines = () => {
  const navigate = NavigationHook()

  return (
    <div className='h-screen cuisines-background flex justify-center items-center relative flex-col'>
        <h1 className='mb-4 mt-4 absolute top-12 homepage-text-color font-bold text-3xl'>Explore the <span className='text-yellow-300'>Flavors</span> of the World</h1>
      <div className='flex justify-center items-center flex-col h-3/4 mt-10 w-3/4 gap-10'>
        <div className='flex justify-evenly items-center flex-row gap-10 w-full'>
          <div>
            <h1 className='text-xl bprder border-white border py-2 px-10 rounded-xl hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300' onClick={() => navigate('/cuisines/spanish')}>Spanish Cuisine</h1>
          </div>
          <div>
            <h1 className='text-xl bprder border-white border py-2 px-10 rounded-xl hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300' onClick={() => navigate('/cuisines/japanese')}>Japanese Cuisine</h1>
          </div>
          <div>
            <h1 className='text-xl bprder border-white border py-2 px-10 rounded-xl hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300' onClick={() => navigate('/cuisines/italian')}>Italian Cuisine</h1>
          </div>
        </div>
        <div className='flex justify-evenly items-center flex-row gap-10 w-full'>
          <div>
            <h1 className='text-xl bprder border-white border py-2 px-10 rounded-xl hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300' onClick={() => navigate('/cuisines/indian')}>Indian Cuisine</h1>
          </div>
          <div>
            <h1 className='text-xl bprder border-white border py-2 px-10 rounded-xl hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>Chinese Cuisine</h1>
          </div>
        </div>
        <div className='flex justify-evenly items-center flex-row gap-10 w-full'>
          <div>
            <h1 className='text-xl bprder border-white border py-2 px-10 rounded-xl hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>French Cuisine</h1>
          </div>
          <div>
            <h1 className='text-xl bprder border-white border py-2 px-10 rounded-xl hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>Mexican Cuisine</h1>
          </div>
          <div>
            <h1 className='text-xl bprder border-white border py-2 px-10 rounded-xl hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>Greek Cuisine</h1>
          </div>
          <div>
            <h1 className='text-xl bprder border-white border py-2 px-10 rounded-xl hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>Thai Cuisine</h1>
          </div>
        </div>
        <div className='flex justify-evenly items-center flex-row gap-10 w-full'>
          <div>
            <h1 className='text-xl bprder border-white border py-2 px-10 rounded-xl hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>Korean Cuisine</h1>
          </div>
          <div>
            <h1 className='text-xl bprder border-white border py-2 px-10 rounded-xl hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>American Cuisine</h1>
          </div>
        </div>
        <div className='flex justify-evenly items-center flex-row gap-10 w-full'>
          <div>
            <h1 className='text-xl bprder border-white border py-2 px-10 rounded-xl font-bold hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>Philippines Cuisine</h1>
          </div>
          <div>
            <h1 className='text-xl bprder border-white border py-2 px-10 rounded-xl hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>Peruvian Cuisine</h1>
          </div>
          <div>
            <h1 className='text-xl bprder border-white border py-2 px-10 rounded-xl hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>Ethiopian Cuisine</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cuisines
