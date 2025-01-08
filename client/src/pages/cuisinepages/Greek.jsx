import React from 'react'
import { scrollToId } from '../../service/MainService.js'
import '../../styles/homepagestyles.css'

const Greek = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);

const dishes = [ 
    { id: 1, title: 'Choriatiki', description: 'A traditional Greek salad made with tomatoes, cucumbers, red onions, olives, and feta cheese, dressed with olive oil and oregano.', image: '../images/GreekDishes/choriatiki.jpg' },
    { id: 2, title: 'Moussaka', description: 'A layered dish made with eggplant, ground meat, and béchamel sauce, baked to perfection.', image: '../images/GreekDishes/moussaka.jpg' },
    { id: 3, title: 'Papoutsakia', description: 'Stuffed eggplant with ground meat and béchamel sauce, similar to moussaka but with a twist.', image: '../images/GreekDishes/papoutsakia.jpg' },
    { id: 4, title: 'Pastitsio', description: 'A baked pasta dish with layers of pasta, ground meat, and béchamel sauce, often topped with grated cheese.', image: '../images/GreekDishes/pastitsio.jpg' },
    { id: 5, title: 'Seafood', description: 'Seafood is an important source of (animal) protein in many diets around the world, especially in coastal areas. Semi-vegetarians who consume seafood as the only source of meat are said to adhere to pescetarianism.', image: '../images/GreekDishes/seafood.jpg'},
    { id: 6, title: 'Soutzoutkakia', description: 'Flavor-packed meatballs with loads of aromatics, fresh parsley, and a special blend of spices, including ground cumin and a touch of cinnamon baked in a rich tomato sauce', image: "../images/GreekDishes/soutzoukakia.jpg"},   
    { id: 7, title: 'Souvlaki', description: 'is a Greek fast food consisting of small pieces of meat and sometimes vegetables grilled on a skewer. It is usually eaten straight off the skewer while still hot.', image: '../images/GreekDishes/souvlaki.jpg'},
    { id: 8, title: 'Stifado', description: 'is a classic Greek stew made with tender beef, slow-cooked in a rich tomato sauce, and flavored with pearl onions or shallots, cinnamon, and a touch of vinegar.', image: '../images/GreekDishes/stifado.jpg'},
    { id: 9, title: 'Tomatokeftedes', description: 'are fried tomato balls served as an appetizer on the Greek island of Santorini, and generally Cyclades. The dish is made from crushed or pureed tomatoes fried in oil.', image:'../images/GreekDishes/tomatokeftedes.jpg'},
    { id: 10, title: 'Tzatziki', description: ' is a class of dip, soup, or sauce found in the cuisines of Southeastern Europe and West Asia. It is made of salted strained yogurt or diluted yogurt mixed with cucumbers, garlic, salt, olive oil and red wine vinegar', image: '../images/GreekDishes/tzatziki.jpg'}
];
    
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsToShow = 2;
    const slicedArray = dishes.slice(currentIndex, currentIndex + itemsToShow);

    const handleMexicanCuisineClick = () => {
        window.location.href = '/cuisines/mexican';
    }

    const handleThaiCuisineClick = () => {
        window.location.href ='/cuisines/thai';
    }

    return (
        <div className='flex pt-16 homepage-background overflow-y-auto negative-z-index'>
            <div className='ml-8 mr-8 flex w-full h-full gap-10'>
                <div className='w-2/3 h-auto pr-1'>
                    <div className='h-96 w-4/5 bg-black'>
                        <img src="../images/GreekDishes/greekintroimage.jpeg" alt="title" className='h-full w-full object-cover rounded-sm' />
                    </div>
                    <div>
                        <h1 className='mt-5 mb-5 text-2xl font-bold'>Explore the Rich Diversity of Greek Cuisine and <br />
                         Uncover the Secrets Behind Its Global Fame.</h1>
                    </div>
                    <div className='mb-10 text-sm'>
                        <p>By: Meliorasimpx | {today}</p>
                    </div>
                    <div className='mb-10'>
                        <p className='leading-loose text-lg' id='introduction'>Greek cuisine is a rich tapestry of flavors, colors, and aromas, woven together over millennia. 
                            It reflects the country's vibrant culture, history, and geography. Rooted in ancient traditions, Greek food is known for its simplicity, freshness, 
                            and use of high-quality ingredients.
                        </p><br />
                        <p className='leading-loose text-lg'>
                        The roots of Greek cuisine can be traced back to ancient times, with influences from neighboring civilizations such as the Romans, Byzantines, and Ottomans. 
                        This amalgamation of cultures has resulted in a diverse culinary tradition that emphasizes the use of olive oil, grains, wine, meat, fish, and a variety of 
                        vegetables. Ancient Greek literature often references feasts and banquets, highlighting the significance of food in social and religious contexts. The Greeks 
                        were pioneers in the use of herbs and spices, creating complex flavor profiles that are still celebrated today.
                        </p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='essence'>Mediterranean Diet</h1>
                        <p className='leading-loose text-lg'>
                        Greek cuisine is a key component of the Mediterranean diet, which is lauded for its health benefits. 
                        This diet emphasizes the consumption of fruits, vegetables, whole grains, and healthy fats, while limiting red meat and processed foods. 
                        Studies have shown that adhering to the Mediterranean diet can reduce the risk of chronic diseases such as heart disease and diabetes, and 
                        promote longevity.
                        </p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='ingredients'>Essential Ingredients in Greece</h1>
                        <p className='mb-4 text-lg'>Greek cuisine relies on a handful of essential ingredients that define its distinctive flavors and vibrant dishes.
                             Here are some key components:</p>
                        <ol className='flex flex-col gap-3'>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Olive oil</span> - If a single ingredient can represent the heart of Greek gastronomy, 
                                it's olive oil. There are as many varieties of oils as there are villages in the country, but the national cuisine is built around this small fruit. Olive oil is a crucial 
                                ingredient in Greek cooking.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Feta</span> - Feta is another cornerstone of Greek cuisine and the 
                                undisputed poster product for Greek cheese. The firm but crumbly blocks of salty cheese are traditionally fermented from sheep's milk, but nowadays, 
                                it might be made from cow, goat, or sheep's milk.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Olives</span> - As far as ingredient usage is concerned, olives and olive oil serve two different purposes as ingredients in Greek cooking. 
                                However, because of their importance, the two are never far from each other.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Greek yogurt</span> - Just like the belief that tomatoes are Italian, 
                                it's a common misconception that Greek yogurt comes from Greece. The first act of straining yogurt is hard to pin down, 
                                but it's likely that it came from somewhere in the Fertile Crescent region.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Oregano</span> - Oregano is a common, fragrant type of herb found across Mediterranean 
                                cuisines, especially in Greece. Many countries have unique, native varieties. For instance, Greek oregano is a particular type that features a broader, 
                                larger leaf and thicker stem than its Italian relative. It has a deeper, woodsier flavor and aroma.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Pomegranate</span> - Greek tradition associates pomegranates with luck, abundance, and fertility, 
                                which should completely track with anyone who has ever tasted this fruit in its freshest form. The flavor is kinetic — at once sweet, fruity, refreshing, and puckering. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Garlic</span> - Many international cuisines leverage the bold traits of garlic to impart 
                                pungency to food — Greek cooking is certainly one of them. The bold and aromatic essential is woven intricately into the fabric of Greek cuisine, where it is used in 
                                everything from moussaka to tzatziki.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Tomatoes</span> - Despite being a Mesoamerican plant, tomatoes have been associated with 
                                European cuisines since colonization began. The fruit is now regarded as a quintessential ingredient for cooking Greek food served fresh in an iconic Greek salad 
                                recipe or as part of other bold, acidic dishes.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Phyllo dough</span> - The delicate and flaky feel of phyllo dough is 
                                layered in history and tradition across the landscape of Greek food. Phyllo is a simple dough made from water, wheat flour, and a small bit of fat. 
                                The basic ingredients create a vessel for some of Greece's greatest food. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Honey</span> - In ancient Greek mythology, honeybees were regarded as messengers of the gods. 
                                The gold nectar they left behind was often considered ceremonial, given as a symbol of fertility during marriages. Not much of a gift for newlyweds in this economy, honey 
                                is now a crucial ingredient in Greek cooking and adds a touch of nature's opulence across many different foods.</p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-2' id='dishes'>Famous Greek Dishes</h1>
                        <p className='text-lg mb-6 leading-loose'>Greece boasts a rich culinary heritage, and its famous dishes are cherished worldwide. Here are some iconic Greek dishes:</p>
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
                        <p className='text-lg leading-loose'>Greek cuisine is more than just a way of eating; it is a reflection of the country's history, 
                            geography, and cultural values. The emphasis on fresh, high-quality ingredients, combined with centuries-old culinary traditions, 
                            makes Greek food both delicious and nutritious. Whether enjoyed in a bustling taverna or at a family dinner table, Greek cuisine offers a 
                            taste of the country's rich heritage and a reminder of the importance of good food and good company.<br />
                        </p>
                        <br />
                        <div className='relative'>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute left-10' onClick={handleMexicanCuisineClick}>&larr; Mexican Cuisine</button>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute right-10 hover:text-orange-300' onClick={handleThaiCuisineClick}>Thai Cuisine &rarr;</button>
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
                            <h1 className='pl-2 pt-2 text-lg     font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('essence')}>Mediterranean Diet</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('ingredients')}>Ingredients</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('dishes')}>Famous Greek Dishes</h1>
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

export default Greek
