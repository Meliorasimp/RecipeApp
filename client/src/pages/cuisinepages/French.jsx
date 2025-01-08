import React from 'react'
import { scrollToId } from '../../service/MainService.js'
import '../../styles/homepagestyles.css'

const French = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);

const dishes = [ 
    { id: 1, title: 'Boeuf Bourguignon', description: 'A classic French dish made with beef braised in red wine, typically served with mushrooms and onions.', image: '../images/FrenchDishes/boeufbourguignon.jpg' },
    { id: 2, title: 'Bouillabaisse', description: 'A traditional fish stew from the Provence region, made with various fish, shellfish, and aromatic herbs.', image: '../images/FrenchDishes/bouillabaisse.jpg' },
    { id: 3, title: 'Cassoulet', description: 'A hearty casserole made with white beans, sausages, and various meats, originating from the southwest of France.', image: '../images/FrenchDishes/cassoulet.jpg' },
    { id: 4, title: 'Chicken Confit', description: 'Chicken cooked slowly in its own fat, resulting in tender and flavorful meat.', image: '../images/FrenchDishes/chickenconfit.jpg' },
    { id: 5, title: 'Croque Monsieur', description: 'A popular French sandwich made with ham and Gruyère cheese, typically served with béchamel sauce.', image: '../images/FrenchDishes/croquemonsieur.jpg' },
    { id: 6, title: 'French Onion Soup', description: 'A comforting soup made with caramelized onions, beef broth, and topped with melted cheese and toasted bread.', image: '../images/FrenchDishes/frenchonionsoup.jpg' },
    { id: 7, title: 'Lamb Shack Navarin' , description: 'is a French ragoût (stew) of lamb or mutton. If made with lamb and vegetables available fresh in the spring, it is called navarin printanier (spring stew).', image: '../images/FrenchDishes/lambshacknavarin.jpg' },
    { id: 8, title: 'Quiche Lorraine', description: 'is a savoury French tart with a filling of cream, eggs, and bacon or ham, in an open pastry case. It was little known outside the French region of Lorraine until the mid-20th century.', image: '../images/FrenchDishes/quichelorraine.jpg'},
    { id: 9, title: 'Salmon En Papillote', description: 'Don’t let the fancy French name fool you.  This is hands down the easiest way to cook fish at home you’ll ever try.' , image:'../images/FrenchDishes/salmonenpapillote.jpg' },
    { id: 10, title: 'Steak Frites', description: 'A classic French dish consisting of a grilled steak served with French fries.', image: '../images/FrenchDishes/steakfrites.jpg' },
];
    
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsToShow = 2;
    const slicedArray = dishes.slice(currentIndex, currentIndex + itemsToShow);

    const handleChineseCuisineClick = () => {
        window.location.href = '/cuisines/chinese'
    }

    const handleMexicanCuisineClick = () => {
        window.location.href = '/cuisines/mexican'
    }

    return (
        <div className='flex pt-16 homepage-background overflow-y-auto negative-z-index'>
            <div className='ml-8 mr-8 flex w-full h-full gap-10'>
                <div className='w-2/3 h-auto pr-1'>
                    <div className='h-96 w-4/5 bg-black'>
                        <img src="../images/FrenchDishes/frenchintroimage.jpeg" alt="title" className='h-full w-full object-cover rounded-sm' />
                    </div>
                    <div>
                        <h1 className='mt-5 mb-5 text-2xl font-bold'>Discover the Diverse Flavors of the French Cuisine and Delve <br />into the Secrets Behind Its Worldwide Recognition.</h1>
                    </div>
                    <div className='mb-10 text-sm'>
                        <p>By: Meliorasimpx | {today}</p>
                    </div>
                    <div className='mb-10'>
                        <p className='leading-loose text-lg' id='introduction'>French cuisine has a rich history that dates back to the Middle Ages. 
                            During this period, French food was heavily influenced by Italian cuisine, especially during the Renaissance when Catherine de' 
                            Medici married Henry II of France. She brought Italian chefs and introduced new ingredients like artichokes, asparagus, and truffles to France.
                        </p><br />
                        <p className='leading-loose text-lg'>
                        The 17th century saw the development of French haute cuisine, with chefs like La Varenne and François Pierre La Varenne 
                        refining cooking techniques and recipes. The 18th and 19th centuries brought further innovation with the introduction of sauces, 
                        soups, and pastries that became staples of French cuisine.
                        </p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='essence'>Regional Diversity</h1>
                        <p className='leading-loose text-lg'>France boasts a variety of regional cuisines, each with its unique ingredients and specialties:
                        </p><br />
                        <ul>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Alsace: </span>Known for its Germanic influence, featuring dishes like choucroute garnie (sauerkraut with sausages) and flammekueche (a thin-crust tart topped with cream, onions, and bacon).</li>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Brittany: </span>Famous for its seafood, particularly oysters and mussels, as well as its crepes and galettes.</li>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Burgundy: </span>Renowned for its wines and dishes like boeuf bourguignon (beef stewed in red wine) and escargots (snails in garlic butter).</li>
                            <li className='leading-loose text-lg font-light'><span className='font-bold'>Provence: </span>Celebrated for its Mediterranean flavors, including bouillabaisse (a fish stew) and ratatouille (a vegetable medley).</li>
                        </ul>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='ingredients'>Essential Ingredients in France</h1>
                        <p className='mb-4 text-lg'>French cuisine relies on a handful of essential ingredients that define its distinctive flavors and vibrant dishes.
                             Here are some key components:</p>
                        <ol className='flex flex-col gap-3'>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Olive oil</span> - A culinary staple that starts many French dishes, olive oil has myriad uses</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Dijon mustard</span> - This slightly spicy mustard is used to thicken a marinade or emulsify a vinaigrette.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Fleur de sel</span> - Traditionally from Brittany, fleur de sel is large salt crystals that form as seawater evaporates. Fleur de sel is sprinkled atop a finished dish.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'> Crème fraîche</span> - This rich garnish is heavy cream mixed with buttermilk. It is used in soups and sauces, and as a topping for something sweet, like a bowl of fruit.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Truffles</span> - This fungus, related to mushrooms, grow in the shade of oak trees in the French countryside and are used to flavor cooking oils and dishes.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Herbes de provence.</span> - Fragrant, dried herbs from Provence like rosemary, thyme, oregano, lavender, and tarragon are combined and used to season savory dishes like poultry and roasted vegetables.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Shallots</span> - In the onion and garlic family, shallots have a milder taste and are used in similar ways as onions in cooking.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>French bread</span> - The French have a long history with bread, 
                                from baguettes to buttery, flaky croissants, and no French-inspired kitchen would be complete without a fresh loaf.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'> Wine</span> - France has one of the most productive wine regions in the world. Red and white wine is a beverage that is also used to simmer meats and create rich sauces. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>French cheeses</span> - The French produce and eat more cheese per person than in any other country. Known as fromage in French, varieties include camembert, Brie, and Roquefort.</p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-2' id='dishes'>Famous French Dishes</h1>
                        <p className='text-lg mb-6 leading-loose'>France boasts a rich culinary heritage, and its famous dishes are cherished worldwide. Here are some iconic French dishes:</p>
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
                        <p className='text-lg leading-loose'>Today, French cuisine continues to evolve, blending traditional techniques with modern innovations. 
                            Chefs like Alain Ducasse and Joël Robuchon have pushed the boundaries of French cooking, creating dishes that are both visually stunning 
                            and delicious. The farm-to-table movement and a renewed emphasis on sustainability have also influenced contemporary French cuisine, 
                            with many chefs focusing on locally-sourced ingredients and seasonal dishes..<br />
                        </p>
                        <br />
                        <div className='relative'>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute left-10' onClick={handleChineseCuisineClick}>&larr; Chinese Cuisine</button>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute right-10 hover:text-orange-300' onClick={handleMexicanCuisineClick}>Mexican Cuisine &rarr;</button>
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
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('dishes')}>Famous French Dishes</h1>
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
