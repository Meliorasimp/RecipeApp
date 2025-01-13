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
    <div className='homepage-background flex justify-center items-center overflow-auto'>
      <div className='flex justify-center items-center mb-48 flex-col overflow-auto relative'>
        <div className='inline-block'>
          <p className='homepage-text-color homepage-first-text'>Create your own Recipe And</p>
        </div>
        <div className='inline-block'>
          <p className='homepage-text-color homepage-second-text'>Let others know your culinary Magic!</p>
        </div>
        <p className='mb-10'></p>
      </div>
      {showRegister && <Register 
      onClose={handleRegister}
      onLogin={handleLogin}
      />}
      {showLogin && <Login 
      onLogin={handleLogin}
      hasUserLoggedIn={hasUserLoggedIn}
      />}
      <button className='homepage-button-color mt-5 w-96 rounded-xl p-3 absolute font-bold top-80 text-2xl' onClick={handleRegister}>Start Cookin'!</button>
    </div>
  )
}

export default Homepage