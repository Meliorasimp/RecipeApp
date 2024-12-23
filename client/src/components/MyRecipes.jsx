import { useEffect, useState } from 'react'
import { Edit, Delete, Eye } from 'react-feather'
import { TruncateText30 } from '../service/MainService.js'
import { useArticleStore } from '../store/registerstore.js'
import axios from 'axios'

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const { addArticle } = useArticleStore();
  const getRecipesByUser = async () => {
    const response = await axios.get('http://localhost:3000/article/getByUser');
    setRecipes(response.data);
    console.log(response.data);
    if(response.status === 200) {
      addArticle(response.data);
    }
  }

useEffect(() => {
    getRecipesByUser();
}, [])

  return (
    <div className='flex justify-start items-start flex-col h-screen w-11/12 gap-12'>
      <div className='ml-4 w-full h-12 text-gray-600 flex-col items-center justify-center gap-2 pt-16'>
        <div className='flex  mr-8 flex-wrap gap-8'>
          {recipes.map((item) => (
            <ul key={item._id}>
            <div className='h-60 w-96 bg-white rounded-xl shadow-md font-serif relative'>
            <h1 className='text-2xl font-bold pt-3 ml-6'><a className='cursor-pointer hover:underline hover:text-blue-500'>{item.title}</a></h1>
            <div className='ml-5'>(Author Name:)</div>
            <div dangerouslySetInnerHTML={{ __html: TruncateText30(item.body) }} className='ml-6 mt-2 mr-6'></div>
            <div className='flex justify-center items-center absolute bottom-3 left-5'>
              <Edit /><a href="" className='text-gray-600 ml-2 font-bold hover:text-black hover:underline cursor-pointer mr-5'>Edit</a>
              <Delete /><a href="" className='text-gray-600 ml-2 font-bold hover:text-black hover:underline cursor-pointer mr-5'>Delete</a>
            </div>
          </div>
          </ul>
          ))}
         
        </div>
      </div>
    </div>
  )
}

export default MyRecipes
