import React from 'react'
import axios from 'axios'
import '../styles/dashboardstyles.css';
import { Heart, HeartOff } from 'lucide-react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useLikeStore } from '../store/likestore';

const AllArticleViewer = () => {
    const { setLikes, setDislikes } = useLikeStore();
    const [articles, setArticles] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [articleId, setArticleId] = React.useState(localStorage.getItem('articleId'));
    const [comment, setComment] = React.useState('');
    const [userNameUrl, setUserNameUrl] = React.useState(localStorage.getItem('username'));
    const [userId, setUserId] = React.useState(localStorage.getItem('userId'));
    const navigate = useNavigate();

    const dateDisplay = (date) => {
        date = new Date(date);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-PH', options);
      }
    console.log('Article ID:', articleId);
    
    const handleLikeClick = async() => {
      try {
        const response = await axios.post('http://localhost:3000/likedislike/likearticle', {
          user: localStorage.getItem('userId'),
          articleId,
          type: 'like',
        });
        if(response.status === 200) {
          setLikes(response.data.totalLikes, articleId  );
          toast.success(response.data.message, {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });          
        }
      }
      catch (error) {
        console.log(error.message);
      }
    }
    const handleExitButton = () => {
      navigate(`/dashboard/${userNameUrl}`);
    }

    const handleDislikeClick = async () => {
      try {
        const response = await axios.post('http://localhost:3000/likedislike/dislikearticle', {
          user: 
          articleId,
          type: 'dislike',
        })
        if(response.status === 200) {
          setDislikes(response.data.totalDislikes, articleId);
          toast.success(response.data.message, {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
        }
      }
      catch(error) {
        console.log(error.message);
      }
    }

    const handleCommentSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const payload = {
          commenterId: userId,
          articleId: articleId,
          Content: comment,
        };
    
        const response = await axios.post('http://localhost:3000/comment/addComment', payload);
        if (response.status === 201) {
          console.log('Response:', response.data);
          setComment(''); 
          toast.success(response.data.message, {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } catch (error) {
        console.error('Error submitting comment:', error.message);
      }
    };
    
    React.useEffect(() => {
        const fetchAllArticles = async() => {
            const response = await axios.get(`http://localhost:3000/article/getArticleById/${articleId}`);
            if(response.status === 200) {
                setArticles(response.data);
                console.log('Response:', response.data);
            }
        }
        fetchAllArticles().finally(() => setLoading(false));
    }, []);
  return (
    <div className='flex relative flex-row '>
      <div className='w-9/12 pt-5 pl-6 flex flex-row'>
        {loading ? <h1>Loading...</h1> : (
            <div className='w-full h-full'>
                <h1 className='text-3xl font-bold mb-3'>{articles.title}</h1>
                <div className='flex flex-row justify-between w-1/2 mb-4'>
                    <h1 className='text-xl'>{articles.author.username}</h1>
                    <h1 className='text-xl'>{dateDisplay(articles.createdAt)}</h1>
                </div>
                <p dangerouslySetInnerHTML={articles && {__html: articles.body}} className='w-11/12 leading-loose text-justify'></p>
                <h1 className='sm:text-sm lg:text-xl mb-3 text-center'>Output Image</h1>
                <div className='w-96 h-96 mb-10 flex justify-center items-center m-auto'>
                    <img src={`http://localhost:3000${articles.image}`} alt="" className='h-full w-full object-cover rounded-md'/>
                </div>
                <div className='flex flex-row gap-x-5 w-full'>
                    <button className='bg-white px-6 py-1 text-black font-bold flex flex-row items-center rounded-sm hover:bg-black hover:text-white transition-all duration-200' onClick={handleLikeClick}>
                        <Heart size={20} className='mr-2' />Like
                    </button>
                    <button className='bg-white px-6 py-1 text-black font-bold flex flex-row items-center rounded-sm hover:bg-black hover:text-white transition-all duration-200' onClick={handleDislikeClick}>
                        <HeartOff size={20} className='mr-2' />Dislike
                    </button>
                </div>
                  <h1 className='text-xl mt-10 mb-4'>Leave a Comment:</h1>
                  <form onSubmit={handleCommentSubmit} className='flex flex-col w-full justify-center' >
                    <textarea 
                    name="" 
                    id=""
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className='w-1/2 h-40 pt-1 pl-1 pr-1 pb-1'
                    >
                    </textarea>
                    <button type='submit' className='mr-20 bg-green-500 w-1/2 mt-7 rounded-lg py-2 hover:bg-green-600'>Submit</button>
                  </form>
            </div>
        )}
      </div>
      <div className='w-3/13 h-full pt-3 pl-4 fixed flex flex-col lg:right-5 md:right-32'>
        <h1 className='text-xl text-center mb-4'>Comments</h1>
        <div className='lg:h-48 lg:w-80 md:h-10 md:w-10 relative'>
            <button className='absolute bottom-0 ml-2 mb-2'>Click Me</button>
            <button className='absolute bottom-0 right-0 mr-2 mb-2'>Click Me</button>
        </div>
        <h1 className='text-xl mt-10 underline'>Ingredients Needed</h1>
        <div dangerouslySetInnerHTML={articles && {__html: articles.ingredients}} className='mt-4'></div>
        <button className='absolute bottom-0 right-0 mb-5 mr-5 bg-red-400 px-5 py-1 rounded-sm' onClick={handleExitButton}>Exit</button>
      </div>
    </div>
  )
}

export default AllArticleViewer
