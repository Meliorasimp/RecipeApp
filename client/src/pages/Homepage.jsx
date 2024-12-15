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
      <div className='flex justify-center items-center mb-48 flex-col overflow-auto'>
        <h1 className='homepage-text-color font-extrabold text-4xl mb-5'>Savor the Taste!</h1>
        <p className='w-96 text-left homepage-text-color font-bold'>Welcome to your ultimate culinary companion, where delicious recipes meet easy-to-follow instructions, inspiring you to create mouthwatering dishes right in your own kitchen Proudly made by other Chefs!</p>
        <button className='homepage-button-color mt-5 w-96 rounded-xl p-2' onClick={handleRegister}>Start Cookin'!</button>
        <img className="absolute left-0 bottom-0" src="https://www.freeiconspng.com/uploads/spices-food-recipes-png-15.png" width="400" alt="spices, food, recipes png" />
        <img className="absolute bottom-0" src="https://www.freeiconspng.com/uploads/indian-spices-png-8.png" width="250" alt="cbeck blends spices png" />
        <img className="absolute bottom-0 left-1/4" src="https://www.freeiconspng.com/uploads/flavors-herbs-and-spices-png-10.png" width="250" alt="flavors herbs and spices png" />
        <img className="absolute bottom-0 right-0" src="https://www.freeiconspng.com/uploads/cuisine-food-png-8.png" width="350" alt="CUISINE food png" />
        <img className="absolute bottom-8 right-1/4" src="https://www.freeiconspng.com/uploads/restaurant-food-dish-png-10.png" width="250" alt="Restaurant Food Dish Png" />
      </div>
      {showRegister && <Register 
      onClose={handleRegister}
      onLogin={handleLogin}
      />}
      {showLogin && <Login 
      onLogin={handleLogin}
      />}
    </div>
  )
}

export default Homepage