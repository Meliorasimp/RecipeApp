import React from 'react'
import { scrollToId } from '../../service/MainService.js'
import '../../styles/homepagestyles.css'

const Mexican = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);

const dishes = [ 
    { id: 1, title: 'Chilaquiles', description: 'A traditional Mexican breakfast dish made with fried tortillas, salsa, and various toppings.', image: '../images/MexicanDishes/chilaquiles.jpg' },
    { id: 2, title: 'Chiles En Nogada', description: 'A patriotic dish made with poblano peppers stuffed with a mixture of meat, fruits, and nuts, topped with a creamy walnut sauce.', image: '../images/MexicanDishes/chilesennogada.jpg' },
    { id: 3, title: 'Elote', description: 'Grilled corn on the cob, typically slathered with mayonnaise, cheese, chili powder, and lime juice.', image: '../images/MexicanDishes/elote.jpg' },
    { id: 4, title: 'Enchiladas', description: 'Rolled tortillas filled with meat, cheese, or beans, topped with chili sauce and cheese.', image: '../images/MexicanDishes/enchiladas.jpg' },
    { id: 5, title: 'Guacamole', description: 'A creamy avocado dip made with lime juice, onions, tomatoes, and cilantro.', image: '../images/MexicanDishes/guacamole.jpg' },
    { id: 6, title: 'Mole', description: 'A rich and complex sauce made with a variety of ingredients, including chili peppers, chocolate, and spices, often served with meat or poultry.', image: '../images/MexicanDishes/mole.jpg' },
    { id: 7, title: 'Pozole', description: 'A hearty soup made with hominy, meat (usually pork), and various seasonings, often garnished with cabbage, radishes, and lime.', image: '../images/MexicanDishes/pozole.jpg' },
    { id: 8, title: 'Tacos Al Pastor', description: 'Tacos filled with marinated pork, pineapple, onions, and cilantro, served with a tangy salsa.', image: '../images/MexicanDishes/tacosalpastor.jpg' },
    { id: 9, title: 'Tamales', description: 'Steamed corn dough filled with various ingredients, such as meats, cheeses, or vegetables, wrapped in corn husks or banana leaves.', image: '../images/MexicanDishes/tamales.jpg' },
    { id: 10, title: 'Tostadas', description: 'Crunchy tortillas topped with various ingredients, such as beans, meat, lettuce, and salsa.', image: '../images/MexicanDishes/tostadas.jpg' }
];
    
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsToShow = 2;
    const slicedArray = dishes.slice(currentIndex, currentIndex + itemsToShow);

    const handleFrenchCuisineClick = () => {
        window.location.href = '/cuisines/french';
    }

    const handleGreekCuisineClick = () => {
        window.location.href ='/cuisines/greek';
    }

    return (
        <div className='flex pt-16 homepage-background overflow-y-auto negative-z-index'>
            <div className='ml-8 mr-8 flex w-full h-full gap-10'>
                <div className='w-2/3 h-auto pr-1'>
                    <div className='h-96 w-4/5 bg-black'>
                        <img src="../images/MexicanDishes/mexicanintroimage.jpg" alt="title" className='h-full w-full object-cover rounded-sm' />
                    </div>
                    <div>
                        <h1 className='mt-5 mb-5 text-2xl font-bold'>Uncover the Rich and Varied Flavors of Mexican Cuisine <br /> and Explore the Secrets Behind Its Global Acclaim.</h1>
                    </div>
                    <div className='mb-10 text-sm'>
                        <p>By: Meliorasimpx | {today}</p>
                    </div>
                    <div className='mb-10'>
                        <p className='leading-loose text-lg' id='introduction'>Mexican cuisine is a vibrant and flavorful tapestry that reflects the country’s rich history, 
                            diverse cultures, and varied landscapes. From the bustling markets of Mexico City to the coastal villages of Veracruz, Mexican cuisine showcases a 
                            diverse array of flavors, ingredients, and cooking techniques that have been perfected over centuries. Renowned for its bold and complex flavors, 
                            Mexican food has become a global favorite, celebrated for its ability to bring warmth and excitement to the table.
                        </p><br />
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='essence'>Regional Variations</h1>
                        <p className='leading-loose text-lg'>Mexican cuisine is incredibly diverse, with each region boasting its own unique flavors, ingredients, and culinary techniques:
                        </p><br />
                        <ul>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Central Mexico: </span>This region includes the capital, Mexico City, and is known for dishes like tacos al pastor (marinated pork tacos), chiles en nogada (stuffed peppers with walnut sauce), and tamales (steamed corn dough with various fillings).</li>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Northern Mexico: </span>Famous for its grilled meats and hearty dishes, this region offers delicacies such as cabrito (roast goat), machaca (dried, shredded beef), and flour tortillas.</li>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Oaxaca: </span>Known as the “land of the seven moles,” Oaxaca is celebrated for its rich and complex mole sauces, as well as dishes like tlayudas (large toasted tortillas with various toppings) and chapulines (roasted grasshoppers).</li>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Yucatán Peninsula: </span>Influenced by Mayan cuisine, this region is known for dishes like cochinita pibil (slow-roasted pork), sopa de lima (lime soup), and papadzules (tortillas filled with hard-boiled eggs and topped with pumpkin seed sauce).</li>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Veracruz: </span>A coastal region with strong Spanish and Afro-Caribbean influences, Veracruz is famous for its seafood dishes, such as pescado a la veracruzana (fish cooked with tomatoes, olives, and capers) and arroz a la tumbada (seafood rice).</li>
                        </ul>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='ingredients'>Essential Ingredients in Mexico</h1>
                        <p className='mb-4 text-lg'>Mexican cuisine relies on a handful of essential ingredients that define its distinctive flavors and vibrant dishes.
                             Here are some key components:</p>
                        <ol className='flex flex-col gap-3'>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Corn</span> - A staple in Mexican cuisine, used to make tortillas, tamales, and other traditional dishes.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Beans</span> - Commonly used as a side dish or filling, often cooked and refried with spices.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Chili Peppers</span> - Available in a wide variety, they add heat and flavor to many Mexican dishes.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Tomatoes</span> - A key ingredient in salsas, sauces, and stews.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Avocados</span> - Used to make guacamole and add a creamy texture to various dishes..</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Cilantro</span> - A fresh herb that adds a distinctive flavor to salsas, soups, and garnishes.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Limes</span> - Provide a bright, tangy flavor to many dishes and drinks.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Chocolate</span> - Traditionally used in savory dishes like mole sauces, as well as in desserts.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Cheese</span> - Varieties like queso fresco, cotija, and Oaxaca cheese are often used in Mexican cuisine. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Epazote</span> - An aromatic herb used in soups, stews, and bean dishes to add a unique flavor and reduce gas.</p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-2' id='dishes'>Famous Mexican Dishes</h1>
                        <p className='text-lg mb-6 leading-loose'>Mexico boasts a rich culinary heritage, and its famous dishes are cherished worldwide. Here are some iconic Mexican dishes:</p>
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
                    <div id='conclusion' className='pb-10'>
                        <h1 className='text-xl font-bold mb-2'>Conclusion</h1>
                        <p className='text-lg leading-loose'>Mexican cuisine is a celebration of the country’s rich history, diverse cultures, and natural bounty. 
                            From the intricate flavors of mole to the simple pleasure of a freshly made taco, Mexican food offers a culinary journey that delights 
                            the senses and connects people to a tradition that spans centuries. Whether enjoyed at a street food stall or a fine dining restaurant, 
                            Mexican cuisine is a testament to the enduring appeal and versatility of this beloved culinary heritage.<br />
                        </p>
                        <br />
                        <div className='relative'>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute left-10' onClick={handleFrenchCuisineClick}>&larr; French Cuisine</button>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute right-10 hover:text-orange-300' onClick={handleGreekCuisineClick}>Greek Cuisine &rarr;</button>
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
                            <h1 className='pl-2 pt-2 text-lg     font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('essence')}>Regional variation</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('ingredients')}>Ingredients</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('dishes')}>Famous Mexican Dishes</h1>
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

export default Mexican
