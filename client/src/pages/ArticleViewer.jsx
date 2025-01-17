import React, { useEffect } from 'react'
import axios from 'axios'
import { Heart, HeartOff, MessageSquareWarning } from 'lucide-react'

const ArticleViewer = ({articleUrl}) => {
  const [article, setArticle] =  React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const userId = localStorage.getItem('userId');
  console.log('User ID from localStorage:', userId);
  
  const dateDisplay = (date) => {
    date = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-PH', options);
  }
  console.log('Article URL:', articleUrl);

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/article/getArticleById/${articleUrl}`);
  
        if(response.status === 200) {
          console.log('Article:', response.data);
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
        <div className='flex flex-row gap-x-6 w-full pb-2'>
          <button className='flex items-center article-viewer-button py-1 px-3 white rounded-sm hover:text-black hover:bg-white transition-all duration-200'>Like<Heart size={20} className='ml-1'/></button>
          <button className='flex items-center article-viewer-button py-1 px-3 white rounded-sm hover:text-black hover:bg-white transition-all duration-200'>Dislike<HeartOff size={20} className='ml-1' /></button>
          <button className='flex items-center article-viewer-button py-1 px-3 white rounded-sm hover:text-black hover:bg-white transition-all duration-200'>Comment<MessageSquareWarning size={20} className='ml-1' /></button>
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
      <div className='overflow-y-auto fixed w-3/12 left-3/4 ml-5 text-lg font-bold'>
      <h1>Check out Other Articles</h1>
      </div>
    </div>
  )
}

export default ArticleViewer
