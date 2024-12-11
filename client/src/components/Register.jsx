import React from 'react'
import ReactDom from 'react-dom'

const Register = () => {
  const RegisterModal = (
    <div className='bg-black absolute inset-0 opacity-15 flex justify-center items-center z-10'>
      
    </div>
  )
  return ReactDom.createPortal(RegisterModal, document.getElementById('modal-root'))
}

export default Register
