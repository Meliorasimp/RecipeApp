import React, { useEffect } from 'react'
import '../styles/dashboardstyles.css';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const TextEditor = () => {
  const [value, setValue] = React.useState('');
  const title = localStorage.getItem('title');
  const category = localStorage.getItem('category');


  return (
    <div className='dashboard-main-test-background h-screen w-screen flex flex-col items-center justify-center'>
      <ReactQuill theme="snow" value={value} onChange={setValue}>
        
      </ReactQuill>
    </div>
  )
}

export default TextEditor
