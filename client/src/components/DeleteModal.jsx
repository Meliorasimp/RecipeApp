import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useArticleStore } from '../store/articlestore.js';

const DeleteModal = ({ id, title, handleClose }) => {

    const { deleteArticle } = useArticleStore();
    
    const handleDeleteClick = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/article/delete/${id}`);
            if (response.status === 200) {
                toast.success('Recipe deleted successfully!', {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                deleteArticle(id);
                handleClose();  
            }
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    };

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-50 flex justify-center items-center'>
            <div className='bg-gray-600 h-2/6 w-2/5 rounded opacity-90 z-50'>
                <h1 className='text-center mt-14 text-2xl ml-5 mr-5'>
                    Are you sure you want to delete the "{title}" recipe?
                </h1>
                <div className='flex justify-evenly items-center gap-5 mt-8'>
                    <button className='bg-green-500 px-4 py-2' onClick={handleDeleteClick}>
                        Yes, I'm Sure
                    </button>
                    <button className='bg-red-500 px-4 py-2' onClick={handleClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
