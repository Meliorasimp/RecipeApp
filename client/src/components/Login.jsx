import React from 'react'
import '../styles/loginstyles.css'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <div>
      <div className='absolute inset-0 flex justify-center items-center z-10'>
        <div className='flex flex-row w-3/5 h-96 justify-between items-center rounded-xl register-background-color'>
          <div className='login-second-background-color h-full w-3/5 rounded-xl flex justify-center items-center'>
            <div className='flex justify-center items-center'>
              <form className='flex flex-col'>
                <label htmlFor="email" className='text-xl'>Email</label>
                <input type="email" 
                       id="email" 
                       value={email}
                       className='rounded-xl p-1 w-96 bg-white border-2 mt-2 mb-2 text-black text-lg'
                />
                <label htmlFor="password" className='text-xl'>Password</label>
                <input type="password" 
                       id='password'
                       value={password}
                        className='rounded-xl p-1 w-96 bg-white border-2 mt-2 mb-2 text-black text-lg'
                />
                <div className='flex flex-row mt-5 justify-around'>
                  <button className='px-6 py-1 rounded-xl bg-green-300 hover:bg-green-400'>Login</button>
                  <button className='px-6 py-1 rounded-xl bg-red-300 hover:bg-red-400 hover:border-black'>Cancel</button>
                </div>
              </form>
            </div>
          </div>
          <div className='flex justify-center items-center h-full w-2/5 flex-col pl-10 pr-10'>
            <h1>Welcome Back!</h1>
            <h5>Let's Get Cookin'</h5>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Login
