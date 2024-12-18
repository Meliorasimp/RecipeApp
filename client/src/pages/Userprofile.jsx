import React from 'react';
import '../styles/dashboardstyles.css';
import axios from 'axios';  
import { User, LayoutDashboard, Star, Send, LogOut, ChefHat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Userprofile = () => {
  const [image, setImage] = React.useState('');
  const [imagePreview, setImagePreview] = React.useState('');
  const [isImageUploaded, setIsImageUploaded] = React.useState(false);
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

  const handleAppetizerClick = () => {
    navigate(`/appetizeredit`);
  }

  const handleMainCourseClick = () => {
    navigate(`/dashboard/${username}/maincourseedit`);
  }

  const handleSideDishClick = () => {
    navigate(`/dashboard/${username}/sidedishedit`);
  }

  const handleDessertClick = () => {
    navigate(`/dashboard/${username}/dessertedit`);
  }

  const handleBeverageClick = () => {
    navigate(`/dashboard/${username}/beverageedit`);
  }

  const handleSnackClick = () => {
    navigate(`/dashboard/${username}/snackedit`);
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
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-row text-lg px-10 py-2 text-gray-600 cursor-pointer'><User size={24} color='black' className='mr-4'/>User Profile</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-row text-lg px-10 py-2 text-gray-600 cursor-pointer'><Star size={24} color='black' className='mr-4'/>Favorites</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-row text-lg px-10 py-2 text-gray-600 cursor-pointer'><Send size={24} color='black' className='mr-4'/>My Recipe</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-row text-lg px-10 py-2 text-gray-600 cursor-pointer'><LogOut size={24} color='black' className='mr-4'/>Logout</h1>
        </div>
      </div>
      <div className='flex justify-start items-start flex-col h-screen w-11/12 gap-12'>
        <div className='ml-4 w-full h-12 text-gray-600 flex-col items-center gap-2 pt-16'>
          <h1 className='text-3xl font-bold flex items-center'>Select a Recipe Category to Create.<ChefHat size={36} className='ml-3'/></h1>
        </div>
        <div className='ml-4 w-11/12 h-5/6 grid grid-cols-3 grid-rows-2 gap-4'>
          <div className='col-start-1 col-span-1 row-start-1 row-span-1 bg-red-400 rounded-md dashboard-card-background text-gray-600 font-light text-xl pt-2 pl-2 flex flex-col items-left scale-animation cursor-pointer shadow-xl' onClick={handleAppetizerClick}>
            <h1 className='text-left mb-3'>Appetizers</h1>
            <img src="https://tinyurl.com/34hw6w46" alt="Appetite for your Might" className='h-5/6 w-full rounded-lg'/>
          </div>
          <div className='col-start-2 col-span-1 row-start-1 row-span-1 bg-red-400 rounded-md dashboard-card-background text-gray-600 font-light text-xl pt-2 pl-2 shadow-xl scale-animation cursor-pointer' onClick={handleMainCourseClick}>
            <h1 className='text-left mb-3'>Main Courses</h1>
            <img src="https://tinyurl.com/yrdt654w" alt="Main Dishes" className='h-5/6 w-full rounded-lg'/>
          </div>
          <div className='col-start-3 col-span-1 row-start-1 row-span-1 bg-red-400 rounded-md dashboard-card-background text-gray-600 font-light text-xl pt-2 pl-2 shadow-xl scale-animation cursor-pointer' onClick={handleSideDishClick}>
            <h1 className='text-left mb-3'>Side Dishes</h1>
            <img src="https://tinyurl.com/358mwh7d" alt="Side Dishes" className='h-5/6 w-full rounded-lg'/>
          </div>
          <div className='col-start-1 col-span-1 row-start-2 row-span-1 bg-red-400 rounded-md dashboard-card-background text-gray-600 font-light text-xl pt-2 pl-2 shadow-xl scale-animation cursor-pointer' onClick={handleDessertClick}>
            <h1 className='text-left mb-3'>Desserts</h1>
            <img src="https://tinyurl.com/2aasemvf" alt="Desserts" className='h-5/6 w-full rounded-lg'/>
          </div>
          <div className='col-start-2 col-span-1 row-start-2 row-span-1 bg-red-400 rounded-md dashboard-card-background text-gray-600 font-light text-xl pt-2 pl-2 shadow-xl scale-animation cursor-pointer' onClick={handleBeverageClick}>
            <h1 className='text-left mb-3'>Beverages</h1>
            <img src="https://tinyurl.com/m4s99p83" alt="Beverages" className='h-5/6 w-full rounded-lg'/>
          </div>
          <div className='col-start-3 col-span-1 row-start-2 row-span-1 bg-red-400 rounded-md dashboard-card-background text-gray-600 font-light text-xl pt-2 pl-2 shadow-xl scale-animation cursor-pointer' onClick={handleSnackClick}>
            <h1 className='text-left mb-3'>Snacks</h1>
            <img src="https://tinyurl.com/9ja5sywm" alt="Snacks" className='h-5/6 w-full rounded-lg'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
