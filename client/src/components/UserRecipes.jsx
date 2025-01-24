import React, { useState } from 'react'
import '../styles/dashboardstyles.css'
import axios from 'axios';
import { TruncateText } from '../service/MainService';
import { Heart, HeartOff, MessageCircle, FileHeart } from 'lucide-react';
import { useLikeStore } from '../store/likestore';
import { useNavigate } from 'react-router-dom';

const usernameurl = localStorage.getItem('username');
const UserRecipes = ({handleArticleId}) => {
    const loadFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : {};
  }

  const [allArticles, setAllArticles] = React.useState();
  const [totalLikes, setTotalLikes] = React.useState(() => loadFromLocalStorage('totalLikes'));
  const [totalDislikes, setTotalDislikes] = useState(() => loadFromLocalStorage('totalDislikes'));
  const [like, setLike] = React.useState('like');
  const [userId, setUserId] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

    const liketypes = {
      like: 'like',
      dislike: 'dislike', 
    }

    const saveToLocalStorage = (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    }

    const handleNavigateToArticle = (id) => {
      navigate(`/dashboard/${usernameurl}/${id}`);
    }

    //Function to format the Current Date from the Database to a more Readable Format
    const dateToday = (date) => {
      const newDate = new Date(date);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return newDate.toLocaleDateString('en-PH', options);
    }

    //The function handles the like click event by updating the previous state of a specific articleID to the New state.
    const handleLikeClick = async (articleId, userId, type) => {
        try {
          const response = await axios.post('http://localhost:3000/likedislike/likearticle', {
            user: userId,
            articleId,
            type,
          });
          if(response.status === 200) {
            console.log('Response:', response.data);
            setTotalLikes(previousState => {
                const updatedLikes = { ...previousState, [articleId]: response.data.totalLikes };
                 //Save the updated likes to Reflect the new state of the article even when User Refreshes the page then return the value
                saveToLocalStorage('totalLikes', updatedLikes);
                return updatedLikes;
            })
            
          }
      }
      catch(error) {
        console.error('Error:', error.message);
      }
  }

  //The function handles the dislike click event by updating the previous state of a specific articleID to the New state.
  const handleDislikeClick = async (articleId, userId, type) => {
    try {
      const response = await axios.post('http://localhost:3000/likedislike/dislikearticle', {
        user: userId,
        articleId,
        type,
      });
      if(response.status === 200) {
        setTotalDislikes(previousState => {
          const updatedDislikes = { ...previousState, [articleId]: response.data.totalDislikes };
          //Save the updated dislikes to Reflect the new state of the article even when User Refreshes the page then return the value.
          saveToLocalStorage('totalDislikes', updatedDislikes);
          return updatedDislikes;
        })
      }
    }
    catch(error) {
      console.error('Error:', error.message);
    }
  }


  React.useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    loadFromLocalStorage('totalLikes');
    setUserId(storedUserId);

    //Function to get all Articles Except the Logged in User
    const fetchAllArticlesExceptUser = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3000/article/viewarticles`);
        if (response.status === 200) {
          const articles = response.data.filter(article => article.author._id !== id);
          setAllArticles(articles);
        }
      }
      catch(error) {
        console.error('Error:', error.message);
      }
    }

    //It will only Run if there is a Logged in User
    if (storedUserId) {
      fetchAllArticlesExceptUser(storedUserId).finally(() => setLoading(false));
    }
  }, []);
  if(loading) {
    return <h1 className='flex justify-center items-center h-full text-2xl w-screen dashboard-main-background'>Fetching Data from the Backend... </h1>
  }
  return (
    <div className='dashboard-main-background h-auto w-full overflow-y-auto'>
    <div className='flex justify-between items-center'>
      <div>
        <h1 className='text-3xl font-bold mt-5 ml-5'>All Recipes</h1>
      </div>
      <div>
        <input type="text"
        className='w-96 h-10 mt-5 ml-5 text-black font-bold text-xl border-2 border-black bg-white rounded-md'
        placeholder='Search for Recipes'
         />
      </div>
      <div className='pr-10 flex items-center justify-center text-lg'>
        <select name="filter" id="filter" className='py-1 flex items-center justify-center'>
        <option value="Recently-published">Recently Published</option>
          <option value="Most-Liked">Most Liked</option>
          <option value="Most-Commented">Most Commented</option>
        </select>
      </div>
    </div>
    <div className='flex flex-wrap gap-5 mr-5 justify-center items-center mt-10 h-auto'>
      {allArticles && allArticles.map((article) => (
        <div key={article._id} className='h-96 w-96 rounded-sm dashboard-second-background allArticles-cards'>
          <div className='h-1/2 w-full'>
            <img src={`http://localhost:3000${article.image}`} alt="Article image" className='w-full h-full object-cover rounded-sm'/>
          </div>
          <h1 className='mt-2 ml-2 mb-2 text-xl font-bold'><a className='text-blue-400 hover:underline cursor-pointer' onClick={ () => {
            handleArticleId(article._id);
            handleNavigateToArticle(article._id);
            localStorage.setItem('articleId', article._id);
          }}>{article.title}</a></h1>
          <h2 className='mt-2 ml-2 mb-2'> <span className='mr-2'>{article.author.username}</span> {dateToday(article.createdAt)}</h2>
          <p className='ml-2 mt-2 mb-2 mr-2 text-sm leading-relaxed'>{TruncateText(article.introduction, 15)}</p>
          <div className='border-t-2 border-white flex justify-between pl-7 items-center relative min-h-16 dashboard-second-background mt-0'> 
            <div className='flex flex-row gap-5'>
              <div className='flex flex-row items-center text-xl'><Heart className='text-blue-400 mr-2 cursor-pointer' /></div>
              <div className='flex flex-row items-center text-xl'><HeartOff className='text-blue-400 mr-2 cursor-pointer' /></div>
              <div className='flex flex-row items-center text-xl'><MessageCircle className='text-blue-400 mr-2 cursor-pointer'/></div>
            </div>
            <div className='flex flex-row pr-7'>
              <div><FileHeart className='text-blue-400 cursor-pointer' /></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default UserRecipes
