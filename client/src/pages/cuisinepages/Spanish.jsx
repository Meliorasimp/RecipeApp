import '../../styles/homepagestyles.css'
import React from 'react'
import { scrollToId } from '../../service/MainService.js'

const Spanish = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);

const dishes = [ 
    { id: 1, title: 'Paella', image: '../images/paella.jpg', description: 'A flavorful rice dish cooked with a variety of ingredients, such as seafood, chicken, and vegetables. Paella is a symbol of Spanish cuisine and is enjoyed by locals and visitors alike.'}, 
    { id: 2, title: 'Tapas', image: '../images/tapas.jpg', description: 'Small plates of food that are perfect for sharing. Tapas can include a wide range of dishes, from olives and cheese to more elaborate creations like croquettes and patatas bravas.'}, 
    { id: 3, title: 'Gazpacho', image: '../images/gazpacho.jpg', description: 'A refreshing cold soup made with tomatoes, peppers, cucumbers, and garlic. Gazpacho is a popular dish in the summer months and is a great way to beat the heat.'}, 
    { id: 4, title: 'Patatas Bravas', image: '../images/patatasbravas.jpg', description: 'Fried potatoes served with a spicy tomato sauce and sometimes aioli, a classic tapa dish.' }, 
    { id : 5, title: 'Churros con Chocolate', image: '../images/churros.jpg', description: 'Deep-fried dough pastry served with a rich chocolate dipping sauce, a favorite dessert or snack in Spain.'}, 
    { id: 6, title: 'Jamón Ibérico', image: '../images/jamon.jpg', description: 'Cured ham made from Iberian pigs, prized for its rich flavor and melt-in-your-mouth texture.'},
    { id: 7, title: 'Tortilla Española', image: '../images/tortilla.jpeg', description: 'A simple yet delicious omelette made with eggs, potatoes, and onions. A staple dish in Spanish homes and bars.'}, 
    { id: 8, title: 'Crema Catalana', image: '../images/cremecatalana.jpg', description: 'is a classic Spanish dessert from the Catalonia region, often compared to French crème brûlée but with distinct differences.' }, 
    { id: 9, title: 'Fabada Asturiana', image: '../images/Fabada.jpg', description: 'A hearty bean stew from Asturias, made with white beans, chorizo, morcilla (blood sausage), and pork.' }, 
    { id: 10, title: 'Croquetas (Croquettes)', image: '../images/Croquetas.jpg', description: 'Deep-fried breaded rolls filled with a creamy mixture of ingredients such as ham, chicken, or fish. Croquetas are a popular tapa in Spain.'} 
];
    
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsToShow = 2;
    const slicedArray = dishes.slice(currentIndex, currentIndex + itemsToShow);

    const handleJapaneseCuisineClick = () => {
        window.location.href = '/cuisines/japanese';
    }

    return (
        <div className='flex pt-16 homepage-background overflow-y-auto negative-z-index'>
            <div className='ml-8 mr-8 flex w-full h-full gap-10'>
                <div className='w-2/3 h-auto pr-1'>
                    <div className='h-96 w-4/5 bg-black'>
                        <img src="../images/Spanish-Seafood-Paella.png" alt="title" className='h-full w-full object-cover rounded-sm' />
                    </div>
                    <div>
                        <h1 className='mt-5 mb-5 text-2xl'>Explore the Different Dishes of the Spanish Cuisine <br />and Why They're So Popular</h1>
                    </div>
                    <div className='mb-10 text-sm'>
                        <p>By: Meliorasimpx | {today}</p>
                    </div>
                    <div className='mb-10'>
                        <p className='indent-12' id='introduction'>Spain, a country rich in culture and history, offers a gastronomic experience that is as diverse as its landscapes.
                            Spanish cuisine is renowned for its vibrant flavors, fresh ingredients, and a culinary tradition that dates back centuries.
                            From bustling city markets to quaint village eateries, the food of Spain is a celebration of life itself.</p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='essence'>Essence</h1>
                        <p className='indent-12'>At the heart of Spanish cuisine lies a timeless philosophy that values simplicity and the quality of ingredients above all else.
                            This culinary tradition is not about complexity or elaborate techniques, but about allowing the natural flavors of the ingredients to shine.
                            Spanish chefs and home cooks alike understand that when you start with the best produce, you need little else to create a memorable dish.</p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='ingredients'>Essential Ingredients in Spain</h1>
                        <p className='indent-12 mb-4'>Spanish cuisine is a delightful mix of flavors, largely influenced by regional ingredients and traditions. Here are some of the most commonly used ingredients in Spanish cooking:</p>
                        <ol className='flex flex-col gap-3'>
                            <li>
                                <p className='indent-12'><span className='font-bold'>Olive Oil</span> - Olive oil is the cornerstone of Spanish cuisine, used in everything from sautéing vegetables to dressing salads.</p>
                            </li>
                            <li>
                                <p className='indent-12'><span className='font-bold'>Garlic</span> - Garlic is another staple ingredient in Spanish cooking, adding depth and flavor to a wide range of dishes.</p>
                            </li>
                            <li>
                                <p className='indent-12'><span className='font-bold'>Tomatoes</span> - Used in sauces, stews, and the famous gazpacho soup.</p>
                            </li>
                            <li>
                                <p className='indent-12'><span className='font-bold'>Peppers</span> - Both sweet bell peppers and spicy varieties are popular.</p>
                            </li>
                            <li>
                                <p className='indent-12'><span className='font-bold'>Paprika (Pimentón)</span> - Adds color and flavor, especially in dishes like chorizo and paella.</p>
                            </li>
                            <li>
                                <p className='indent-12'><span className='font-bold'>Saffron</span> - This prized spice gives paella its distinctive yellow color and unique flavor.</p>
                            </li>
                            <li>
                                <p className='indent-12'><span className='font-bold'>Seafood</span> - Spain's extensive coastline provides a bounty of fresh fish and shellfish, central to many coastal dishes.</p>
                            </li>
                            <li>
                                <p className='indent-12'><span className='font-bold'>Jamón (Cured Ham)</span> - A beloved delicacy, often enjoyed on its own or used to flavor dishes.</p>
                            </li>
                            <li>
                                <p className='indent-12'><span className='font-bold'>Legumes</span> - Chickpeas and lentils are staples in hearty stews and soups.</p>
                            </li>
                            <li>
                                <p className='indent-12'><span className='font-bold'>Wine and Vinegar</span> - Both are used in cooking to add depth and complexity to dishes.</p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-2' id='dishes'>Famous Spanish Dishes</h1>
                        <p className='indent-12 mb-6'>Spain boasts a rich culinary heritage, and its famous dishes are cherished worldwide. Here are some iconic Spanish dishes:</p>
                        <div className='flex justify-evenly w-full h-96 relative mb-16'>
                            { currentIndex > 0 ? <button className='absolute left-0 bottom-48' onClick={() => setCurrentIndex(currentIndex - 2)}>&larr;</button> : null }
                            { currentIndex === 8 ? null : <button className='absolute right-0 bottom-48' onClick={() => setCurrentIndex(currentIndex + 2)}>&rarr;</button> }
                            <div className='flex gap-4 justify-evenly'> 
                                {slicedArray.map((dish) => (
                                    <div key={dish.id} className='w-1/3 h-96 bg-white rounded-md shadow-md homepage-second-background container'>
                                        <div className='bg-red-400 h-2/4 w-full rounded-md'>
                                            <img src={dish.image} alt="" className='h-full w-full object-cover rounded-tl-md rounded-tr-md'/>
                                        </div>
                                        
                                        <h1 className='text-lg font-bold mt-2 ml-2'>{dish.title}</h1>
                                        <p className='ml-2 mr-2'>{dish.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div id='conclusion'>
                        <h1 className='text-xl font-bold mb-2'>Conclusion</h1>
                        <p className='indent-12'>In summary, Spanish cuisine is a celebration of regional diversity, high-quality ingredients, and rich culinary traditions. 
                            It features iconic dishes like Paella, Tapas, and Gazpacho, using staples such as olive oil, garlic, and tomatoes. 
                            Spanish cooking methods range from simple grilling to intricate slow-cooking. <br />
                        </p>
                        <br />
                        <p className='indent-12'>
                            Beyond its delicious flavors, Spanish food plays a crucial role in social and family life, emphasizing the importance of communal dining 
                            and cultural festivities. Spanish cuisine invites the world to experience its warmth and heritage through its diverse and flavorful dishes.
                        </p>

                        <div className='relative'>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute right-10 hover:text-orange-300' onClick={handleJapaneseCuisineClick}>Japanese Cuisine &rarr;</button>
                        </div>
                                
                    </div>
                </div>
                <div className='w-1/5 fixed right-10'>
                    <h1 className='text-xl font-bold mb-2'>Sections</h1>
                    <div className='flex flex-col items-center justify-center gap-2 pl-2'>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('introduction')}>Introduction</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('essence')}>Essence</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('ingredients')}>Ingredients</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('dishes')}>Famous Spanish Dishes</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('conclusion')}>Conclusion</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spanish
