import React from 'react'
import { scrollToId } from '../../service/MainService.js'
import '../../styles/homepagestyles.css'

const American = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);

const dishes = [ 
    { id: 1, title: 'Apple Pie', description: 'A classic American dessert made with a flaky crust and sweet apple filling.', image: '../images/AmericanDishes/applepie.jpg' },
    { id: 2, title: 'Chili', description: 'A hearty stew made with ground beef, beans, tomatoes, and spices.', image: '../images/AmericanDishes/chili.jpg' },
    { id: 3, title: 'Clam Chowder', description: 'A creamy soup made with clams, potatoes, onions, and bacon.', image: '../images/AmericanDishes/clamchowder.jpg' },
    { id: 4, title: 'Cobb Salad', description: 'A salad made with lettuce, tomatoes, bacon, avocado, chicken, and blue cheese.', image: '../images/AmericanDishes/cobbsalad.jpg' },
    { id: 5, title: 'Fried Okra', description: 'A Southern dish made with sliced okra that is breaded and fried until crispy.', image: '../images/AmericanDishes/friedokra.jpg' },
    { id: 6, title: 'Fry Bread', description: 'A Native American dish made with deep-fried dough that is crispy on the outside and soft on the inside.', image: '../images/AmericanDishes/frybread.jpg' },
    { id: 7, title: 'General Tso\'s Chicken', description: 'A popular Chinese-American dish made with deep-fried chicken in a sweet and spicy sauce.', image: '../images/AmericanDishes/generaltsoschicken.jpg' },
    { id: 8, title: 'Hamburger', description: 'A classic American sandwich made with a beef patty, lettuce, tomato, onion, and pickles on a bun.', image: '../images/AmericanDishes/hamburger.jpg' },
    { id: 9, title: 'Peanut Butter and Jelly Sandwich', description: 'A simple sandwich made with peanut butter and jelly on bread.', image: '../images/AmericanDishes/peanutbutterandjellysandwich.jpg' },
    { id: 10, title: 'Red Beans and Rice', description: 'A Creole dish made with red beans, rice, and a variety of seasonings.', image: '../images/AmericanDishes/redbeansand   rice.jpg' },
];
    
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsToShow = 2;
    const slicedArray = dishes.slice(currentIndex, currentIndex + itemsToShow);

    const handleKoreanCuisineClick = () => {
        window.location.href = '/cuisines/korean';
    }

    const handlePhilippineCuisineClick = () => {
        window.location.href ='/cuisines/philippines';
    }

    return (
        <div className='flex pt-16 homepage-background overflow-y-auto negative-z-index'>
            <div className='ml-8 mr-8 flex w-full h-full gap-10'>
                <div className='w-2/3 h-auto pr-1'>
                    <div className='h-96 w-4/5 bg-black'>
                        <img src="../images/AmericanDishes/americanintroimage.jpg" alt="title" className='h-full w-full object-cover rounded-sm' />
                    </div>
                    <div>
                        <h1 className='mt-5 mb-5 text-2xl font-bold'>Embark on a Culinary Journey Through American <br />
                         Cuisine and Unveil the Secrets of Its Global Fame.</h1>
                    </div>
                    <div className='mb-10 text-sm'>
                        <p>By: Meliorasimpx | {today}</p>
                    </div>
                    <div className='mb-10'>
                        <p className='leading-loose text-lg' id='introduction'>American cuisine is a rich and diverse tapestry that reflects the country's extensive history
                             of immigration and cultural amalgamation. It stands as a testament to the melting pot that the United States has become, incorporating elements 
                             from countless culinary traditions to create something both unique and universally appealing.
                        </p><br />
                        <p className='leading-loose text-lg'>
                        The foundation of American cuisine lies in the culinary practices of Native Americans, who introduced early settlers to ingredients 
                        like corn, beans, squash, and wild game. These early influences were soon blended with the cooking techniques and ingredients brought 
                        by European settlers, particularly from England, Spain, France, and the Netherlands. The result was a fusion of old-world traditions 
                        and new-world resources.
                        </p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='essence'>Modern Trends</h1>
                        <p className='leading-loose text-lg'>
                        In recent years, American cuisine has continued to evolve, embracing new trends and dietary preferences. Farm-to-table dining, which emphasizes fresh, 
                        locally-sourced ingredients, has gained widespread popularity. Additionally, there has been a growing interest in plant-based and vegetarian options, 
                        driven by health and environmental concerns.
                        </p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='ingredients'>Essential Ingredients in America</h1>
                        <p className='mb-4 text-lg'>American cuisine relies on a handful of essential ingredients that define its distinctive flavors and vibrant dishes.
                             Here are some key components:</p>
                        <ol className='flex flex-col gap-3'>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Beef</span> - The New York Steak and the ubiquitous hamburger made from 
                                minced beef (the name comes from the pounded style of meat of the German city Hamburg – not ‘ham’) are the most popular exports and have colonised 
                                taste buds around the world</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Beef and pork ribs</span> - Adored cut from the lower part of the animal 
                                which includes ribs and the meat between, prepared for the barbecue typically using a dry spice rub and then often smoked before being cooked on the 
                                barbecue and slathered with barbecue sauce. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Turkey</span> - Native American bird believed to have been offered by 
                                the Indians to the Pilgrims as part of a feast to mark the end of the first hard cold winter in a new land, it has continued to be the 
                                Thanksgiving traditional roast – though the latest trend is to deep fry it whole.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Crab</span> - Beloved up and down the American seaboard, blue crabs 
                                and king crabs are the main varieties, on the West Coast Dungeness crab is popular, in Alaska its the Red King Crab, on the East Coast, the crab 
                                season in Chesapeake Bay marks the start of summer.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Clams</span> - Clam chowder is a popular dish but can refer to a number of different chowders that include clams, 
                                for example cooked in milk or cooked in a stock broth with tomato.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Tomatoes</span> - Native to the Americas, tomatoes find their way into may aspects of cooking in the United States. 
                                Tomato based sauces are a popular accompaniment to grilled or barbequed meat</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Collard greens</span> - A bitter plant that is similar to kale or spinach, 
                                and a staple vegetable of cooking in the South.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Corn/corn meal</span> - A staple native to America, it’s thought that the 
                                American Indians taught early settlers how to grow it and eat it (thereby saving their lives). Whether eaten straight “off the cob” or processed into 
                                cornmeal, its uses are endless. (Cornbread and grits are Southern favourites.)</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Pumpkin/squash</span> - The orange pumpkin that is used famously as the 
                                jack o-lantern in the North American tradition of Halloween, is the only member of the pumpkin, squash, gourd family that is called a pumpkin in the 
                                United States. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Pecans</span> - Native to the USA, the pecan tree is a type of hickory 
                                that produces the pecan nut. Pecan nuts hold a special place in the American heart and in their culinary tradition, the most famous recipe being the 
                                much celebrated pecan pie.</p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-2' id='dishes'>Famous American Dishes</h1>
                        <p className='text-lg mb-6 leading-loose'>America boasts a rich culinary heritage, and its famous dishes are cherished worldwide. Here are some iconic American dishes:</p>
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
                        <p className='text-lg leading-loose'>American cuisine is a vibrant and ever-changing mosaic that mirrors the nation's history, diversity, and innovation. 
                            It is a cuisine that celebrates the old and the new, the traditional and the contemporary, and above all, the rich cultural heritage that defines the 
                            United States. Whether you're indulging in a classic comfort food dish or exploring a modern culinary creation, American cuisine offers something for 
                            everyone to savor and enjoy.<br />
                        </p>
                        <br />
                        <div className='relative'>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute left-10' onClick={handleKoreanCuisineClick}>&larr; Korean Cuisine</button>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute right-10 hover:text-orange-300' onClick={handlePhilippineCuisineClick}>Philippine Cuisine &rarr;</button>
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
                            <h1 className='pl-2 pt-2 text-lg     font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('essence')}>Modern Trends</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('ingredients')}>Ingredients</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('dishes')}>Famous American Dishes</h1>
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


export default American
