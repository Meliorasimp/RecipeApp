import React from 'react';
import '../styles/dashboardstyles.css';
import axios from 'axios';  
import { User, LayoutDashboard, Star, Send, LogOut, ChefHat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Create from '../components/Create';  

const Userprofile = () => {
  const [image, setImage] = React.useState('');
  const [imagePreview, setImagePreview] = React.useState('');
  const [isImageUploaded, setIsImageUploaded] = React.useState(false);
  const [isCreateClicked, setIsCreateClicked] = React.useState(false);
  const [category, setCategory] = React.useState(null);
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);
    try {
      const response = await axios.post('http://localhost:3000/userprofile/createimage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setIsImageUploaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateClick = () => {
    setIsCreateClicked(!isCreateClicked);
  }

  const handleAppetizerClick = () => {
    setCategory('Appetizers');
    navigate('/appetizeredit');
  }

  return (
    <div className='flex justify-start items-center dashboard-body-background'>
      <div className='flex justify-start flex-col items-center h-screen w-2/12 rounded-xl dashboard-userprofile-background pt-16'>
      <div className='flex flex-col justify-center items-center'>
        <img src={imagePreview || "https://www.freeiconspng.com/uploads/spices-food-recipes-png-15.png"} alt="UserProfileIcon" className='h-32 w-32 rounded-full border' />
        <input type="file" onChange={handleImageChange} className={`${isImageUploaded ? 'hidden' : ''}`} />
        <button onClick={handleImageUpload} className={`${isImageUploaded ? 'hidden' : 'fixed'}`} >Upload Image</button>
        <h1 className='text-xl text-black font-bold mt-5'>{username}</h1>
        </div>
        <div className='mt-10 w-full flex flex-col justify-start'>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-row text-lg px-10 py-2 text-gray-600 cursor-pointer'><LayoutDashboard size={24} color='black' className='mr-4'/>Dashboard</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-row text-lg px-10 py-2 text-gray-600 cursor-pointer' onClick={handleCreateClick}><ChefHat size={24} color='black' className='mr-4'/>Create</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-row text-lg px-10 py-2 text-gray-600 cursor-pointer'><User size={24} color='black' className='mr-4'/>User Profile</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-row text-lg px-10 py-2 text-gray-600 cursor-pointer'><Star size={24} color='black' className='mr-4'/>Favorites</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-row text-lg px-10 py-2 text-gray-600 cursor-pointer'><Send size={24} color='black' className='mr-4'/>My Recipe</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-row text-lg px-10 py-2 text-gray-600 cursor-pointer'><LogOut size={24} color='black' className='mr-4'/>Logout</h1>
        </div>
      </div>
      {isCreateClicked && <Create 
      appetizerClick={handleAppetizerClick}
      />}
    </div>
  );
};

export default Userprofile;
