import React from 'react'
import '../../styles/homepagestyles.css'
import { scrollToId } from '../../service/MainService.js'

const Chinese = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);

const dishes = [ 

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
                        <img src="../images/IndianDishes/indianintroimage.jpg" alt="title" className='h-full w-full object-cover rounded-sm' />
                    </div>
                    <div>
                        <h1 className='mt-5 mb-5 text-2xl font-bold'>Uncover the Rich Varieties of Indian Cuisine and <br /> Explore the Secrets Behind Its Global Acclaim.</h1>
                    </div>
                    <div className='mb-10 text-sm'>
                        <p>By: Meliorasimpx | {today}</p>
                    </div>
                    <div className='mb-10'>
                        <p className='leading-loose text-lg' id='introduction'>Chinese cuisine is a rich and diverse tapestry that has evolved over thousands of years, 
                            reflecting the country’s vast geography, varied climates, and deep cultural traditions. It is known for its intricate techniques, harmonious 
                            flavors, and emphasis on fresh ingredients, making it one of the most beloved and influential cuisines in the world.
                        </p><br />

                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='essence'>Regional Diversity</h1>
                        <p className='leading-loose text-lg'>Chinese cuisine is not monolithic; it encompasses a wide array of regional styles, 
                            each with its unique flavors and specialties. The most well-known are the Eight Culinary Traditions of China, which include:
                        </p><br />
                        <ul>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Cantonese (Yue) Cuisine: </span>Known for its subtle flavors and emphasis on freshness, Cantonese cuisine includes delicacies like dim sum, roast duck, and steamed fish. The cuisine often features light sauces and quick stir-frying techniques.</li>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Sichuan (Chuan) Cuisine: </span>Famous for its bold and spicy flavors, Sichuan cuisine uses ingredients like garlic, chili peppers, and Sichuan peppercorns to create dishes such as mapo tofu, kung pao chicken, and hotpot.</li>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Shandong (Lu) Cuisine: </span>Characterized by its hearty flavors and use of seafood, Shandong cuisine includes dishes like braised abalone, sweet and sour carp, and stir-fried clams. The cuisine often employs deep-frying and braising methods.</li>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Jiangsu (Su) Cuisine: </span>Known for its refined and elegant dishes, Jiangsu cuisine includes sweet and savory flavors, with dishes like braised pork belly, lion's head meatballs, and soup dumplings.</li>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Hunan (Xiang) Cuisine: </span>Similar to Sichuan cuisine, Hunan cuisine is known for its spiciness and use of chili peppers. Signature dishes include spicy chicken, steamed fish head with chili, and stir-fried pork with green beans.</li>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Fujian (Min) Cuisine: </span>Featuring delicate flavors and a focus on seafood, Fujian cuisine includes dishes like Buddha Jumps Over the Wall, oyster omelet, and red yeast rice pork.</li>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Anhui (Hui) Cuisine: </span>Known for its use of wild herbs and simple cooking techniques, Anhui cuisine includes dishes like bamboo shoots with ham, braised pigeon, and eggplant casserole.</li>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Zhejiang (Zhe) Cuisine: </span>Emphasizing freshness and seasonal ingredients, Zhejiang cuisine includes dishes like West Lake fish in vinegar sauce, dongpo pork, and beggar's chicken.</li>
                        </ul>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='ingredients'>Essential Ingredients in China</h1>
                        <p className='mb-4 text-lg'>Chinese cuisine relies on a handful of essential ingredients that define its distinctive flavors and vibrant dishes.
                             Here are some key components:</p>
                        <ol className='flex flex-col gap-3'>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Chakki atta (Chapati Flour)</span> - Stone-milled flour — 
                                chakki atta in Hindi — is an essential ingredient for Indian bread, including soft and puffy roti, flaky paratha, and crisp puri.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Fresh coriander</span> - Fresh coriander is the 
                                go-to garnish for all Indian plates, adding a pop of color to the presentation and a hint of tartness. 
                                Three-ingredient green chutney traditionally uses fresh coriander as its star component and is the perfect dip to serve alongside papad flatbread</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Toor dal (split pigeon peas)</span> - Toor dal is less easily available in the West than other varieties of lentils, 
                                but it's worth a trip to your local Indian supermarket. The pulse has a creamy and nutty flavor profile with a robust texture that requires slow cooking. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Turmeric powder</span> - For one, turmeric has been 
                                lauded by India's ancient medical system, ayurveda, for centuries. Science agrees, with research showing that the 
                                spice holds antioxidant and anti-inflammatory properties. From a purely epicurean point of view, turmeric has
                                uniquely earthy, piquant, peppery undertones. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Fine semolina</span> - Aside from pasta and European 
                                semolina milk pudding, this pale-yellow flour is woefully underutilized in Western gastronomy. Conversely, semolina is 
                                a pantry mainstay for all Indian chefs who use the ingredient for sweet and savory treats.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Masoor dal (red lentils)</span> - As the easiest Indian dal 
                                to perfect, it's an ideal choice for beginners and perfect to have on hand so you can whip up a quick and tasty side dish on demand.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Basmati rice</span> - Few meals beat the heady aromatic 
                                spices, marinated proteins, and fluffy, separated grains of rice that make up biryani. Even its less fancy cousin, pulao, 
                                is a sight to behold, with each grain holding more sweetness, earthiness, and spiciness than you can imagine.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Fresh green chilis</span> - While chili powder aids in creating a uniform layer of heat, 
                                freshly chopped chilis provide sporadic hits of firey pungency and won't change the color of your food.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Green cardamon</span> - Few spices possess the rare versatility of green cardamon. 
                                The little, olive-green colored pods have herbal, floral, and faintly sweet subtleties that lend themselves equally well
                                 to savory dishes as sugary desserts. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Chickpea flour</span> - Chickpea flour (besan in Hindi or garbanzo bean flour in the U.S.) 
                                is a must-have ingredient for those interested in Indian cuisine. It's a tremendous all-rounder, capable of making breakfast, lunch, and even dessert recipes. </p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-2' id='dishes'>Famous Italian Dishes</h1>
                        <p className='text-lg mb-6 leading-loose'>India boasts a rich culinary heritage, and its famous dishes are cherished worldwide. Here are some iconic Indian dishes:</p>
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
                        <p className='text-lg leading-loose'>In conclusion, Indian cuisine is a celebration of diversity, 
                            tradition, and innovation. Its emphasis on spices, regional specialties, and fresh ingredients creates 
                            a culinary landscape that is both rich and varied. Whether enjoying a humble home-cooked meal or a lavish banquet, 
                            Indian food offers a journey of flavors that captivates and delights the senses.<br />
                        </p>
                        <br />
                        <div className='relative'>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute left-10' onClick={handleJapaneseCuisineClick}>&larr; Italian Cuisine</button>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute right-10 hover:text-orange-300' onClick={handleIndianCuisineClick}>Chinese Cuisine &rarr;</button>
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
                            <h1 className='pl-2 pt-2 text-lg     font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('essence')}>Symphony of Flavor</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('ingredients')}>Ingredients</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('dishes')}>Famous Indian Dishes</h1>
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


export default Chinese
