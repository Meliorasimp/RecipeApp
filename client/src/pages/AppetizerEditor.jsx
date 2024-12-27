import { useState } from 'react';
import ReactQuill from 'react-quill';
import '../styles/appetizereditor.css';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AppetizerEditor = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [outputImage, setOutputImage] = useState(null);
  const navigate = useNavigate();

  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const today = date.toLocaleDateString('en-PH', options);
  const category = localStorage.getItem('category');
  const author = localStorage.getItem('user'); 
  const username = localStorage.getItem('username');

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setOutputImage(imageFile);
  };

  const handleNavigate = () => {
    navigate(`/dashboard/${username}`);
  };

  const handleSubmitArticle = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    formData.append('category', category);
    formData.append('image', outputImage);
    formData.append('createdAt', today);
    formData.append('author', author);

    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      const response = await axios.post('http://localhost:3000/article/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        toast.success('Article created successfully!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setTitle('');
        setBody('');
        setOutputImage(null);
        handleNavigate();

      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message);
      } else {
        console.log('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div className='appetizer-main-background-color h-screen overflow-y-auto'>
      <div className='flex justify-center items-center min-h-screen'>
        <div className='w-5/6 mt-10'>
          <form className='grid grid-cols-4 grid-rows-5 gap-2' onSubmit={handleSubmitArticle}>
            <div className='col-start-1 col-span-2 row-start-1 row-span-1 mb-5'>
              <h1 className='text-black text-2xl font-bold mb-5'>Recipe Title</h1>
              <input
                type="text"
                className='border border-t-0 border-l-0 border-r-0 text-black bg-gray-100 border-b-2 border-black focus:bg-gray-300 w-96 h-10 text-3xl font-serif'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className='col-start-1 col-span-4 row-start-2 row-span-4'>
              <div className='flex flex-row items-center gap-5'>
                <h1 className='text-black text-2xl font-bold mb-5'>Recipe Creation</h1>
                <button type='submit' className='text-black bg-green-500 mb-5 px-4 py-1 rounded-sm hover:bg-green-600'>Publish</button>
                <button type='button' className='text-black bg-red-500 mb-5 px-4 py-1 rounded-sm hover:bg-red-600'>Cancel</button>
              </div>
              <ReactQuill theme="snow" value={body} onChange={setBody} className='text-black h-64' />
            </div>
            <div className='col-start-3 col-span-1'>
              <h1 className='text-black text-2xl font-bold'>Output Image</h1>
              <input type="file" className='text-black' onChange={handleImageChange}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppetizerEditor;
