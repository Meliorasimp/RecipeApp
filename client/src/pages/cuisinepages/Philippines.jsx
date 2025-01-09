import React from 'react'
import { scrollToId } from '../../service/MainService.js'
import '../../styles/homepagestyles.css'


const Philippines = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);

const dishes = [ 
    { id: 1, title: 'Balut', description: 'Balut is a fertilized duck egg with a partially developed embryo inside that is boiled and eaten in the shell. It is considered a delicacy in the Philippines and other Southeast Asian countries.', image: '../images/PhilippinesDishes/balut.jpg' },
    { id: 2, title: 'BetaMax', description: 'Betamax is a popular street food in the Philippines made from coagulated pork or chicken blood that is skewered, grilled, and served with a vinegar dipping sauce.', image: '../images/PhilippinesDishes/betamax.jpg' },
    { id: 3, title: 'Chicharon', description: 'Chicharon is a crispy pork rind snack that is popular in the Philippines. It is made by deep-frying pork skin until it puffs up and becomes crispy.', image: '../images/PhilippinesDishes/chicharon.jpg' },
    { id: 4, title: 'Dinuguan', description: 'Dinuguan is a savory Filipino stew made from pork meat and offal cooked in a rich, dark gravy of pig blood, vinegar, and spices. It is often served with rice or puto (steamed rice cakes).', image: '../images/PhilippinesDishes/dinuguan.jpg' },
    { id: 5, title: 'Lechon', description: 'Lechon is a popular Filipino dish of roasted whole pig that is crispy on the outside and tender and juicy on the inside. It is often served at special occasions and celebrations.', image: '../images/PhilippinesDishes/lechon.jpg' },
    { id: 6, title: 'Okoy', description: 'Okoy is a Filipino shrimp fritter made with small shrimp, grated green papaya, and bean sprouts mixed in a batter and deep-fried until crispy. It is often served with a vinegar dipping sauce.', image: '../images/PhilippinesDishes/okoy.jpg' },
    { id: 7, title: 'Pancit', description: 'Pancit is a Filipino noodle dish that is stir-fried with vegetables, meat, and seafood. It is a popular dish in the Philippines and is often served at special occasions and celebrations.', image: '../images/PhilippinesDishes/pancit.jpg' },
    { id: 8, title: 'Pandesal', description: 'Pandesal is a popular Filipino bread roll that is soft, fluffy, and slightly sweet. It is often eaten for breakfast or as a snack and is best enjoyed fresh and warm from the oven.', image: '../images/PhilippinesDishes/pandesal.jpg' },
    { id: 9, title: 'Sinigang', description: 'Sinigang is a Filipino sour soup made with pork, beef, or seafood and a variety of vegetables like water spinach, radish, and eggplant. It is flavored with tamarind or other souring agents.', image: '../images/PhilippinesDishes/sinigang.jpg' },
    { id: 10, title: 'Tinola', description: 'Tinola is a Filipino chicken soup made with chicken, ginger, garlic, and green papaya or chayote. It is a comforting and nourishing dish that is often served with rice.', image: '../images/PhilippinesDishes/tinola.jpg' },

];
    
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsToShow = 2;
    const slicedArray = dishes.slice(currentIndex, currentIndex + itemsToShow);

    const handleAmericanCuisineClick = () => {
        window.location.href = '/cuisines/american';
    }

    const handlePeruvianCuisineClick = () => {
        window.location.href ='/cuisines/peruvian';
    }

    return (
        <div className='flex pt-16 homepage-background overflow-y-auto negative-z-index'>
            <div className='ml-8 mr-8 flex w-full h-full gap-10'>
                <div className='w-2/3 h-auto pr-1'>
                    <div className='h-96 w-4/5 bg-black'>
                        <img src="../images/PhilippinesDishes/philippinesintroimage.jpg" alt="title" className='h-full w-full object-cover rounded-sm' />
                    </div>
                    <div>
                        <h1 className='mt-5 mb-5 text-2xl font-bold'>Embark on a Culinary Journey Through Philippine <br />
                         Cuisine and Unveil the Secrets of Its Global Fame.</h1>
                    </div>
                    <div className='mb-10 text-sm'>
                        <p>By: Meliorasimpx | {today}</p>
                    </div>
                    <div className='mb-10'>
                        <p className='leading-loose text-lg' id='introduction'>The cuisine of the Philippines is a vibrant and colorful reflection of the nation's diverse history 
                            and culture. A fusion of indigenous flavors and influences from Spanish, Chinese, American, and other international cuisines, Philippine food offers a 
                            unique and tantalizing culinary experience. This gastronomic journey through the archipelago reveals a tapestry of flavors, ingredients, and cooking 
                            techniques that have evolved over centuries.
                        </p><br />
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='essence'>Regional Specialties</h1>
                        <p className='leading-loose text-lg'>
                        The Philippines' regional diversity is reflected in its culinary offerings. Each region boasts its own specialty dishes, often influenced by local 
                        ingredients and cultural traditions. In the northern region of Ilocos, the cuisine is characterized by its use of fermented fish sauces and hearty dishes 
                        like pinakbet (a vegetable stew with shrimp paste) and bagnet (crispy fried pork). In the Bicol region, known for its spicy dishes, coconut milk and chili 
                        peppers are prominently featured in dishes like Bicol Express (pork stew in coconut milk with chilies) and laing (taro leaves cooked in coconut milk).
                        </p>
                        <p className='leading-loose text-lg'><br />
                        The Visayas region is famous for its seafood dishes, with kinilaw (raw fish marinated in vinegar) and inasal (grilled chicken) being popular choices. 
                        In Mindanao, the southernmost region, the cuisine is influenced by Malay, Indonesian, and Muslim cultures. Here, dishes like beef rendang (slow-cooked beef 
                        in coconut milk and spices) and satti (grilled meat skewers with a spicy sauce) are commonly enjoyed.
                        </p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='ingredients'>Essential Ingredients in Philippines</h1>
                        <p className='mb-4 text-lg'>Philippine cuisine relies on a handful of essential ingredients that define its distinctive flavors and vibrant dishes.
                             Here are some key components:</p>
                        <ol className='flex flex-col gap-3'>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Vinegar</span> - Acidity plays a more prominent role in Filipino cuisine 
                                than it does in many other food traditions; as such, it makes sense that vinegar is an essential Filipino pantry staple. In addition to providing a 
                                sourness, vinegar can also increase the shelf life of food, an attribute traditionally prized in the Philippines, which has a hot climate that causes 
                                food to spoil quickly. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Toyo</span> - "Toyo" is the Tagalog word for soy sauce. While soy sauce 
                                didn't originate in the Philippines (it came from China) the version used in the Philippines has its own special flavor. Made with water, salt, 
                                soybeans, caramel color, and wheat, it has a thin texture and an extra salty taste compared to soy sauce from other countries.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Calamansi</span> - Besides vinegar, calamansi is the other main source of 
                                acidity in Filipino cuisine. The fruit is also called by the names calamondin, Philippine lemon, and Philippine lime. The flavor of this citrus fruit 
                                is bright and acidic, somewhat similar to conventional limes and lemons. The peel is usually green, though in the rare instances when you can find fully
                                 ripe calamansi, the peel will be orange. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Banana ketchup</span> - While the idea of putting bananas in ketchup might 
                                seem odd at first, it really doesn't taste that different from tomato ketchup. The banana flavor isn't very strong. The Filipino sauce is a little 
                                sweeter and less tangy than tomato ketchup due to the natural sweetness of the bananas and the fact that it's made without vinegar. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Mang Tomas All-Purpose Sauce</span> - Like most Filipino lechon sauces, the 
                                classic recipe of Mang Tomas included ground liver, but the modern version no longer contains this ingredient. Instead, it's a thick, pasty mixture of 
                                water, vinegar, breadcrumbs, sugar, spices, and flavor enhancers. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Shrimp paste</span> - When shopping for Filipino shrimp paste, 
                                it's helpful to know the names of the different types to make sure you're buying the right kind for your intended recipe. The raw type is known as 
                                bagoong alamang; it's usually light pink to reddish in color and sometimes includes visible pieces of shrimp. Sautéed shrimp paste, ginisang bagoong 
                                alamang, is made by frying the raw kind with oil (or pork fat) and aromatics like garlic, onion, and chiles. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Fish sauce</span> - The fish sauce used in the Philippines isn't 
                                dramatically different from the type used in Southeast Asian countries like Vietnam, but it's an important enough part of Filipino cuisine to 
                                warrant a place on this list. Like shrimp paste, fish sauce is made by salting seafood and letting it ferment — essentially, it's a controlled 
                                rotting process. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Ube</span> - Ube is a type of Filipino purple yam that tastes like a 
                                sweeter, vanilla-and-nut-inflected version of a standard orange sweet potato. Although it can be cooked in savory recipes, its high-sugar content 
                                makes Ube ideal for desserts. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Siling labuyo</span> - This tiny chile looks like a smaller version of a 
                                Thai birdseye and packs a serious punch, with a Scoville rating of up to 100,000, 40 times hotter than a jalapeño. In addition to the fruit, the leaves
                                 of the plant can also be used to flavor soups.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Achuete</span> - The spice is used to add yellow-orange color to dishes 
                                like kare kare, which is a beef stew cooked in peanut butter–based gravy seasoned with fish sauce and achuete.</p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-2' id='dishes'>Famous Filipino Dishes</h1>
                        <p className='text-lg mb-6 leading-loose'>Philippines boasts a rich culinary heritage, and its famous dishes are cherished worldwide. Here are some iconic Filipino dishes:</p>
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
                        <p className='text-lg leading-loose'>Philippine cuisine is a living testament to the country's rich history, cultural diversity, and culinary creativity. 
                            It is a cuisine that celebrates the harmony of flavors and the art of combining ingredients to create dishes that are both comforting and exciting. 
                            Whether enjoyed in a humble carinderia (local eatery) or a high-end restaurant, Filipino food offers a unique and memorable culinary adventure that 
                            continues to captivate and delight food enthusiasts around the world.<br />
                        </p>
                        <br />
                        <div className='relative'>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute left-10' onClick={handleAmericanCuisineClick}>&larr; American Cuisine</button>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute right-10 hover:text-orange-300' onClick={handlePeruvianCuisineClick}>Peruvian Cuisine &rarr;</button>
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
                            <h1 className='pl-2 pt-2 text-lg     font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('essence')}>Regional Specialty</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('ingredients')}>Ingredients</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('dishes')}>Famous Philippines Dishes</h1>
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


export default Philippines
