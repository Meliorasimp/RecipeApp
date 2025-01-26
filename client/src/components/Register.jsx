import React from 'react'
import ReactDom from 'react-dom'

import axios from 'axios'
import { useRegisterStore } from '../store/registerstore'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { motion } from 'framer-motion'
import 'react-toastify/dist/ReactToastify.css';

const Register = ({onClose, onLogin}) => {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState(null)
  const [login, setLogin] = React.useState(false)
  const { userdata, addUserData } = useRegisterStore()
  const navigate = useNavigate()

  const handleRegisterSubmit = async (e) => {
    e.preventDefault()
    try {
        const response = await axios.post('http://localhost:3000/user/register', {
          username: username,
          email: email,
          password: password
        })

        if(response.status === 201) {
          console.log('User registered')
          console.log(response.data);
          addUserData(response.data);
          toast.success('User registered successfully!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          navigate(`/dashboard/${username}`);
          onLogin()
        }
    }
    catch (error) {
        if(error.response && error.response.data) {
          toast.error(error.response.data.message, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log(error.response.data.message)
        }
        else {
          setError('Something went wrong. Please try again later.')
          console.log('Something went wrong. Please try again later.')
        }
    }
  }

  const handleLoginClick = () => {
    onClose()
    onLogin()
  }

  const RegisterModal = (
    <motion.div 
    initial={{opacity: 0, y: '-100vh'}}
    animate={{opacity: 1, y: '0vh'}}
    exit={{opacity: 0, y: '100vh'}}
    transition={{duration: 0.5}}
    className='absolute inset-0 flex justify-center items-center z-10'
    >
      <div className='absolute inset-0 flex justify-center items-center z-10'>
        <div className='flex flex-row w-3/5 h-96 justify-between items-center rounded-xl blur-background'>
          <div className='flex justify-center items-center h-full w-2/5 flex-col pl-10 pr-10'>
            <h1 className='text-3xl text-left'>Join Us!</h1>
            <h5 className='mt-5 text-2xl'>Whip Up Wonders at Home: Discover, Share, and Savor!</h5>
          </div>
          <div className='h-full w-3/5 rounded-xl flex justify-center items-center'>
            <div className='flex justify-center items-center'>
              <form className='flex flex-col' onSubmit={handleRegisterSubmit}>
                <label htmlFor="username" className='text-xl'>Username</label>
                <input type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className='rounded-xl p-1 w-96 bg-white border-2 mt-2 mb-2 text-black text-lg'
                />
                <label htmlFor="email" className='text-xl'>Email</label>
                <input type="email" 
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
                <p className='text-center'>Already have an Account? <a className='text-blue-400 cursor-pointer hover:border-b-2' onClick={handleLoginClick}>Login</a></p>
                <div className='flex flex-row mt-5 justify-around'>
                  <button className='px-6 py-1 rounded-xl hover:bg-green-400'>Register</button>
                  <button className='px-6 py-1 rounded-xl hover:bg-red-400 hover:border-black' onClick={onClose}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>  
    </motion.div>
  )
  return ReactDom.createPortal(RegisterModal, document.getElementById('modal-root'))
}

export default Register
