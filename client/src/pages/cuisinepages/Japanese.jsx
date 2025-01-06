import '../../styles/homepagestyles.css'
import React from 'react'
import { scrollToId } from '../../service/MainService.js'

const Japanese = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);

const dishes = [ 
    { id: 1, title: 'Sushi', description: 'Sushi is a Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients such as seafood, vegetables, and occasionally tropical fruits.', image: '../images/JapaneseDishes/sushi.avif' },
    { id: 2, title: 'Ramen', description: 'Ramen is a Japanese noodle soup. It consists of Chinese-style wheat noodles served in a meat- or fish-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork', image: '../images/JapaneseDishes/sushi.avif' },
    { id: 3, title: 'Tempura', description: 'Tempura is a Japanese dish usually consisting of seafood or vegetables that have been battered and deep fried.', image: '../images/JapaneseDishes/sushi.avif' },
    { id: 4, title: 'Udon', description: 'Udon is a type of thick, wheat-flour noodle used frequently in Japanese cuisine. It is often served hot as a noodle soup in its simplest form, as kake udon, in a mildly flavoured broth called kakejiru.', image: '../images/JapaneseDishes/sushi.avif' },
    { id: 5, title: 'Sashimi', description: 'Sashimi is a Japanese delicacy consisting of fresh raw fish or meat sliced into thin pieces and often eaten with soy sauce.', image: '../images/JapaneseDishes/sushi.avif' },
    { id: 6, title: 'Yakitori', description: 'Yakitori is a Japanese type of skewered chicken. Its preparation involves skewering the meat with kushi, a type of skewer typically made of steel, bamboo, or similar materials.', image: '../images/JapaneseDishes/sushi.avif' },
    { id: 7, title: 'Natto', description: 'Nattō is a traditional Japanese food made from soybeans that have been fermented with Bacillus subtilis var. natto. It is often served as a breakfast food.', image: '../images/JapaneseDishes/sushi.avif' },
    { id: 8, title: 'Oden', description: 'Oden is a Japanese one-pot winter dish consisting of several ingredients such as boiled eggs, daikon, konjac, and processed fish cakes stewed in a light, soy-flavored dashi broth.', image: '../images/JapaneseDishes/sushi.avif' },
    { id: 9, title: 'Tofu', description: 'Tofu, also known as bean curd, is a food prepared by coagulating soy milk and then pressing the resulting curds into solid white blocks of varying softness.', image: '../images/JapaneseDishes/sushi.avif' },
    { id: 10, title: 'Donburi', description: 'Donburi is a Japanese rice bowl dish consisting of fish, meat, vegetables or other ingredients simmered together and served over rice.', image: '../images/JapaneseDishes/sushi.avif' },
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
                        <img src="../images/JapaneseDishes/japaneseintroimage.jpg" alt="title" className='h-full w-full object-cover rounded-sm' />
                    </div>
                    <div>
                        <h1 className='mt-5 mb-5 text-2xl '>Discover the Diverse Delicacies of Japanese Cuisine <br /> and Understand Their Widespread Popularity</h1>
                    </div>
                    <div className='mb-10 text-sm'>
                        <p>By: Meliorasimpx | {today}</p>
                    </div>
                    <div className='mb-10'>
                        <p className='indent-12 leading-loose' id='introduction'>Japanese cuisine is a culinary art that harmonizes tradition and innovation, 
                            offering a feast for the senses. Known for its meticulous presentation, fresh ingredients, and balanced flavors, 
                            Japanese food reflects the country's cultural values and reverence for nature. <br /> <br />

                            From sushi and sashimi to ramen and tempura, Japanese cuisine encompasses a wide range of dishes that cater to every palate.
                            Whether you're enjoying a simple bowl of miso soup or indulging in a multi-course kaiseki meal, Japanese food is a celebration of
                            seasonality, simplicity, and craftsmanship.
                        </p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='essence'>Harmony and Balance</h1>
                        <p className='indent-12 leading-loose'>Japanese cuisine is all about balancing flavors, colors, and textures. 
                            Each dish is designed to provide a harmonious experience that pleases the palate and the eyes. 
                            This balance extends to the nutritional aspect, ensuring a healthy mix of proteins, carbohydrates, and fats.</p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='ingredients'>Essential Ingredients in Japan</h1>
                        <p className='indent-12 mb-4'>The foundation of Japanese cuisine is built on a handful of essential ingredients that bring out the unique flavors and character of the dishes. Here are some key components:</p>
                        <ol className='flex flex-col gap-3'>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Soy Sauce</span> - Soy sauce is a key ingredient in any Japanese kitchen. A good quality Japanese soy sauce has a delicate taste allowing it to blend easily with other ingredients bringing out the natural umami in food. </p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Japanese White Rice</span> - Japanese rice is a type of short-grain rice which sticks easily together when cooked, 
                                so it’s perfect for making rice balls and sushi. It’s also easier to eat with chopsticks! The difference between plain 
                                Japanese rice and sushi rice is that sushi rice is seasoned with sushi vinegar and used to make sushi. </p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'> Noodles</span> - There’s a variety of noodles used in Japanese cooking, including ramen, udon, soba and somen. 
                                Ramen noodles are yellowish, thin and made from wheat. They are well-known as one of the main ingredients in ramen broths. 
                                Udon noodles are white, thick and made from wheat flour.</p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'> Japanese Rice Vinegar </span> - Rice vinegar is mostly used to make sushi rice, Japanese salad dressings and some sauces. It has a very delicate taste compared to other vinegars.</p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Japanese Sake</span> - Sake is an alcoholic drink made from rice and adds a nice taste to Japanese dishes. The Japanese use sake the same way as we use wine when cooking in the West. 
                                It’s not necessary to buy an expensive bottle if you’re only using it for cooking.</p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Japanese Seven Spice </span> - In Japanese this is called Shichimi Togarashi. This wonderful collection of seven spices adds an interesting dimension to the taste of a dish and also adds a nutritional explosion, with each spice boasting different health benefits.</p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Tofu</span> - Tofu is low in calories yet high in protein and calcium. There are different types of tofu available in the supermarket including silken tofu which has a soft and delicate texture and is best used in salads and soups, 
                                and firm tofu which has a tougher texture and works better in one pot dishes and stir fries. </p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Japanese Miso</span> - Miso is made from fermented soybeans, salt, rice or barley, and koji (fermentation starter). 
                                There are different types of miso, which vary in colour from light brown to dark red/brown. Generally, the lighter the colour the milder the taste. </p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Seaweed</span> - Seaweed is filled with vitamins and minerals and is an important part of the Japanese diet, from sushi making to simple stocks and salads.</p>
                            </li>
                            <li>
                                <p className='indent-12 leading-loose'><span className='font-bold'>Matcha Powdered Green Tea</span> - I was first introduced to matcha at a traditional Japanese tea ceremony in Japan. During the ceremony a large bowl of matcha was prepared by the tea master and passed around. </p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-2' id='dishes'>Famous Japanese Dishes</h1>
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

export default Japanese
