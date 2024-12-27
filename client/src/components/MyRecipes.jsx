import { useEffect, useState } from 'react';
import { Edit, Delete } from 'react-feather';
import { TruncateText30 } from '../service/MainService.js';
import { useArticleStore } from '../store/registerstore.js';
import DeleteModal from './DeleteModal.jsx';
import axios from 'axios';

const MyRecipes = () => {
  const { setArticles, articles } = useArticleStore();
  const [recipes, setRecipes] = useState([]);
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

  const filteredRecipes = articles.filter((item) => item.author.username === loggedInUser);

  return (
    <div className="flex flex-col items-start justify-start h-screen w-11/12 gap-12 ">
      <div className="w-full h-full text-gray-600 flex flex-col items-start pt-16 overflow-y-auto">
        <div className="flex flex-wrap gap-8 ml-4">
          {filteredRecipes.map((item) => (
            <ul key={item._id}>
              <div className="h-60 w-96 bg-white rounded-xl shadow-md font-serif relative">
                <h1 className="text-2xl font-bold pt-3 ml-6">
                  <a className="cursor-pointer hover:underline hover:text-blue-500">{item.title}</a>
                </h1>
                <h5 className="text-sm font-bold ml-6 mt-1">{item.author.username}</h5>
                <div className="ml-6 mt-2 mr-6" dangerouslySetInnerHTML={{ __html: TruncateText30(item.body) }}></div>
                <div className="flex justify-center items-center absolute bottom-3 left-5">
                  <Edit />
                  <a href="#" className="text-gray-600 ml-2 font-bold hover:text-black hover:underline cursor-pointer mr-5">Edit</a>
                  <Delete />
                  <a href="#" className="text-gray-600 ml-2 font-bold hover:text-black hover:underline cursor-pointer mr-5" onClick={() => handleDelete(item._id, item.title)}>Delete</a>
                </div>
              </div>
            </ul>
          ))}
        </div>
      </div>
      {isDeleteClicked && <DeleteModal handleDelete={handleDelete} id={id} title={recipeTitle} handleClose={handleClose}/>}
    </div>
  );
};

export default MyRecipes;
