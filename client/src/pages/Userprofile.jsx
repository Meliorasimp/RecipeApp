import React from 'react';
import '../styles/dashboardstyles.css';
import axios from 'axios';  
import { Globe, Github, LinkedinIcon } from 'lucide-react';

const Userprofile = () => {
  const [image, setImage] = React.useState('');
  const [imagePreview, setImagePreview] = React.useState('');
  const [isImageUploaded, setIsImageUploaded] = React.useState(false);
  const [websiteurl, setWebsiteUrl] = React.useState('yourwebsite.com');
  const [githuburl, setGithubUrl] = React.useState('github.com/yourusername');
  const [linkedinurl, setLinkedinUrl] = React.useState('linkedin.com/yourusername');

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
  }

  return (
    <div className='flex justify-start items-center dashboard-background'>
      <div className='flex justify-evenly flex-col items-center h-screen w-3/12 rounded-xl dashboard-userprofile-background'>
        <img src={imagePreview || "https://www.freeiconspng.com/uploads/spices-food-recipes-png-15.png"} alt="UserProfileIcon" className='h-44 w-44 rounded-full border' />
        <input type="file" onChange={handleImageChange} className={`${isImageUploaded ? 'hidden' : ''}`} />
        <button onClick={handleImageUpload} className={`${isImageUploaded ? 'hidden' : ''}`} >Upload Image</button>
        <div className='flex flex-col gap-3 h-1/2 justify-center'>
          <div className='flex justify-center items-center'>
            <Globe size={28} color="black" /><h1 className='ml-3 text-xl text-black'>{websiteurl}</h1>
          </div>
          <div className='flex justify-center items-center'>
            <Github size={28} color='black'/><h1 className='ml-3 text-xl text-black'>{githuburl}</h1>
          </div>
          <div className='flex justify-center items-center'>
            <LinkedinIcon size={28} color='black'/><h1 className='ml-3 text-xl text-black'>{linkedinurl}</h1>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center h-screen w-11/12'>
        <h1 className='text-black'>Hello World</h1>
      </div>
    </div>
  );
};

export default Userprofile;
