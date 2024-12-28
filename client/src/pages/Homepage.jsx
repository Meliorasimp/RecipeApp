import React from 'react'
import '../styles/homepagestyles.css'
import Register from '../components/Register'
import Login from '../components/Login'

const Homepage = () => {
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
        <h1 className='homepage-text-color font-bold text-4xl mb-3'>Create your own Recipe</h1>
        <h1 className='homepage-text-color font-bold text-4xl mb-10'>Let others know your culinary Magic!</h1>
      </div>
      {showRegister && <Register 
      onClose={handleRegister}
      onLogin={handleLogin}
      />}
      {showLogin && <Login 
      onLogin={handleLogin}
      />}
      <button className='homepage-button-color mt-5 w-96 rounded-xl p-3 absolute top-80' onClick={handleRegister}>Start Cookin'!</button>
    </div>
  )
}

export default Homepage