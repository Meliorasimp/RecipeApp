import React from 'react';
import '../styles/dashboardstyles.css';
import axios from 'axios';  
import { LayoutDashboard, Star, Send, LogOut, ChefHat, View } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Create from '../components/Create';  
import Dashboard from '../components/Dashboard';
import Favorites from '../components/Favorites';
import MyRecipes from '../components/MyRecipes';
import UserRecipes from '../components/UserRecipes';
import '../styles/homepagestyles.css'

const Userprofile = ({handleHomePage, hasUserLoggedOut}) => {
  const [image, setImage] = React.useState('');
  const [imagePreview, setImagePreview] = React.useState('');
  const [isImageUploaded, setIsImageUploaded] = React.useState(false);
  const [isCreateClicked, setIsCreateClicked] = React.useState(false);
  const [isDashboardClicked, setIsDashboardClicked] = React.useState(true);
  const [isFavoritesClicked, setIsFavoritesClicked] = React.useState(false);
  const [isMyRecipesClicked, setIsMyRecipesClicked] = React.useState(false);
  const [isUserRecipesClicked, setIsUserRecipesClicked] = React.useState(false);
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
    setIsFavoritesClicked(false);
    setIsUserRecipesClicked(false);
    setIsMyRecipesClicked(false);
    setIsCreateClicked(true);
  }

  const handleDashboardClick = () => {
    setIsCreateClicked(false);
    setIsMyRecipesClicked(false);
    setIsFavoritesClicked(false);
    setIsUserRecipesClicked(false);
    setIsDashboardClicked(true);
  }

  const handleFavoritesClick = () => {
    setIsCreateClicked(false);
    setIsDashboardClicked(false);
    setIsMyRecipesClicked(false);
    setIsUserRecipesClicked(false);
    setIsFavoritesClicked(true);
  }

  const handleMyRecipesClick = () => {
    setIsCreateClicked(false);
    setIsDashboardClicked(false);
    setIsFavoritesClicked(false);
    setIsUserRecipesClicked(false);
    setIsMyRecipesClicked(true);
  }

  const handleUserRecipesClick = () => {
    setIsCreateClicked(false);
    setIsDashboardClicked(false);
    setIsFavoritesClicked(false);
    setIsMyRecipesClicked(false);
    setIsUserRecipesClicked(true);
  }

  return (
    <div className='flex justify-between'>
      <div className='flex justify-start flex-col items-start h-screen w-32'>
        <div className='mt-5 w-full flex flex-col justify-start gap-2'>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-col items-center justify-center text-sm px-10 py-2 font-bold text-white cursor-pointer' onClick={handleDashboardClick}><LayoutDashboard size={32} color='white'/>Dashboard</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-col items-center justify-center text-sm px-10 py-2 font-bold text-white cursor-pointer' onClick={handleCreateClick}><ChefHat size={28} color='white'/>Create</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-col items-center justify-center text-sm px-10 py-2 font-bold text-white cursor-pointer' onClick={handleFavoritesClick}><Star size={28} color='white'/>Favorites</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-col items-center justify-center text-sm px-10 py-2 font-bold text-white cursor-pointer' onClick={handleMyRecipesClick}><Send size={28} color='white'/>My Recipe</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-col items-center justify-center text-sm px-10 py-2 font-bold text-white cursor-pointer' onClick={handleUserRecipesClick}><View size={28} color='white'/>View</h1>
          <h1 className='hover:bg-gray-400 hover:text-gray-800 flex flex-col items-center justify-center text-sm px-10 py-2 font-bold text-white cursor-pointer'><LogOut size={24} color='white' className='mr-4' onClick={hasUserLoggedOut}/>Logout q</h1>
        </div>
      </div>
      {isCreateClicked && <Create onCancel={handleDashboardClick} />}
      {isDashboardClicked && <Dashboard />}
      {isFavoritesClicked && <Favorites />}
      {isMyRecipesClicked && <MyRecipes />}
      {isUserRecipesClicked && <UserRecipes />}
    </div>
  );
};

export default Userprofile;
