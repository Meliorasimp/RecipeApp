import React from 'react';
import ReactQuill from 'react-quill';
import '../styles/appetizereditor.css';
import 'react-quill/dist/quill.snow.css';

const AppetizerEditor = () => {
    const [value, setValue] = React.useState('');

  return (
    <div className='flex justify-center items-center h-screen w-screen appetizer-main-background-color'>
        <ReactQuill theme="snow" value={value} onChange={setValue} className='w-5/6 text-black'/>
    </div>
  );
};

export default AppetizerEditor;
