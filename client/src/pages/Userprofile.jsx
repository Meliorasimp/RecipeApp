import React from 'react';
import '../styles/dashboardstyles.css';
import axios from 'axios';  
import { User, LayoutDashboard, Star, Send, LogOut, ChefHat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Create from '../components/Create';  
import Dashboard from '../components/Dashboard';
import Favorites from '../components/Favorites';
import MyRecipes from '../components/MyRecipes';

const Userprofile = () => {
  const [image, setImage] = React.useState('');
  const [imagePreview, setImagePreview] = React.useState('');
  const [isImageUploaded, setIsImageUploaded] = React.useState(false);
  const [isCreateClicked, setIsCreateClicked] = React.useState(false);
  const [isDashboardClicked, setIsDashboardClicked] = React.useState(true);
  const [isFavoritesClicked, setIsFavoritesClicked] = React.useState(false);
  const [isMyRecipesClicked, setIsMyRecipesClicked] = React.useState(false);
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
    setIsDashboardClicked(false);
    setIsDashboardClicked(false);
    setIsMyRecipesClicked(false);
    setIsCreateClicked(true);
  }

  const handleDashboardClick = () => {
    setIsCreateClicked(false);
    setIsMyRecipesClicked(false);
    setIsFavoritesClicked(false);
    setIsDashboardClicked(true);
  }

  const handleFavoritesClick = () => {
    setIsCreateClicked(false);
    setIsDashboardClicked(false);
    setIsMyRecipesClicked(false);
    setIsFavoritesClicked(true);
  }

  const handleMyRecipesClick = () => {
    setIsCreateClicked(false);
    setIsDashboardClicked(false);
    setIsFavoritesClicked(false);
    setIsMyRecipesClicked(true);
  }

  const handleAppetizerClick = () => {
    setCategory('Appetizers');
    navigate('/appetizeredit');
  }


  return (
    <div className='flex justify-start items-center dashboard-body-background'>
      <div className='flex justify-start flex-col items-start h-screen w-32 rounded-xl dashboard-userprofile-background pt-5'>
        <div className='mt-10 w-full flex flex-col justify-start'>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-col items-center justify-center text-sm px-10 py-2 font-bold text-gray-600 cursor-pointer' onClick={handleDashboardClick}><LayoutDashboard size={32} color='black'/>Dashboard</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-col items-center justify-center text-sm px-10 py-2 font-bold text-gray-600 cursor-pointer' onClick={handleCreateClick}><ChefHat size={28} color='black'/>Create</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-col items-center justify-center text-sm px-10 py-2 font-bold text-gray-600 cursor-pointer' onClick={handleFavoritesClick}><Star size={28} color='black'/>Favorites</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-col items-center justify-center text-sm px-10 py-2 font-bold text-gray-600 cursor-pointer' onClick={handleMyRecipesClick}><Send size={28} color='black'/>My Recipe</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-col items-center justify-center text-sm px-10 py-2 font-bold text-gray-600 cursor-pointer'><LogOut size={24} color='black' className='mr-4'/>Logout q</h1>
        </div>
      </div>
      {isCreateClicked && <Create 
      appetizerClick={handleAppetizerClick}
      />}
      {isDashboardClicked && <Dashboard />}
      {isFavoritesClicked && <Favorites />}
      {isMyRecipesClicked && <MyRecipes />}
    </div>
  );
};

export default Userprofile;
