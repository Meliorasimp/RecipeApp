import React, { useEffect, useRef, useState } from 'react';
import '../styles/dashboardstyles.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const TextEditor = () => {
  const [value, setValue] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState('');
  const title = localStorage.getItem('title');
  const category = localStorage.getItem('category');
  const userId = localStorage.getItem('userId');

  const articleRef = useRef(null);
  const ingredientsRef = useRef(null);

  const handleUploadImage = (e) => {
    const files = e.target.files[0];
    if (files) {
      console.log(files);
      setImage(files);
    }
  }

  const handleArticleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('title', title);
    formdata.append('body', value);
    formdata.append('category', category);
    formdata.append('image', image);
    formdata.append('ingredients', ingredients);
    formdata.append('createdAt', new Date());
    formdata.append('author', userId);

    try {
        const response = await axios.post('http://localhost:3000/article/create', formdata ,{
            headers: {
              'Content-Type': 'multipart/form-data',
            }
        });

        if(response.status === 201) {
          console.log('Article created');
          localStorage.removeItem('title');
          localStorage.removeItem('category');
          setValue('');
          setImage('');
          setIngredients('');
        }
    }
    catch (error) {
      console.log(error.messsage);
    }
  }

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  const secondModules = { 
    toolbar: [ 
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }] 
    ] 
  };

  function printData() {
    console.log(title);
    console.log(category);
    console.log(userId);
  }

  useEffect(() => {
    if (articleRef.current) {
      articleRef.current.focus();
    }
    printData();
  }, []);

  return (
    <div className='dashboard-main-test-background h-screen w-full flex flex-row justify-around overflow-hidden'>
      <form className='w-full h-full flex flex-row justify-between items-center' onSubmit={handleArticleSubmit}>
        <div className='w-2/3 h-5/6 flex flex-col justify-between items-between'>
        <h1 className='text-3xl ml-10 mb-10'>Article Body</h1>
        <ReactQuill
          ref={articleRef}
          theme="snow"
          value={value}
          onChange={setValue}
          className='h-full'
          modules={modules}
        />
        
        </div>
        <div className='w-1/3 h-full flex flex-col justify-center items-center relative'>
        <h1 className='text-2xl mb-10 w-full text-left ml-40'>Ingredients Needed</h1>
        <ReactQuill
          ref={ingredientsRef}
          theme="snow"
          value={ingredients}
          onChange={setIngredients}
          className='h-1/3 w-2/3 '
          modules={secondModules}
          />
          <div className='mt-20 text-2xl text-left w-full ml-40'>
          <h1>Upload Output Image</h1>
          <input type="file" name='image' onChange={handleUploadImage}  />
          {image && <img src={image} alt='output' className='w-1/2 h-1/2' />}
          </div>
          <div className='mt-10 -mb-14 flex justify-around w-full'>
            <button className='bg-red-900 px-10 py-2 rounded-md hover:bg-red-500 transition-all duration-200'>Cancel</button>
            <button className='bg-green-900 px-10 py-2 rounded-md hover:bg-green-500 transition-all duration-200'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TextEditor;
