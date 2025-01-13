import React from 'react'
import { scrollToId } from '../../service/MainService.js'
import '../../styles/homepagestyles.css'
const Indian = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);

const dishes = [ 
    { id: 1, title: 'Chicken 65', description: 'Spicy, deep-fried chicken dish originating from Chennai, India.', image: '../images/IndianDishes/chicken65.jpg' },
    { id: 2, title: 'Kachori', description: 'Deep-fried bread stuffed with lentils, spices, and onions.', image: '../images/IndianDishes/kachori.jpg' },
    { id: 3, title: ' Kathi Rolls', description: 'They consist of a paratha (a type of flatbread) filled with various ingredients, typically including spiced meats, vegetables, and sauces.', image: '../images/IndianDishes/kathirolls.jpg' },
    { id: 4, title: ' Matar Kulcha', description: 'Spicy, tangy, and flavorful street food made with paneer, veggies, and spices.', image: '../images/IndianDishes/matarkulcha.jpg' },
    { id: 5, title: ' Naan', description: 'Soft, fluffy, and slightly chewy flatbread that is a staple in Indian cuisine.', image: '../images/IndianDishes/naan.jpg' },
    { id: 6, title: 'Pakora', description: 'Deep-fried fritters made with chickpea flour and various vegetables.', image: '../images/IndianDishes/pakora.jpg' },
    { id: 7, title: 'Pani Puri', description: 'Small, round, hollow puris filled with a spicy, tangy mixture of flavored water, tamarind chutney, chili, chaat masala, potato, onion, and chickpeas.', image: '../images/IndianDishes/panipuri.jpg' },
    { id: 8, title: 'Paratha', description: 'Flaky, buttery flatbread that is a popular breakfast dish in India.', image: '../images/IndianDishes/paratha.jpg' },
    { id: 9, title: 'Samosas', description: 'Deep-fried pastries filled with spiced potatoes, peas, and lentils.', image: '../images/IndianDishes/samosas.jpg' },
    { id: 10, title: 'Vada Pav', description: 'Spicy potato fritter sandwiched between a pav (bread roll) with chutneys.', image: '../images/IndianDishes/vadapav.jpg' },
];
    
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsToShow = 2;
    const slicedArray = dishes.slice(currentIndex, currentIndex + itemsToShow);

    const handleJapaneseCuisineClick = () => {
        window.location.href = '/cuisines/japanese';
    }

    const handleChineseCuisineClick = () => {
        window.location.href = '/cuisines/chinese';
    }

    return (
        <div className='flex pt-16 homepage-background overflow-y-auto negative-z-index'>
            <div className='ml-8 mr-8 flex w-full h-full gap-10'>
                <div className='w-2/3 h-auto pr-1'>
                    <div className='h-96 w-4/5 bg-black'>
                        <img src="../images/IndianDishes/indianintroimage.jpg" alt="title" className='h-full w-full object-cover rounded-sm' />
                    </div>
                    <div>
                        <h1 className='mt-5 mb-5 text-2xl font-bold'>Discover the Diverse Flavors of Indian Cuisine and Reveal <br /> the Secrets of Its Worldwide Popularity.</h1>
                    </div>
                    <div className='mb-10 text-sm'>
                        <p>By: Meliorasimpx | {today}</p>
                    </div>
                    <div className='mb-10'>
                        <p className='leading-loose text-lg' id='introduction'>Indian cuisine is a vibrant tapestry woven with diverse flavors, 
                            aromatic spices, and rich traditions. It is a reflection of India's vast cultural heritage, regional diversity, and 
                            historical influences. Each dish tells a story of the land, its people, and their culinary legacy.
                        </p><br />
                        <p className='leading-loose text-lg'>
                            One of the most distinctive features of Indian cuisine is its extensive use of spices. 
                            Spices such as cumin, coriander, turmeric, cardamom, and cloves are not just flavor enhancers but 
                            also carry medicinal properties. The art of blending spices, known as "masala," is a skill passed 
                            down through generations. Each region in India has its own unique masala, contributing to the varied 
                            and distinct taste profiles found across the country.
                        </p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='essence'>Symphony of Flavor and Tradition</h1>
                        <p className='leading-loose text-lg'>India's regional diversity is vividly showcased in its cuisine. In the north, 
                            you'll find rich, creamy dishes like butter chicken and paneer tikka, accompanied by naan and roti. 
                            The Mughal influence is evident in the use of dried fruits, nuts, and dairy products. Moving to the south, 
                            the cuisine shifts to lighter, spicier fare, with a focus on rice, lentils, and coconut. Dishes like dosa, idli, 
                            and sambar are staples, often served with tangy chutneys.</p>
                        <p className='leading-loose text-lg'> <br />
                        In the western region, Gujarati cuisine is known for its vegetarian dishes, featuring a balance of sweet, salty, 
                        and spicy flavors. Maharashtra offers a mix of coastal and inland flavors, with seafood playing a prominent role. 
                        The eastern region, particularly Bengal, is famous for its fish dishes, mustard oil, and sweets like rasgulla and sandesh.
                        </p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='ingredients'>Essential Ingredients in India</h1>
                        <p className='mb-4 text-lg'>Indian cuisine relies on a handful of essential ingredients that define its distinctive flavors and vibrant dishes.
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
                        <p className='text-lg leading-loose'>In conclusion, Indian cuisine is a celebration of diversity, 
                            tradition, and innovation. Its emphasis on spices, regional specialties, and fresh ingredients creates 
                            a culinary landscape that is both rich and varied. Whether enjoying a humble home-cooked meal or a lavish banquet, 
                            Indian food offers a journey of flavors that captivates and delights the senses.<br />
                        </p>
                        <br />
                        <div className='relative'>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute left-10' onClick={handleJapaneseCuisineClick}>&larr; Italian Cuisine</button>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute right-10 hover:text-orange-300' onClick={handleChineseCuisineClick }>Chinese Cuisine &rarr;</button>
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

export default Indian
