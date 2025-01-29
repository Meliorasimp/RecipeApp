import React, { useEffect } from 'react'
import axios from 'axios'
import { Heart, HeartOff, MessageSquareWarning } from 'lucide-react'
import { TruncateText } from '../service/MainService'

const ArticleViewer = ({articleUrl}) => {
  const [article, setArticle] =  React.useState(null);
  const [moreArticles, setMoreArticles] = React.useState([5]);
  const [loading, setLoading] = React.useState(true);
  const [currentArticleIndex, setCurrentArticleIndex] = React.useState(0);
  const [currentCommentIndex, setCurrentCommentIndex] = React.useState(0);
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);
  const [cache, setCache] = React.useState({});
  const [comment, setComment] = React.useState('');
  const [commentData, setCommentData] = React.useState([5]);
  const [userId, setUserId] = React.useState(localStorage.getItem('userId'));
  const itemsToShow = 1;
  const arraysToShow = moreArticles.slice(currentArticleIndex, currentArticleIndex + itemsToShow);
  const commentsToShow = 1;
  const commentsArray = commentData.slice(currentCommentIndex, currentCommentIndex + commentsToShow);

  const dateDisplay = (date) => {
    date = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-PH', options);
  }

  const handleCommentSubmit = async (e, id, articleUrl) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/comment/addComment`, {
        Content: comment,
        CommenterId: id,
        ArticleId: articleUrl
      });
      if(response.status === 201) {
        setComment('');
      }
    }
    catch(error) {
      console.error('Error:', error.message);
    }
  } 

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/article/getArticleById/${articleUrl}`);
        if(response.status === 200) {
          setArticle(response.data);
          cache[articleUrl] = response.data;
          setLoading(false);
        }
      }
      catch(error) {
        console.error('Error:', error.message);
      }
    }
    
    const getAllArticlesExceptUser = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3000/article/getAllArticleExceptUser/${id}`);
        if(response.status === 200) {
          setMoreArticles(response.data);
          setLoading(false);
        }
      }
      catch(error) {
        console.error('Error:', error.message);
      }
    }
    
    const getCommentsOnArticle = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3000/comment/getCommentsOnArticle/${id}`);
        if(response.status === 200) {
          setCommentData(response.data);
          console.log('Comment Data:', response.data);
        }
      }
      catch(error) {
        console.error('Error:', error.message);
      }
    }
    
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([
        getArticle(),
        getAllArticlesExceptUser(userId),
        getCommentsOnArticle(articleUrl)
      ]);
      setIsDataLoaded(true);
    };
  
    fetchData();
  }, [article]);
  

  if (!isDataLoaded) { 
    return <h1>Data is not loaded yet</h1>; 
  }
  return (
    <div className='flex dashboard-second-background pl-6 box-border relative flex-row'>
      <div className='w-9/12 border-l-slate-200 border-r-2 article-viewer-size pt-6 '>
        <h1 className='text-3xl font-bold mb-3'>{article && article.title}</h1>
        <p className='text-xl mb-3'>{article && article.author.username} | {article && dateDisplay(article.createdAt)} | <span className='font-bold'>{article && article.category}</span></p>
        <div className='flex flex-row gap-x-48 items-center'>
          <p className='text-lg mb-3'>Likes: 0</p>
          <p className='text-lg mb-2'>Dislikes: 0</p>
        </div>
        <div className='flex flex-row gap-x-6 w-full pb-2'>
          <button className='flex items-center article-viewer-button py-1 px-3 white rounded-sm hover:text-black hover:bg-white transition-all duration-200'>Like<Heart size={20} className='ml-1'/></button>
          <button className='flex items-center article-viewer-button py-1 px-3 white rounded-sm hover:text-black hover:bg-white transition-all duration-200'>Dislike<HeartOff size={20} className='ml-1' /></button>
          <button className='flex items-center article-viewer-button py-1 px-3 white rounded-sm hover:text-black hover:bg-white transition-all duration-200'>Ingredients Needed<MessageSquareWarning size={20} className='ml-1' /></button>
        </div>
        <div dangerouslySetInnerHTML={article && {__html: article.body}} className='mt-6 text-justify mr-6 leading-loose text-lg'></div>
        <div dangerouslySetInnerHTML={article && {__html: article.ingredients}}></div>
        <h1 className='text-center mt-2 mb-2 text-xl font-bold'>The Output of the Recipe Should Look Like this</h1>
        {article && article.image ? ( 
          <div className='w-1/2 h-96 flex justify-center items-center m-auto'>
            <img src={`http://localhost:3000/uploads/1737107006507-devplaceholder.jpg`} alt="Article" className='object-cover h-full w-full rounded-lg' />
          </div> 
          ) 
          : ( <div>No image available</div> )
          }
      </div>
      <div className='overflow-y-auto fixed w-80 left-3/4 top-6 ml-6 mr-4 text-lg font-bold'>
        <h1 className='mb-2'>Comments:</h1>
        <div className='text-base w-full h-40'>
          {commentsArray && commentsArray.map((item) => (
            <div key={item._id} className='w-full h-20 flex flex-col'>
              <div className='flex flex-row gap-x-10 mb-2'>
                <div className='text-sm'>{item.CommenterId && item.CommenterId.username}</div>
                <div className='text-sm'>{dateDisplay(item.DateCommented)}</div>  
              </div>
              <div className='text-lg flexitems-center'>{item.Content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleViewer
