import React from 'react'
import { scrollToId } from '../../service/MainService.js'
import '../../styles/homepagestyles.css'


const Ethiopian = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);

const dishes = [ 
    { id: 1, title: 'Asa', description: 'A spicy fish stew made with tilapia or other freshwater fish, asa is a popular dish in Ethiopia. The fish is simmered in a rich sauce made from berbere, tomatoes, onions, garlic, and other spices.', image: '../images/EthiopianDishes/asa.jpg' },
    { id: 2, title: 'Doro Wot', description: 'A spicy chicken stew, doro wat is a staple of Ethiopian cuisine and a favorite among locals and visitors alike. The dish features tender chicken simmered in a berbere-spiced sauce with onions, garlic, and ginger.', image: '../images/EthiopianDishes/dorowot.jpg' },
    { id: 3, title: 'Fatira', description: 'A flaky, layered pastry filled with spiced meat, vegetables, or cheese, fatira is a popular street food in Ethiopia. The dish is similar to a savory pancake or flatbread and can be enjoyed as a snack or light meal.', image: '../images/EthiopianDishes/fatira.jpg' },
    { id: 4, title: 'Firfir', description: 'A hearty breakfast dish made from torn pieces of injera sautéed with berbere, niter kibbeh, and other spices, firfir is a flavorful and satisfying way to start the day.', image: '../images/EthiopianDishes/firfir.jpg' },
    { id: 5, title: 'Keywot', description: 'A spicy beef stew, keywot is a classic Ethiopian dish that showcases the country\'s bold flavors and aromatic spices. The beef is slow-cooked in a berbere-infused sauce with onions, garlic, and other seasonings.', image: '../images/EthiopianDishes/keywot.jpg' },
    { id: 6, title: 'Kitfo', description: 'A traditional Ethiopian dish made from raw minced beef marinated in niter kibbeh and mitmita, kitfo is a delicacy enjoyed by many. The beef is typically served rare or lightly cooked, with a side of cottage cheese and greens.', image: '../images/EthiopianDishes/kitfo.jpg' },
    { id: 7, title: 'Pasta Beu Atkilt', description: 'A simple yet satisfying pasta dish, pasta beu atkilt features spaghetti tossed with a flavorful vegetable sauce made from tomatoes, onions, garlic, and spices. The dish is a fusion of Ethiopian and Italian flavors.', image: '../images/EthiopianDishes/pastabeuatkilt.jpg' },
    { id: 8, title: 'Sambusas', description: 'A popular snack or appetizer, sambusas are crispy, triangular pastries filled with spiced meat, lentils, or vegetables. The pastries are deep-fried until golden brown and served with a tangy dipping sauce.', image: '../images/EthiopianDishes/sambusas.jpg' },
    { id: 9, title: 'Tibs', description: 'A flavorful stir-fry made with marinated beef, lamb, or chicken, tibs is a versatile dish that can be customized with various vegetables and seasonings.', image: '../images/EthiopianDishes/tibs.jpg' },
    { id: 10, title: 'Tihilo', description: 'A refreshing drink made from barley, honey, and water, tihilo is a traditional Ethiopian beverage enjoyed during special occasions and celebrations.', image: '../images/EthiopianDishes/tihilo.jpg' },
];
    
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsToShow = 2;
    const slicedArray = dishes.slice(currentIndex, currentIndex + itemsToShow);

    const handlePhilippineCuisineClick = () => {
        window.location.href = '/cuisines/philippines';
    }

    const handleEthiopianCuisineClick = () => {
        window.location.href ='/cuisines/ethiopian';
    }

    return (
        <div className='flex pt-16 homepage-background overflow-y-auto negative-z-index'>
            <div className='ml-8 mr-8 flex w-full h-full gap-10'>
                <div className='w-2/3 h-auto pr-1'>
                    <div className='h-96 w-4/5 bg-black'>
                        <img src="../images/PeruvianDishes/peruvianintroimage.jpg" alt="title" className='h-full w-full object-cover rounded-sm' />
                    </div>
                    <div>
                        <h1 className='mt-5 mb-5 text-2xl font-bold'>
                        Embark on a flavorful journey with Ethiopian cuisine and <br />uncover the secrets that have made it famous around the globe.</h1>
                    </div>
                    <div className='mb-10 text-sm'>
                        <p>By: Meliorasimpx | {today}</p>
                    </div>
                    <div className='mb-10'>
                        <p className='leading-loose text-lg' id='introduction'>Ethiopian cuisine is a vibrant and flavorful culinary tradition that reflects the country's 
                            rich history, diverse cultures, and unique ingredients. Known for its communal dining style and distinctive spices, Ethiopian food offers a sensory 
                            experience that is both exciting and comforting.
                        </p><br />
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='essence'>Communal Dining</h1>
                        <p className='leading-loose text-lg'>
                        Ethiopian meals are typically shared, with diners gathering around a large platter of injera topped with various dishes. 
                        This communal style of eating fosters a sense of togetherness and emphasizes the importance of hospitality. Eating with the right hand is customary, 
                        and a practice called "gursha" involves feeding others at the table as a gesture of affection and respect.
                        </p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='ingredients'>Essential Ingredients in Philippines</h1>
                        <p className='mb-4 text-lg'>Philippine cuisine relies on a handful of essential ingredients that define its distinctive flavors and vibrant dishes.
                             Here are some key components:</p>
                        <ol className='flex flex-col gap-3'>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Teff</span> - A tiny, ancient grain native to Ethiopia, teff is the 
                                primary ingredient in injera, the country's staple flatbread. Teff is highly nutritious, packed with protein, fiber, and essential minerals. 
                                It has a slightly nutty flavor and a unique texture that adds character to many Ethiopian dishes.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Berbere</span> - This fiery spice blend is the cornerstone of many 
                                Ethiopian dishes. It typically includes chili peppers, garlic, ginger, basil, fenugreek, and other spices, ground together to create a complex
                                 and aromatic mixture. Berbere adds depth, heat, and a distinctive red color to stews like doro wat and other traditional dishes.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Niter Kibbeh</span> - A spiced clarified butter, niter kibbeh is 
                                infused with garlic, ginger, cardamom, and other spices. It is used to enrich the flavor of many Ethiopian dishes, adding a warm, fragrant, and 
                                slightly nutty taste. Niter kibbeh is an essential ingredient in both savory dishes and some sweet treats.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Mitmita</span> - A potent spice blend made from bird's eye chili peppers, 
                                cardamom, cloves, and salt. Mitmita is often used to season raw meat dishes like kitfo and to add an extra kick to various stews and sauces. 
                                Its vibrant heat and bold flavor make it a favorite among those who enjoy spicy food.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Alicha</span> - Lentils, chickpeas, and split peas are staples in 
                                Ethiopian cuisine, providing a rich source of protein and fiber. These legumes are often used to make hearty stews like shiro (ground chickpea stew) 
                                and misir wat (spicy lentil stew), which are commonly enjoyed during fasting periods and by vegetarians.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Legumes</span> - he words cilantro and culantro are often used 
                                interchangeably in Peru, despite being different things. Both cilantro (Coriandrum sativum, also known as coriander) and culantro (Eryngium foetidum) 
                                have similar flavors, and can be used as alternatives to one another. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Tej</span> - A traditional Ethiopian honey wine, tej is made by fermenting
                                 honey with water and a shrub called gesho, which adds a slightly bitter, hoppy flavor. Tej is often enjoyed during special occasions and celebrations, 
                                 serving as a refreshing and aromatic complement to the rich and spicy flavors of Ethiopian cuisine.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Injera</span> - This large, spongy flatbread made from teff flour is the 
                                foundation of Ethiopian meals. Injera has a slightly sour taste due to the fermentation process and serves as both a plate and a utensil. Diners tear 
                                off pieces of injera to scoop up stews and salads, soaking up the flavors and creating a communal dining experience.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Kollo</span> - A popular snack in Ethiopia, kollo consists of roasted 
                                barley, chickpeas, and other grains. It is often enjoyed as a crunchy and nutritious treat, providing a satisfying contrast to the softer textures of 
                                other Ethiopian dishes. Kollo is a testament to the country's resourceful use of grains in various culinary applications.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Awaze</span> - A spicy condiment made from berbere, water, and 
                                sometimes additional spices or alcohol. Awaze is often used as a dipping sauce or marinade, adding an extra layer of flavor and heat to 
                                grilled meats, injera, and other dishes. Its versatile nature makes it a staple in Ethiopian households and restaurants.</p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-2' id='dishes'>Famous Ethiopian Dishes</h1>
                        <p className='text-lg mb-6 leading-loose'>Ethiopia boasts a rich culinary heritage, and its famous dishes are cherished worldwide. Here are some iconic Ethiopian dishes:</p>
                        <div className='flex justify-evenly w-full h-96 relative mb-16'>
                            { currentIndex > 0 ? <button className='absolute left-0 bottom-48' onClick={() => setCurrentIndex(currentIndex - 2)}>&larr;</button> : null }
                            { currentIndex === 8 ? null : <button className='absolute right-0 bottom-48' onClick={() => setCurrentIndex(currentIndex + 2)}>&rarr;</button> }
                            <div className='flex gap-4 justify-evenly'> 
                                {slicedArray.map((dish) => (
                                    <div key={dish.id} className='w-1/3 h-96 bg-white rounded-md shadow-md homepage-second-background article-cards'>
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
                        <p className='text-lg leading-loose'>Ethiopian cuisine is a testament to the country's rich cultural heritage and its ability to blend 
                            tradition with innovation. From the tangy taste of injera to the fiery flavors of doro wat, Ethiopian food offers a unique and memorable 
                            culinary experience. Whether enjoyed at a local eatery or prepared at home, Ethiopian cuisine invites us to connect with its history and savor 
                            the diverse tastes that make it truly special.<br />
                        </p>
                        <br />
                        <div className='relative'>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute left-10' onClick={handlePhilippineCuisineClick}>&larr; Philippine Cuisine</button>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute right-10 hover:text-orange-300' onClick={handleEthiopianCuisineClick}>Ethiopian Cuisine &rarr;</button>
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
                            <h1 className='pl-2 pt-2 text-lg     font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('essence')}>Regional Diversity</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('ingredients')}>Ingredients</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('dishes')}>Famous Ethiopian Dishes</h1>
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

export default Ethiopian
