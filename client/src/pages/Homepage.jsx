import React from 'react'
import '../styles/homepagestyles.css'
import Register from '../components/Register'
import Login from '../components/Login'
import { Goal, Star, Blocks, FolderHeart } from 'lucide-react'

const Homepage = ({hasUserLoggedIn}) => {
  const [showRegister, setShowRegister] = React.useState(false)
  const [showLogin, setShowLogin] = React.useState(false)
  
  const handleRegister = () => {
    setShowRegister(!showRegister)
  }

  const handleLogin = () => {
    setShowLogin(!showLogin)
  }

  return (
    <div className='homepage-background flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center'>
      <div className='mt-20 mb-48 relative pl-20'>
        <div>
          <p className='homepage-text-color homepage-first-text'>Create your own <span className='text-yellow-300'>Recipe</span> And</p>
        </div>
        <div>
          <p className='homepage-text-color homepage-second-text'>Let others know your culinary Magic!</p>
        </div>
        <p className='mb-10 homepage-text-color text-xl leading-relaxed mt-6 w-8/12 text-justify'>Share your unique Recipes and let the World taste your Creativity. 
        Whether you're a seasoned chef or a home cook, your culinary creations deserve to shine. Connect with fellow food enthusiasts and make your mark 
        in the Culinary community</p>
        <button className='underline' onClick={handleRegister}>Start Cookin'! &rarr;</button>
      </div>
      {showRegister && <Register 
      onClose={handleRegister}
      onLogin={handleLogin}
      />}
      {showLogin && <Login 
      onLogin={handleLogin}
      hasUserLoggedIn={hasUserLoggedIn}
      />}
      </div>
      <div className='text-center'>
        <h1 className='text-6xl mb-5 text-center'>Simplicity is key</h1>
        <h3 className='text-2xl mb-10 text-center'>A Website Built with Minimalistic design for Users Around the World who are into Cooking  </h3>
      </div>
      <div className='w-11/12 h-52 flex flex-row gap-x-20 mb-10 lg:flex-nowrap md:flex-wrap md:jusitfy-center md:items-center'>
        <div className='w-2/4 flex flex-row justify-center items-center'>
          <h1 className=' flex items-center justify-center'><Goal size={90} className='mr-7'/></h1>
          <div className='flex flex-row flex-wrap'>
            <h2 className='text-3xl font-bold mb-1 underline'>User-Centered</h2>
            <h3 className='text-lg mt-1 text-justify'>Simple Navigations to Make it Easy for Users to find what they Are Looking for and also Ensuring The Designs are Not 
              Cluttered with Unnecessary Information that can Potentially Overwhelm Users.
            </h3>
          </div>
        </div>
        <div className='w-2/4 flex flex-row justify-center items-center'>
          <h1 className='flex items-center justify-center'><Star size={90} className='mr-7'/></h1>
          <div className='flex flex-row flex-wrap'>
            <h2 className='text-3xl font-bold mb-1 underline'>User Reviews and Ratings</h2>
            <h3 className='text-lg mt-1 text-justify'>Users can Like or Dislike, Review Recipes This will help Users to
              know the Quality of the Recipe before they try it out.
            </h3>
          </div>  
        </div>
      </div>
      <div className='w-11/12 flex flex-row justify-center items-center gap-x-20'>
        <div className='w-2/4 flex flex-row justify-center items-center'>
        <h1 className='flex items-center justify-center'><Blocks size={90} className='mr-7' /></h1>
        <div className='flex flex-row flex-wrap'>
            <h2 className='text-3xl font-bold mb-1 underline'>Informational Pages</h2>
            <h3 className='text-lg mt-1 text-justify'>Users can Explore Different Types of Cuisines and also get to know the History and Origin of the Cuisine. From Chinese to Ethiopian 
              Cuisines, Users can get a Glimpse of the Culinary World.
            </h3>
          </div>
        </div>
        <div className='w-2/4 flex flex-row justify-center items-center'>
        <h1 className='flex items-center justify-center'><FolderHeart size={90} className='mr-7' /></h1>
        <div className='flex flex-row flex-wrap'>
            <h2 className='text-3xl font-bold mb-1 underline'>Favorites</h2>
            <h3 className='text-lg mt-1 text-justify'>Let users save their favorite recipes and organize them into custom collections for easy access later.
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage