import React from 'react'
import '../styles/homepagestyles.css'
import Register from '../components/Register'
import Login from '../components/Login'

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
    <div className='homepage-background flex justify-center items-center'>
      <div className='mt-20 mb-48 relative pl-20'>
        <div>
          <p className='homepage-text-color homepage-first-text'>Create your own Recipe And</p>
        </div>
        <div>
          <p className='homepage-text-color homepage-second-text'>Let others know your culinary Magic!</p>
        </div>
        <p className='mb-10 homepage-text-color text-xl leading-relaxed mt-6 w-9/12 text-justify'>Share your unique Recipes and let the World taste your Creativity. 
        Whether you're a seasoned chef or a home cook, your culinary creations deserve to shine. Connect with fellow food enthusiasts and make your mark 
        in the Culinary community</p>
        <button className='hover:underline' onClick={handleRegister}>Start Cookin'! &rarr;</button>
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
  )
}

export default Homepage