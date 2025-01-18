import React, { useEffect } from 'react'
import axios from 'axios'
import { Heart, HeartOff, MessageSquareWarning } from 'lucide-react'
import { TruncateText } from '../service/MainService'

const ArticleViewer = ({articleUrl}) => {
  const [article, setArticle] =  React.useState(null);
  const [moreArticles, setMoreArticles] = React.useState([5]);
  const [loading, setLoading] = React.useState(true);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [comment, setComment] = React.useState('');

  const userId = localStorage.getItem('userId');
  const itemsToShow = 1;
  const arraysToShow = moreArticles.slice(currentIndex, currentIndex + itemsToShow);

  const dateDisplay = (date) => {
    date = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-PH', options);
  }

  const handleCommentSubmit = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/comment/addComment/${id}`, {
        Content: comment,
        id: id,
      })

      if(response.status === 201) {
        console.log('Comment added successfully');
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
          console.log('All Articles:', response.data);
          setMoreArticles(response.data);
        }
      }

      catch(error) {
        console.error('Error:', error.message);
      }
    }
    getArticle();
    getAllArticlesExceptUser(userId);
  }, []);

  if(loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className='flex dashboard-second-background pt-6 pl-6 box-border overflow-hidden relative flex-row'>
      <div className='w-9/12 border-white border-r-2 article-viewer-size'>
        <h1 className='text-3xl font-bold mb-3'>{article.title}</h1>
        <p className='text-xl mb-3'>{article.author.username} | {dateDisplay(article.createdAt)} | <span className='font-bold'>{article.category}</span></p>
        <div className='flex flex-row gap-x-48 items-center'>
          <p className='text-lg mb-3'>Likes: 0</p>
          <p className='text-lg mb-2'>Dislikes: 0</p>
        </div>
        <div className='flex flex-row gap-x-6 w-full pb-2'>
          <button className='flex items-center article-viewer-button py-1 px-3 white rounded-sm hover:text-black hover:bg-white transition-all duration-200'>Like<Heart size={20} className='ml-1'/></button>
          <button className='flex items-center article-viewer-button py-1 px-3 white rounded-sm hover:text-black hover:bg-white transition-all duration-200'>Dislike<HeartOff size={20} className='ml-1' /></button>
          <button className='flex items-center article-viewer-button py-1 px-3 white rounded-sm hover:text-black hover:bg-white transition-all duration-200'>Ingredients Needed<MessageSquareWarning size={20} className='ml-1' /></button>
        </div>
        <div dangerouslySetInnerHTML={{__html: article.body}} className='mt-6 text-justify mr-6 leading-loose text-lg'></div>
        <div dangerouslySetInnerHTML={{__html: article.ingredients}}></div>
        <h1 className='text-center mt-2 mb-2 text-xl font-bold'>The Output of the Recipe Should Look Like this</h1>
        {article.image ? ( 
          <div className='w-1/2 h-96 flex justify-center items-center m-auto'>
            <img src={`http://localhost:3000/uploads/1737107006507-devplaceholder.jpg`} alt="Article" className='object-cover h-full w-full rounded-lg' />
          </div> 
          ) 
          : ( <div>No image available</div> )
          }
      </div>
      <div className='overflow-y-auto fixed w-auto left-3/4 ml-6 mr-4 text-lg font-bold '>
      <h1 className=''>Check out Other Articles</h1>
        {arraysToShow && arraysToShow.map((item) => (
          <div key={item._id} className='w-auto flex flex-col flex-1 '>
            <div className='text-xl mb-2'><a href="" className='text-blue-300 hover:underline'>{item.title}</a></div>
            <div className='text-lg mb-2'>By: <span className='text-yellow-300 hover:underline cursor-pointer'><a>{item.author.username}</a></span></div>
            <div className='text-sm mb-2'>{item.introduction}</div>
            <div className='flex justify-between relative'>
              <button onClick={() => setCurrentIndex(moreArticles.length > 5 ? currentIndex === 0 : null)} className='fixed'>&larr;</button>
              <button onClick={() => setCurrentIndex(currentIndex + 1)} className='fixed right-5'>&rarr;</button>
            </div>
          </div>
        ))}
      </div>
      <div className='overflow-y-auto fixed w-80 left-3/4 top-64 ml-6 mr-4 text-lg font-bold'>
        <h1>Comments:</h1>
        <div className='text-base w-full h-40 flex justify-center items-center'>No Comments Yet! Be the first to comment!
          
        </div>
      </div>
      <div className='fixed w-80 left-3/4 top-1/2 mt-20 ml-6 mr-4 text-lg font-bold'>
        <h1 className='mb-2'>Add a Comment</h1>
        <form onSubmit={(e) => handleCommentSubmit(e, article._id)}>
          <textarea 
          name="comment-textarea" 
          id="comment-textarea"
          className='w-11/12 h-44 ml-2'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          aria-label="Submit your comment"
          ></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ArticleViewer
