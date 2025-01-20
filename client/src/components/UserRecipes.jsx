import React, { useEffect } from 'react'
import '../styles/dashboardstyles.css'
import axios from 'axios';
import { TruncateText } from '../service/MainService';
import { Heart, HeartOff, MessageCircle, FileHeart } from 'lucide-react';
const UserRecipes = () => {
  const [allArticles, setAllArticles] = React.useState(null);
  const [articleId, setArticleId] = React.useState('');
  const userId = localStorage.getItem('userId');

  const handleViewArticle = (id) => {
    setArticleId(id);
    console.log('Article ID:', id);
  };

  const fetchAllArticlesExceptUser = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/article/viewarticles`);
      if (response.status === 200) {
        const articles = response.data.filter(article => article.author._id !== id);
        setAllArticles(articles);
        console.log('Articles:', articles);
      }
    }
    catch(error) {
      console.error('Error:', error.message);
    }
  }
  const dateToday = (date) => {
    const newDate = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return newDate.toLocaleDateString('en-PH', options);
  }
  useEffect(() => {
    if (!allArticles) { 
      fetchAllArticlesExceptUser(userId); 
    }
  }, []);
  return (
    <div className='dashboard-main-background h-auto w-full overflow-y-auto'>
    <div className='flex flex-wrap gap-5 mr-5 justify-center mt-7'>
      {allArticles && allArticles.map((article) => (
        <div key={article._id} className='bg-black h-96 w-96 rounded-sm dashboard-second-background'>
          <div className='h-1/2 w-full'>
            <img src={`http://localhost:3000${article.image}`} alt="Article image" className='w-full h-full object-cover rounded-sm'/>
          </div>
          <h1 className='mt-2 ml-2 mb-2 text-xl font-bold'><a className='text-blue-400 hover:underline cursor-pointer' onClick={() => handleViewArticle(article._id)}>{article.title}</a></h1>
          <h2 className='mt-2 ml-2 mb-2'> <span className='mr-2'>{article.author.username}</span> {dateToday(article.createdAt)}</h2>
          <p className='ml-2 mt-2 mb-2 mr-2 text-sm leading-relaxed'>{TruncateText(article.introduction, 30)}</p>
          <div className='border-t-2 border-white flex justify-between pl-7 items-center relative min-h-16 dashboard-second-background mt-0'> 
            <div className='flex flex-row gap-5'>
              <div className='flex flex-row items-center text-xl'><Heart className='text-blue-400 mr-2 cursor-pointer' />0</div>
              <div className='flex flex-row items-center text-xl'><HeartOff className='text-blue-400 mr-2 cursor-pointer' />0</div>
              <div className='flex flex-row items-center text-xl'><MessageCircle className='text-blue-400 mr-2 cursor-pointer' />0</div>
            </div>
            <div className='flex flex-row pr-7'>
              <div><FileHeart className='text-blue-400 cursor-pointer'/></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default UserRecipes
