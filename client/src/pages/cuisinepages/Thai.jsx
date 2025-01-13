import React from 'react'
import { scrollToId } from '../../service/MainService.js'
import '../../styles/homepagestyles.css'

const Thai = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);

const dishes = [ 
    { id: 1, title: 'Green Curry', description: 'A fragrant and spicy curry made with green curry paste, coconut milk, and a variety of vegetables and meats.', image: '../images/ThaiDishes/greencurry.jpg' },
    { id: 2, title: 'Pad Thai', description: 'A popular stir-fried noodle dish made with rice noodles, shrimp or chicken, peanuts, bean sprouts, and lime juice.', image: '../images/ThaiDishes/padthai.jpg' },
    { id: 3, title: 'Green Papaya Salad', description: 'A refreshing salad made with shredded green papaya, tomatoes, peanuts, and a tangy dressing.', image: '../images/ThaiDishes/greenpapayasalad.jpg' },
    { id: 4, title: 'Isan Sausage', description: 'A flavorful sausage made with minced pork, rice, and a blend of herbs and spices, often served with sticky rice.', image: '../images/ThaiDishes/isansausage.jpg' },
    { id:5, title: ' Khao Gee', description: 'A traditional Thai dish consisting of grilled pork served with sticky rice and a spicy dipping sauce.', image: '../images/ThaiDishes/khaogee.jpg' },
    { id: 6, title: 'Larb', description: 'A spicy and tangy salad made with minced meat (usually pork or chicken), herbs, and lime juice.', image: '../images/ThaiDishes/larb.jpg' },
    { id: 7, title: 'Pad See Ew', description: 'A stir-fried noodle dish made with wide rice noodles, soy sauce, and a variety of vegetables and meats.', image: '../images/ThaiDishes/padseeew.jpg' },
    { id: 8, title: 'Panang Curry', description: 'A rich and creamy curry made with red curry paste, coconut milk, and a variety of vegetables and meats.', image: '../images/ThaiDishes/panangcurry.jpg' },
    { id: 9, title: 'Tom Yum Goong', description: 'A spicy and sour soup made with shrimp, lemongrass, lime leaves, and chili peppers.', image: '../images/ThaiDishes/tomyum.jpg' },
    { id: 10, title: 'Khao Pad', description: 'A flavorful fried rice dish made with jasmine rice, vegetables, and a variety of meats.', image: '../images/ThaiDishes/khaopad.jpg' },
];
    
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsToShow = 2;
    const slicedArray = dishes.slice(currentIndex, currentIndex + itemsToShow);

    const handleGreekCuisineClick = () => {
        window.location.href = '/cuisines/greek';
    }

    const handleKoreanCuisineClick = () => {
        window.location.href ='/cuisines/korean';
    }

    return (
        <div className='flex pt-16 homepage-background overflow-y-auto negative-z-index'>
            <div className='ml-8 mr-8 flex w-full h-full gap-10'>
                <div className='w-2/3 h-auto pr-1'>
                    <div className='h-96 w-4/5 bg-black'>
                        <img src="../images/ThaiDishes/thaiintroimage.jpg" alt="title" className='h-full w-full object-cover rounded-sm' />
                    </div>
                    <div>
                        <h1 className='mt-5 mb-5 text-2xl font-bold'>Discover the Vibrant Variety of Thai Cuisine <br /> and Reveal the Secrets to Its Worldwide Acclaim.</h1>
                    </div>
                    <div className='mb-10 text-sm'>
                        <p>By: Meliorasimpx | {today}</p>
                    </div>
                    <div className='mb-10'>
                        <p className='leading-loose text-lg' id='introduction'>Thai cuisine, with its distinct and flavorful dishes, is a culinary tradition rich in history 
                            and variety. At its core, Thai food is characterized by the harmonious balance of four fundamental taste profiles: sweet, sour, salty, and spicy. 
                            This balance is achieved through the meticulous use of fresh herbs, spices, and condiments, creating layers of flavors that are both complex and 
                            satisfying.
                        </p><br />
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='essence'>Historical Influence</h1>
                        <p className='leading-loose text-lg'>
                            Thai cuisine has evolved over centuries, influenced by neighboring countries such as China, India, and Malaysia. 
                            The introduction of Indian curries, Chinese stir-fries, and Malay-inspired satays has contributed to the diverse culinary landscape of Thailand. 
                            Furthermore, the arrival of Portuguese missionaries in the 16th century brought chili peppers to Thai shores, forever transforming the heat level 
                            in Thai dishes.
                        </p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='ingredients'>Essential Ingredients in Thailand</h1>
                        <p className='mb-4 text-lg'>Thai cuisine relies on a handful of essential ingredients that define its distinctive flavors and vibrant dishes.
                             Here are some key components:</p>
                        <ol className='flex flex-col gap-3'>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Thai Fish Sauce</span> - Known in Thai as nam pla, this seasoning is a 
                                pungent brine made from fermenting fish with salt. Check the label: it should contain only anchovies, salt and water. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Curry Paste</span> - Though you can make your own, even in Thailand most 
                                cooks buy premade curry pastes. Red and green varieties can be found at well-stocked supermarkets. Both have notes of galangal, lemongrass and 
                                coriander root. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Vinegar</span> - Along with limes, unseasoned rice vinegar adds sourness 
                                to dressings. Its essential in many dipping sauces, including nam jim that is served with grilled chicken. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Coconut Milk</span> - Used in Thai curries, fresh coconut milk is made 
                                by rinsing the oils out of coconut flesh with warm water. Canned coconut milk is an easy option and widely available in the Asian section of 
                                well-stocked supermarkets.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Rice</span> - Sticky rice, also called glutinous rice, is the staple 
                                in north and northeast Thailand. It is eaten out of hand, like a piece of bread. Jasmine rice is grown throughout central Thailand and is a 
                                staple in much of the country. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Chiles</span> - Fresh and dried chile peppers provide heat in Thai food. 
                                Fresh cayenne chiles are used in curries. Fiery hot Thai "bird" chiles are used in sauces and stir-fries. Refrigerate fresh chiles up to a week or 
                                store in the freezer. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Black Pepper</span> - Black peppercorns were the original source of heat 
                                in Thai food before the arrival of chiles from the Americas in the 16th century. They're part of traditional marinades for grilled chicken and grilled 
                                beef.\.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Limes</span> - Lime juice gives a tart lift to grilled meats, salads and 
                                fried rice. Lime leaves are often used in Thai cooking, but if they're hard to find use freshly grated lime zest to give a similar floral, citrusy aroma
                                 to curries and soups.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Shallots and Garlic</span> - Grilled shallots are chopped and added to 
                                vegetable salsas. For a little crunch and bite, thinly sliced shallots appear in Thai yam (salads) of all kinds. Garlic is crushed or minced and then
                                 tossed into hot oil as a flavoring.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Fresh Herbs</span> - Abundant fresh herbs including cilantro, mint, 
                                Thai basil and Vietnamese coriander add distinctive flavors to everything from salads to curries to fried rice. Thai basil has a sweet anise flavor. 
                                Use it if you can find it, otherwise substitute regular basil.</p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-2' id='dishes'>Famous Thai Dishes</h1>
                        <p className='text-lg mb-6 leading-loose'>Thai boasts a rich culinary heritage, and its famous dishes are cherished worldwide. Here are some iconic Thai dishes:</p>
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
                        <p className='text-lg leading-loose'>In essence, Thai cuisine is a celebration of flavors, textures, and aromas. It reflects the country's rich history, 
                            cultural diversity, and the ingenuity of Thai cooks. Each dish tells a story, and together they paint a vivid picture of Thailand's culinary heritage. 
                            Whether enjoyed on the bustling streets of Bangkok or in a quiet Thai home, the food is a testament to the enduring appeal of this vibrant cuisine.<br />
                        </p>
                        <br />
                        <div className='relative'>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute left-10' onClick={handleGreekCuisineClick}>&larr; Greek Cuisine</button>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute right-10 hover:text-orange-300' onClick={handleKoreanCuisineClick}>Korean Cuisine &rarr;</button>
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
                            <h1 className='pl-2 pt-2 text-lg     font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('essence')}>Historical Influence</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('ingredients')}>Ingredients</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('dishes')}>Famous Thai Dishes</h1>
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

export default Thai
