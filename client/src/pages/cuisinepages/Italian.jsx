import React from 'react'
import { scrollToId } from '../../service/MainService.js'
import '../../styles/homepagestyles.css'

const Italian = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);

const dishes = [ 

];
    
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsToShow = 2;
    const slicedArray = dishes.slice(currentIndex, currentIndex + itemsToShow);

    const handleItalianCuisineClick = () => {
        window.location.href = '/cuisines/italian';
    }

    const handleSpanishCuisineClick = () => {
        window.location.href = '/cuisines/spanish';
    }

    return (
        <div className='flex pt-16 homepage-background overflow-y-auto negative-z-index'>
            <div className='ml-8 mr-8 flex w-full h-full gap-10'>
                <div className='w-2/3 h-auto pr-1'>
                    <div className='h-96 w-4/5 bg-black'>
                        <img src="../images/italyintroimage.jpg" alt="title" className='h-full w-full object-cover rounded-sm' />
                    </div>
                    <div>
                        <h1 className='mt-5 mb-5 text-2xl '>Explore the Varied Delights of Italian Cuisine and Uncover <br />
                        the Secrets Behind Their Global Appeal</h1>
                    </div>
                    <div className='mb-10 text-sm'>
                        <p>By: Meliorasimpx | {today}</p>
                    </div>
                    <div className='mb-10'>
                        <p className='indent-12 leading-loose' id='introduction'>Italian cuisine is a delightful symphony of flavors that emphasizes fresh, 
                            high-quality ingredients and simple yet delicious preparations. With a rich culinary history and regional diversity, 
                            it offers a wide range of dishes, from pasta and pizza to risotto and gelato. Each region in Italy has its own specialties, 
                            making Italian cuisine a vibrant and varied culinary experience that brings people together around the table. Buon appetito!
                        </p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='essence'>Simplicity</h1>
                        <p className='indent-12 leading-loose'>The essence of italian cuisine
                        The essence of Italian cuisine lies in its simplicity, fresh ingredients, and strong sense of tradition. 
                        It celebrates the natural flavors of high-quality ingredients, allowing them to shine through in every dish. 
                        From the sun-ripened tomatoes and aromatic basil to the creamy mozzarella and robust olive oil, each component 
                        plays a vital role in creating memorable meals. Regional diversity adds to its richness, with each area of Italy offering unique specialties 
                        that reflect local traditions and history. Italian cuisine is not just about food; it's 
                        about bringing people together to share and enjoy life's pleasures around the table.</p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='ingredients'>Essential Ingredients in Italy</h1>
                        <p className='indent-12 mb-4'>Italian cuisine relies on a handful of essential ingredients that define its distinctive flavors and vibrant dishes.
                             Here are some key components:</p>
                        <ol className='flex flex-col gap-3'>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Polenta</span> - This 
                                cornmeal mush is a staple of northern Italy and can be eaten at any meal. For something different, 
                                fry up squares of chilled leftover polenta. </p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Arborio or Carnaroli rice</span> - The high starch content of these chubby, 
                                short-grained rice varieties is essential for risotto. The slow cooking and steady stirring allow the grains to gradually release starch, 
                                thickening the dish and resulting in a creamy textured risotto.  </p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Balsamic vinegar</span> - A special vinegar from Modena, 
                                Italy, that achieves its beautiful color and depth of flavor only after spending years in wooden barrels, where it concentrates into a complex syrup.</p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Tomatoes</span> - Delectable raw or cooked, tomatoes pair beautifully 
                                with so many foods and flavors: cheeses, meats, onions, garlic, peppers and herbs; pizza, pastas, salsas, salads, soups, stews — and on and on.</p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Porcini mushrooms</span> - These wild mushrooms are usually 
                                found in dried form and have a meaty texture and woodsy flavor. They are particularly good in soups, 
                                stuffing and stews and with braised meats.</p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Flat-leaf parsley </span> - Also known as "Italian parsley," 
                                its flavor and aroma profile is green and vegetative. It is popular in egg dishes, soups, stews, 
                                stocks and with other herbs to bring out their flavor.</p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Semolina pasta</span> - Most good pasta is made from semolina, 
                                durum wheat more coarsely ground than regular wheat flour. Try it with Fresh Semolina and Egg Pasta.</p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Cannellini beans</span> - The large, white kidney beans are available 
                                dry or canned and are popular in salads, soups, and stews. Try them in Italian White Bean and Sausage Stew.</p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Parmigiano-Reggiano</span> - This is the real deal, the pinnacle of Parmesan cheeses, whose rich, complex flavor comes from the aging process. Made from skimmed or partially skimmed cow's milk, 
                                Parmigiano-Reggiano is a hard, grating cheese with a light golden rind and a straw-colored interior. </p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Mozzarella</span> - This mild white cheese is tops for pizza, lasagna, 
                                and other classic Italian dishes. Fresh mozzarella has a more delicate flavor and is 
                                not as elastic as the drier semi-soft kind typically sold pre-packaged. Fresh mozzarella is generally made from whole milk, 
                                packaged in water or whey and labeled "Italian style." </p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-2' id='dishes'>Famous Italian Dishes</h1>
                        <p className='indent-12 mb-6'>Japan boasts a rich culinary heritage, and its famous dishes are cherished worldwide. Here are some iconic Japanese dishes:</p>
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
                        <p className='indent-12'>In summary, Japanese cuisine is a remarkable blend of tradition, innovation, and artistry. 
                            Its emphasis on harmony, seasonality, and simplicity makes each meal a celebration of natural flavors and meticulous craftsmanship. 
                            From the iconic sushi and sashimi to the comforting bowls of ramen and udon, 
                            Japanese food offers a diverse culinary landscape that caters to both the everyday and the extraordinary.<br />
                        </p>
                        <br />
                        <p className='indent-12'>
                        The commitment to using fresh, high-quality ingredients and the respect for their natural flavors ensures that every dish is 
                        not only delicious but also nutritious. The aesthetic presentation of Japanese cuisine further enhances the dining experience, 
                        making it a feast for both the eyes and the palate.
                        </p>

                        <div className='relative'>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute left-10' onClick={handleSpanishCuisineClick}>&larr; Spanish Cuisine</button>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute right-10 hover:text-orange-300' onClick={handleItalianCuisineClick}>Italian    Cuisine &rarr;</button>
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
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('essence')}>Harmony and Balance</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('ingredients')}>Ingredients</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('dishes')}>Famous Japanese Dishes</h1>
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
