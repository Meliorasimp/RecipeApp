import React from 'react'
import ReactDom from 'react-dom'
import '../styles/registerstyles.css'
import axios from 'axios'

const Register = ({onClose}) => {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    try {
        const response = axios.post('http://localhost:3000/user/register', {
          username: username,
          email: email,
          password: password
        })
    }
    catch (error) {
        console.error(error)
    }
  }

  const RegisterModal = (
    <div className='bg-black absolute inset-0 bg-opacity-10 flex justify-center items-center z-10'>
      <div className='flex flex-row w-3/5 h-96 justify-between items-center rounded-xl register-background-color'>
        <div className='flex justify-center items-center h-full w-2/5 flex-col pl-10 pr-10'>
          <h1 className='register-font-color text-3xl font-extrabold text-left'>Join Us!</h1>
          <h5 className='mt-5 register-font-color font-bold text-2xl'>Whip Up Wonders at Home: Discover, Share, and Savor!</h5>
        </div>
        <div className='register-second-background-color h-full w-3/5 rounded-xl flex justify-center items-center'>
          <div className='flex justify-center items-center'>
            <form className='flex flex-col'>
              <label htmlFor="username" className='text-xl'>Username</label>
              <input type="text"
                     id="username"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     className='rounded-xl p-1 w-96 bg-white border-2 mt-2 mb-2 text-black text-lg'
              />
              <label htmlFor="email" className='text-xl'>Email</label>
              <input type="text" 
                     id="email" 
                     value={email}
                     className='rounded-xl p-1 w-96 bg-white border-2 mt-2 mb-2 text-black text-lg'
                     onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password" className='text-xl'>Password</label>
              <input type="password" 
                     id='password'
                     value={password}
                     className='rounded-xl p-1 w-96 bg-white border-2 mt-2 mb-2 text-black text-lg'
                     onChange={(e) => setPassword(e.target.value)}
              />
              <div className='flex flex-row mt-5 justify-around'>
                <button className='px-6 py-1 rounded-xl hover:bg-green-400'>Register</button>
                <button className='px-6 py-1 rounded-xl hover:bg-red-400 hover:border-black' onClick={onClose}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
  return ReactDom.createPortal(RegisterModal, document.getElementById('modal-root'))
}

export default Register
