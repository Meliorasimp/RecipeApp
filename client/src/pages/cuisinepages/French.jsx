import React from 'react'
import { scrollToId } from '../../service/MainService.js'
import '../../styles/homepagestyles.css'

const French = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);

const dishes = [ 
    { id: 1, title: 'Kung Pao Chicken', description: 'A spicy, stir-fried Chinese dish made with chicken, peanuts, vegetables, and chili peppers.', image: '../images/ChineseDishes/kungpaochicken.jpg' },
    { id: 2, title: 'Mapo Tofu', description: 'A popular Chinese dish from Sichuan province made with tofu, minced meat, and a spicy sauce.', image: '../images/ChineseDishes/mapotofu.jpg' },
    { id: 3, title: 'Peking Roasted Duck', description: 'A famous Chinese dish that originated in Beijing, featuring crispy duck skin and tender meat.', image: '../images/ChineseDishes/pekingroastedduck.jpg' },
    { id: 4, title: 'Dumplings', description: 'A traditional Chinese dish made with dough and filled with meat, vegetables, or seafood.', image: '../images/ChineseDishes/dumplings.jpg' },
    { id: 5, title: 'Hot Pot', description: 'A popular Chinese cooking method where ingredients are cooked in a simmering pot of broth.', image: '../images/ChineseDishes/hotpot.jpg' },
    { id: 6, title: 'Sweet and Sour Pork', description: 'A classic Chinese dish made with deep-fried pork and a tangy sweet and sour sauce.', image: '../images/ChineseDishes/sweetandsourpork.jpg' },
    { id: 7, title: 'Dim Sum', description: 'A style of Chinese cuisine that features small, bite-sized portions of food served in steamer baskets or on small plates.', image: '../images/ChineseDishes/dimsum.jpg' },
    { id: 8, title: 'Char Siu', description: 'A popular Chinese dish made with barbecued pork marinated in a sweet and savory sauce.', image: '../images/ChineseDishes/charsiu.jpg' },
    { id: 9, title: 'Chow Mein', description: 'A Chinese stir-fried noodle dish made with vegetables, meat, and a savory sauce.', image: '../images/ChineseDishes/chowmein.jpg' },
    { id: 10, title: 'Fried Rice', description: 'A classic Chinese dish made with steamed rice stir-fried with vegetables, eggs, and meat.', image: '../images/ChineseDishes/friedrice.jpg' },
];
    
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsToShow = 2;
    const slicedArray = dishes.slice(currentIndex, currentIndex + itemsToShow);

    const handleIndianCuisineClick = () => {
        window.location.href = '/cuisines/indian';
    }

    const handleFrenchCuisineClick = () => {
        window.location.href = '/cuisines/french';
    }

    return (
        <div className='flex pt-16 homepage-background overflow-y-auto negative-z-index'>
            <div className='ml-8 mr-8 flex w-full h-full gap-10'>
                <div className='w-2/3 h-auto pr-1'>
                    <div className='h-96 w-4/5 bg-black'>
                        <img src="../images/ChineseDishes/chineseintroimage.jpg" alt="title" className='h-full w-full object-cover rounded-sm' />
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
                                <p className='leading-loose text-lg font-light'><span className='font-bold'> (Regular or light) soy sauce</span> - Soy sauce is the most iconic and well-known Chinese pantry essential that you likely already have stocked.
                                So many Chinese dishes use this ingredient, and nowadays, many western chefs are adding soy sauce to their pantry arsenal to add extra umami to their dishes.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Garlic (Dà Suàn)</span> - When it comes to garlic, you'll be 
                                hard-pressed to find any authentic Chinese dish that does not have it. As one of the pillars of Chinese cooking - and a 
                                mainstay in our kitchens both now and while growing up - fresh garlic is used in a wide array of dishes. including meat marinades, 
                                soups, vegetable stir-fries and dumpling fillings. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Ginger (Shēng Jiāng)</span> - Another essential Chinese ingredient is 
                                ginger. Ginger is often used as an aromatic in steamed fish dishes. It also features prominently in popular dishes such as Ginger 
                                Chicken and Hainanese Chicken Rice. This fragrant herb can always be found in our kitchens and is widely favoured as it’s believed
                                 by the Chinese to have medicinal properties. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Scallions (Xiāng Cōng)</span> - callions are another of the most common 
                                Chinese ingredients. Its green leafy parts are often used as a garnish while its white parts are used to add a sweet onion flavour to dishes. 
                                Popular Chinese dishes featuring scallions include Stir-Fried Beef with Ginger and Scallions.  </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Sichuan Peppercorns (Huā Jiāo)</span> - Sichuan peppercorns are a 
                                popular Asian spice, harvested dried berries from the Sichuan pepper tree. With a fresh, citrusy flavour, they also deliver a numbing, 
                                tingling effect on the tongue that is best described as electrifying. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Dried Red Chillies (Gān Hóng Là Jiāo)</span> - Sichuan cuisine doesn't 
                                shy away from heat. It wouldn't be complete without dried red chillies to complement the Sichuan peppercorns. The liberal use of dried red chillies 
                                gives every dish it's served with a fiery kick.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Star Anise (Bā Jiǎo)</span> - Star anise is a seed pod from an evergreen 
                                tree native to China and resembles a wooden flower. It has a unique flavour that is warm and spicy, reminiscent of liquorice, 
                                and can be used whole or grounded. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Ground White Pepper (Bái Hújiāo)</span> - In traditional Chinese cooking, 
                                white pepper is the pepper of choice. It adds heat to dishes but is subtler and less complex in flavour compared to black pepper. 
                                We've found that grounded pepper loses its potency quickly. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Five Spice Powder (Wǔxiāng Fěn)</span> - Five Spice Powder is commonly a mixture 
                                of cloves, star anise, cinnamon, fennel and Sichuan peppercorns. This authentic Chinese ingredient is a complex blend of sweet, bitter, sour, salty, 
                                and savoury flavours. It is traditionally thought to promote balance in the body and bring about internal harmony. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Bamboo Shoots (Zhú Sǔn)</span> - While not a traditional aromatic like 
                                garlic or ginger, bamboo shoots add a crunch and subtle, earthy flavour to several dishes. They are commonly used in stir-fries, soups, and as 
                                an ingredient in dumplings and spring roll fillings. </p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-2' id='dishes'>Famous Chinese Dishes</h1>
                        <p className='text-lg mb-6 leading-loose'>China boasts a rich culinary heritage, and its famous dishes are cherished worldwide. Here are some iconic Chinese dishes:</p>
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
                        <p className='text-lg leading-loose'>Chinese cuisine is much more than just a set of recipes; 
                            it is a reflection of the rich cultural heritage and philosophical principles that have shaped Chinese society for thousands of years. 
                            From the delicate art of dim sum to the fiery flavors of Sichuan cuisine, Chinese food offers a diverse and deeply satisfying culinary experience. 
                            Whether you are enjoying a steaming bowl of noodles in Beijing or sampling Cantonese dim sum in Hong Kong, the flavors, textures, 
                            and traditions of Chinese cuisine continue to captivate and inspire people around the world.<br />
                        </p>
                        <br />
                        <div className='relative'>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute left-10' onClick={handleIndianCuisineClick}>&larr; Indian Cuisine</button>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute right-10 hover:text-orange-300' onClick={handleFrenchCuisineClick}>French Cuisine &rarr;</button>
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
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('dishes')}>Famous Chinese Dishes</h1>
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



export default French
