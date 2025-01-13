import { useEffect, useState } from 'react';
import { Edit, Delete } from 'react-feather';
import { useArticleStore } from '../store/articlestore.js';
import DeleteModal from './DeleteModal.jsx';
import axios from 'axios';
import '../styles/dashboardstyles.css';
import { TruncateText } from '../service/MainService.js';

const MyRecipes = () => {
  const { setArticles, articles } = useArticleStore();
  const loggedInUser = localStorage.getItem('username');
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [id , setId] = useState('');
  const [recipeTitle, setRecipeTitle] = useState('');


  const handleDelete = async (id, title) => {
    setIsDeleteClicked(!isDeleteClicked);
    setId(id);
    setRecipeTitle(title);
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
          console.log(response.data);
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
    <div className="flex flex-col items-start justify-start h-screen w-screen dashboard-main-background">
      <div className="w-full h-full text-gray-600 flex flex-wrap items-start">
        <div className="flex flex-wrap justify-start pl-4 pt-4 gap-8 h-full w-full overflow-y-auto">
          {filteredRecipes.map((item) => (
            <ul key={item._id} className="relative w-1/4 h-3/4 mb-4 article-cards">
              <div className="h-full dashboard-second-background rounded-sm shadow-md font-serif relative">
                <div className="w-full h-56 pt-2 pl-2 pr-2">
                  <img src={`http://localhost:3000${item.image}`} alt="title" className="h-full w-full object-cover border-2 border-white rounded-sm" />
                </div>
                <h1 className="text-2xl font-bold pt-3 ml-6 mr-6">
                  <a className="cursor-pointer hover:underline text-white hover:text-blue-500">{item.title}</a>
                </h1>
                <h5 className="text-sm font-bold ml-6 mt-1 text-white">{item.author.username}</h5>
                <div className="ml-6 mt-2 mr-6 text-white" dangerouslySetInnerHTML={{ __html: TruncateText(item.body, 20) }}></div>
                <div className="flex justify-center items-center absolute bottom-3 left-5">
                  <Edit className='text-white'/>
                  <a href="#" className="ml-2 font-bold hover:underline cursor-pointer mr-5 text-white">Edit</a>
                  <Delete className='text-white'/>
                  <a href="#" className="ml-2 font-bold hover:underline cursor-pointer mr-5 text-white" onClick={() => handleDelete(item._id, item.title)}>Delete</a>
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
