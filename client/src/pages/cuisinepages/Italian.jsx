import React from 'react'
import { scrollToId } from '../../service/MainService.js'
import '../../styles/homepagestyles.css'

const Italian = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);

const dishes = [ 
    { id: 1, title: 'Pizza na Poletana', description: 'A classic Neapolitan pizza topped with San Marzano tomatoes, mozzarella cheese, fresh basil, and extra-virgin olive oil.', image: '../images/ItalianDishes/pizzanapoletana.jpg' },
    { id: 2, title: 'Pasta ncasciata', description: 'A traditional Sicilian pasta dish made with rigatoni, eggplant, tomato sauce, and ricotta salata cheese.', image: '../images/ItalianDishes/pastancasciata.jpg' },
    { id: 3, title: 'Fritto Misto', description: 'A mixed seafood and vegetable fry-up that is a popular dish in coastal regions of Italy.', image: '../images/ItalianDishes/frittomisto.jpg' },
    { id: 4, title: 'Bistecca Fiorentina', description: 'A Tuscan-style steak made from Chianina beef and grilled over an open flame.', image: '../images/ItalianDishes/bisteccafiorentina.jpg' },
    { id: 5, title: 'Linguine Allo Scoglio', description: 'A seafood pasta dish made with linguine, clams, mussels, shrimp, and squid in a spicy tomato sauce.', image: '../images/ItalianDishes/linguinealloscoglio.jpg' },
    { id: 6, title: 'Trattoria Il Porticciolo', description: 'A cozy trattoria in the seaside town of Santa Margherita Ligure that serves fresh seafood and Ligurian specialties.', image: '../images/ItalianDishes/trattoriailporticciolo.jpg' },
    { id: 7, title: 'Bagni Delfino', description: 'A beachfront restaurant in Sorrento known for its stunning views and delicious seafood dishes.', image: '../images/ItalianDishes/bagnidelfino.jpg' },
    { id: 8, title: 'Sicilia In Tavola', description: 'A family-run restaurant in Palermo that serves this traditional Sicilian dishes made with fresh, local ingredients.', image: '../images/ItalianDishes/siciliaintavola.jpg' },
    { id: 9, title: 'Trattoria La Scogleria' , description: 'A charming trattoria in the fishing village of Vernazza that specializes in fresh seafood and Ligurian cuisine.', image: '../images/ItalianDishes/trattorialascogleria.jpg' },
    { id: 10, title: 'Fregolla Con Arselle', description: 'A traditional Sardinian dish made with fregola pasta and clams in a rich tomato sauce.', image: '../images/ItalianDishes/fregolaconarselle.jpg' },  
];
    
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsToShow = 2;
    const slicedArray = dishes.slice(currentIndex, currentIndex + itemsToShow);

    const handleJapaneseCuisineClick = () => {
        window.location.href = '/cuisines/japanese';
    }

    const handleIndianCuisineClick = () => {
        window.location.href = '/cuisines/indian';
    }

    return (
        <div className='flex pt-16 homepage-background overflow-y-auto negative-z-index'>
            <div className='ml-8 mr-8 flex w-full h-full gap-10'>
                <div className='w-2/3 h-auto pr-1'>
                    <div className='h-96 w-4/5 bg-black'>
                        <img src="../images/ItalianDishes/italyintroimage.jpg" alt="title" className='h-full w-full object-cover rounded-sm' />
                    </div>
                    <div>
                        <h1 className='mt-5 mb-5 text-2xl font-bold'>Explore the Varied Delights of Italian Cuisine and Uncover <br />
                        the Secrets Behind Their Global Appeal</h1>
                    </div>
                    <div className='mb-10 text-sm'>
                        <p>By: Meliorasimpx | {today}</p>
                    </div>
                    <div className='mb-10'>
                        <p className='leading-loose text-lg' id='introduction'>Italian cuisine is a delightful symphony of flavors that emphasizes fresh, 
                            high-quality ingredients and simple yet delicious preparations. With a rich culinary history and regional diversity, 
                            it offers a wide range of dishes, from pasta and pizza to risotto and gelato. Each region in Italy has its own specialties, 
                            making Italian cuisine a vibrant and varied culinary experience that brings people together around the table. Buon appetito!
                        </p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='essence'>Simplicity</h1>
                        <p className='leading-loose text-lg'>The essence of italian cuisine
                        The essence of Italian cuisine lies in its simplicity, fresh ingredients, and strong sense of tradition. 
                        It celebrates the natural flavors of high-quality ingredients, allowing them to shine through in every dish. <br /><br />
                        From the sun-ripened tomatoes and aromatic basil to the creamy mozzarella and robust olive oil, each component 
                        plays a vital role in creating memorable meals. Regional diversity adds to its richness, with each area of Italy offering unique specialties 
                        that reflect local traditions and history. Italian cuisine is not just about food; it's 
                        about bringing people together to share and enjoy life's pleasures around the table.</p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='ingredients'>Essential Ingredients in Italy</h1>
                        <p className='mb-4 text-lg'>Italian cuisine relies on a handful of essential ingredients that define its distinctive flavors and vibrant dishes.
                             Here are some key components:</p>
                        <ol className='flex flex-col gap-3'>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Polenta</span> - This 
                                cornmeal mush is a staple of northern Italy and can be eaten at any meal. For something different, 
                                fry up squares of chilled leftover polenta. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Arborio or Carnaroli rice</span> - The high starch content of these chubby, 
                                short-grained rice varieties is essential for risotto. The slow cooking and steady stirring allow the grains to gradually release starch, 
                                thickening the dish and resulting in a creamy textured risotto.  </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Balsamic vinegar</span> - A special vinegar from Modena, 
                                Italy, that achieves its beautiful color and depth of flavor only after spending years in wooden barrels, where it concentrates into a complex syrup.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Tomatoes</span> - Delectable raw or cooked, tomatoes pair beautifully 
                                with so many foods and flavors: cheeses, meats, onions, garlic, peppers and herbs; pizza, pastas, salsas, salads, soups, stews — and on and on.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Porcini mushrooms</span> - These wild mushrooms are usually 
                                found in dried form and have a meaty texture and woodsy flavor. They are particularly good in soups, 
                                stuffing and stews and with braised meats.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Flat-leaf parsley </span> - Also known as "Italian parsley," 
                                its flavor and aroma profile is green and vegetative. It is popular in egg dishes, soups, stews, 
                                stocks and with other herbs to bring out their flavor.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Semolina pasta</span> - Most good pasta is made from semolina, 
                                durum wheat more coarsely ground than regular wheat flour. Try it with Fresh Semolina and Egg Pasta.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Cannellini beans</span> - The large, white kidney beans are available 
                                dry or canned and are popular in salads, soups, and stews. Try them in Italian White Bean and Sausage Stew.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lgfont-light'><span className='font-bold'>Parmigiano-Reggiano</span> - This is the real deal, the pinnacle of Parmesan cheeses, whose rich, complex flavor comes from the aging process. Made from skimmed or partially skimmed cow's milk, 
                                Parmigiano-Reggiano is a hard, grating cheese with a light golden rind and a straw-colored interior. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Mozzarella</span> - This mild white cheese is tops for pizza, lasagna, 
                                and other classic Italian dishes. Fresh mozzarella has a more delicate flavor and is 
                                not as elastic as the drier semi-soft kind typically sold pre-packaged. Fresh mozzarella is generally made from whole milk, 
                                packaged in water or whey and labeled "Italian style." </p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-2' id='dishes'>Famous Indian Dishes</h1>
                        <p className='text-lg mb-6 leading-loose'>Japan boasts a rich culinary heritage, and its famous dishes are cherished worldwide. Here are some iconic Japanese dishes:</p>
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
                        <p className='text-lg leading-loose'>In summary, Italian cuisine is a wonderful combination of tradition, passion, 
                            and simplicity. Its focus on high-quality, seasonal ingredients, and time-honored techniques transforms each meal 
                            into a celebration of flavor and authenticity. From the beloved pasta and pizza to the rich risottos and hearty soups, 
                            Italian food offers a diverse and inviting culinary landscape that caters to both the comforting and the indulgent.<br />
                        </p>
                        <br />
                        <p className='text-lg leading-loose'>
                        The dedication to fresh, locally sourced produce and the respect for regional 
                        specialties ensure that every dish is not only delicious but also a true representation of Italy’s 
                        rich gastronomic heritage. The vibrant presentation of Italian cuisine enhances the dining experience, 
                        making it a feast for both the taste buds and the soul.
                        </p>

                        <div className='relative'>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute left-10' onClick={handleJapaneseCuisineClick}>&larr; Japanese Cuisine</button>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute right-10 hover:text-orange-300' onClick={handleIndianCuisineClick}>Indian Cuisine &rarr;</button>
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
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('essence')}>Simplicity</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('ingredients')}>Ingredients</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('dishes')}>Famous Italian Dishes</h1>
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

export default Italian
