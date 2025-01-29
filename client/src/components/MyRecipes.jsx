import { useEffect, useState } from 'react';
import { Edit, Delete } from 'react-feather';
import { BookOpenCheck } from 'lucide-react';
import { useArticleStore } from '../store/articlestore.js';
import useStore from '../store/introductionstore.js';
import NavigationHook from '../hooks/NavigationHook.jsx';
import DeleteModal from './DeleteModal.jsx';
import axios from 'axios';
import '../styles/dashboardstyles.css';
import { TruncateText } from '../service/MainService.js';
import { useNavigate } from 'react-router-dom';

const MyRecipes = ({handleArticleUrl}) => {
  const { setArticles, articles, publishArticle, UnpublishArticle } = useArticleStore();
  const { introsToDisplay, setIntrosToDisplay } = useStore();
  const navigateTo = NavigationHook();
  const loggedInUser = localStorage.getItem('username');
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [isPublishedClicked, setIsPublishedClicked] = useState(false);
  const [dateToday, setDateToday] = useState('');
  const [introduction, setIntroduction] = useState({});
  const [id , setId] = useState('');
  const [recipeTitle, setRecipeTitle] = useState('');
  const Navigate = useNavigate();

  const handleIntroductionChange = (id, introvalue) => {
    setIntroduction({
      ...introduction,
      [id]: introvalue
    });
  };

  const dateDisplay = (date) => {
    date = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-PH', options);
  }

  const handleDelete = async (id, title) => {
    setIsDeleteClicked(!isDeleteClicked);
    setId(id);
    setRecipeTitle(title);
  }

  const handleGetIntroduction = async (id) => {
    console.log(`Fetching introduction for article ID: ${id}`);
    try {
      const response = await axios.get(`http://localhost:3000/article/getintro/${id}`);
      if (response.status === 200) {
        console.log('Response:', response.data);
        setIntrosToDisplay(id, response.data.introduction, response.data.isPublished);
      }
    }
    catch (error) {
      console.error('Error fetching introduction:', error.message);
    }
  }

  const handlePublishArticle = async (id) => {
    console.log('Publishing article:', id);
    if (introduction[id]) {
      setIsPublishedClicked(!isPublishedClicked);
      try {
        const response = await axios.put(`http://localhost:3000/article/publish/${id}`, {
          isPublished: true,
          introduction: introduction[id],
        });
        if (response.status === 200) {
          publishArticle(id);
          console.log('Article published');
          handleGetIntroduction(id);
        }
      }
      catch (error) {
        console.error('Error publishing article:', error.message);
      }
    }
    else {
      alert('Please add an introduction to your article before publishing');
    }
  }

  const handleUnpublishArticle = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3000/article/publish/${id}`, {
        isPublished: false,
      });
      if (response.status === 200) {
        UnpublishArticle(id);
        console.log('Article unpublished');
      }
    }
    catch (error) {
      console.error('Error unpublishing article:', error.message);
    }
  }

  const handleClose = () => {
    setIsDeleteClicked(false);
  }

  useEffect(() => {

    /* Fetch Recipes By user.
     It uses the Articles Store through the use of setArticles function so that the fetched data renders on the page without refreshing the page.
    */
    const getRecipesByUser = async () => {
      try {
        const response = await axios.get('http://localhost:3000/article/getByUser');
        if (response.status === 200) {
          setArticles(response.data);
        }
      } catch (error) {
          console.error('Error fetching recipes:', error);
      }
    };

    getRecipesByUser();
  }, []);

  /*
  Filter Recipes so that who is logged in can only see their recipes and not the other way around :)
   */
  const filteredRecipes = articles.filter((item) => item.author.username === loggedInUser);
  

  return (
    <div className="h-screen w-screen dashboard-main-background">
      <div className="w-full h-full">
        <div className="flex flex-wrap pl-4 pt-4 gap-8 h-full w-full overflow-y-auto">
          {filteredRecipes.map((item) => (
            <ul key={item._id} className="relative w-1/4 h-3/4 mb-4 article-cards ">
              <div className="h-full dashboard-second-background rounded-sm shadow-md font-serif relative">
                {item.isPublished ? 
                <div className='ribbon-container-green'>
                  <div className='ribbon-green'></div>
                </div> : 
                <div className='ribbon-container-red'>
                  <div className='ribbon-red'></div>
                </div>
                }
                <div className="w-full h-56 pt-2 pl-2 pr-2">
                  <img src={`http://localhost:3000${item.image}`} alt="title" className="h-full w-full object-cover border-2 border-white rounded-sm" />
                </div>
                <h1 className="text-lg font-bold pt-3 ml-6 mr-6">
                  <a className="cursor-pointer hover:underline text-white hover:text-blue-500 article-font" onClick={
                    () => { 
                      Navigate(`/dashboard/${item.author.username}/${item._id}`); 
                      handleArticleUrl(item._id);
                     }
                    }>{item.title}</a>
                </h1>
                <h5 className="text-xs font-bold ml-6 mt-1 text-white article-font">{item.author.username} | {dateDisplay(item.createdAt)}</h5>
                { item.isPublished ? <h1 key={item._id} className='w-11/12 text-left ml-4 mt-2 text-white article-font font-light'>
                {(introsToDisplay) ?  (TruncateText(introsToDisplay[item._id]?.intro, 35)) : null}
                </h1> :
                  <textarea 
                  className="ml-6 mt-2 mr-6 text-white w-5/6 h-1/4" 
                  placeholder='Add an Introduction to your Article' 
                  value={introduction[item._id] || ''} 
                  onChange={(e) => handleIntroductionChange(item._id, e.target.value)}>
                  </textarea>
                }
                <div className="flex justify-center items-center absolute bottom-3 left-5">
                  <Edit className='text-white' size={20}/>
                  <a href="#" className="ml-2 font-bold hover:underline cursor-pointer mr-5 text-white text-sm">Edit</a>
                  <Delete className='text-white' size={20}/>
                  <a href="#" className="ml-2 font-bold hover:underline cursor-pointer mr-5 text-white text-sm" onClick={() => handleDelete(item._id, item.title)}>Delete</a>
                  <BookOpenCheck className='text-white' size={20}/> 
                  <a href="#" className='ml-2 font-bold hover:underline cursor-pointer mr-5 text-white text-sm'>
                    {item.isPublished ? <p onClick={() => handleUnpublishArticle(item._id)}>Unpublish</p> : <p onClick={() => handlePublishArticle(item._id)}>Publish</p> }</a>
                </div>
              </div>
              
            </ul>
          ))}
        </div>
      </div>
      {isDeleteClicked && <DeleteModal handleDelete={handleDelete} id={id} title={recipeTitle} handleClose={handleClose} />}
    </div>
  );
};

export default MyRecipes;
