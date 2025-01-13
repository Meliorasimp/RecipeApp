import React from 'react'
import { scrollToId } from '../../service/MainService.js'
import '../../styles/homepagestyles.css'

const Korean = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);

const dishes = [ 
    { id: 1, title: 'Bibimbap', description: 'A mixed rice dish with vegetables, meat, and a spicy sauce.', image: '../images/KoreanDishes/bibimbap.jpg' },
    { id: 2, title: 'Bossam', description: 'A boiled pork dish served with fermented cabbage and dipping sauces.', image: '../images/KoreanDishes/bossam.jpg' },
    { id: 3, title: 'Bulgogi', description: 'Marinated beef grilled to perfection, often served with rice and vegetables.', image: '../images/KoreanDishes/bulgogi.jpg' },
    { id: 4, title: 'Chapchae', description: 'Stir-fried glass noodles with vegetables and meat, often seasoned with soy sauce and sesame oil.', image: '../images/KoreanDishes/chapchae.jpg' },
    { id: 5, title: 'Dongchimi', description: 'A refreshing radish kimchi, perfect for balancing spicy dishes.', image: '../images/KoreanDishes/dongchimi.jpg' },
    { id: 6, title: 'Galbi', description: 'Grilled marinated beef short ribs, often served with rice and side dishes.', image: '../images/KoreanDishes/galbi.jpg' },
    { id: 7, title: 'Galbitang', description: 'A hearty soup made with beef short ribs, vegetables, and a flavorful broth.', image: '../images/KoreanDishes/galbitang.jpg' },
    { id: 8, title: 'Kimchi Jjigae', description: 'A spicy kimchi stew with tofu, pork, and vegetables.', image: '../images/KoreanDishes/kimchijjigae.jpg' },
    { id: 9, title: 'Mandoo', description: 'Korean dumplings filled with meat and vegetables, often steamed or boiled.', image: '../images/KoreanDishes/mandoo.jpg' },
    { id: 10, title: 'Seolleongtang', description: 'A milky beef bone soup, often served with rice and side dishes.', image: '../images/KoreanDishes/seollangtang.jpg' },
];
    
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsToShow = 2;
    const slicedArray = dishes.slice(currentIndex, currentIndex + itemsToShow);

    const handleThaiCuisineClick = () => {
        window.location.href = '/cuisines/thai';
    }

    const handleAmericanCuisineClick = () => {
        window.location.href ='/cuisines/american';
    }

    return (
        <div className='flex pt-16 homepage-background overflow-y-auto negative-z-index'>
            <div className='ml-8 mr-8 flex w-full h-full gap-10'>
                <div className='w-2/3 h-auto pr-1'>
                    <div className='h-96 w-4/5 bg-black'>
                        <img src="../images/KoreanDishes/koreanintroimage.jpeg" alt="title" className='h-full w-full object-cover rounded-sm' />
                    </div>
                    <div>
                        <h1 className='mt-5 mb-5 text-2xl font-bold'>Unveil the Diverse Delights of Korean Cuisine <br />
                        and Uncover the Secrets Behind Its Global Renown.</h1>
                    </div>
                    <div className='mb-10 text-sm'>
                        <p>By: Meliorasimpx | {today}</p>
                    </div>
                    <div className='mb-10'>
                        <p className='leading-loose text-lg' id='introduction'>Korean cuisine, with its rich flavors and unique culinary techniques, is a testament to the 
                            country's cultural heritage and gastronomic innovation. Known for its vibrant colors and harmonious balance of tastes, Korean food is 
                            a delightful exploration of tradition and modernity.
                        </p><br />
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='essence'>Cultural Significance</h1>
                        <p className='leading-loose text-lg'>
                            Food is an integral part of Korean culture and social life. Meals are often communal, emphasizing the importance of family and community. 
                            The practice of sharing multiple dishes, known as banchan, fosters a sense of togetherness and allows for the enjoyment of a variety of 
                            flavors in one sitting. Traditional Korean meals are often accompanied by rituals and customs, such as bowing to elders before eating.
                        </p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='ingredients'>Essential Ingredients in Korea</h1>
                        <p className='mb-4 text-lg'>Korean cuisine relies on a handful of essential ingredients that define its distinctive flavors and vibrant dishes.
                             Here are some key components:</p>
                        <ol className='flex flex-col gap-3'>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Roasted sesame seeds (Bokken chamggae: 볶은 참깨)</span> - Roasted sesame 
                                seeds are usually used in a dish as a garnish. It adds a nutty warm flavor and nice crunchy texture to the dish. Typically it is 
                                used in Korean vegetable side dishes (Namul, 나물) and also in dipping sauces.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Rice wine/cooking wine (Mirim: 미림) </span> - It gets rid of the meat 
                                smell and it’s also known to add a slightly sweet note to the main dish. Japanese Mirin (미린) does the same job. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Napa cabbage/ Chinese cabbage/ Wombok (Baechu: 배추)</span> - Napa cabbage 
                                is most commonly used when making Kimchi, which means it is a VERY important ingredient. Napa cabbage is also used in a sautéed side dish, 
                                in napa cabbage soup (Baechuguk) and it can also be used as a wrap (Ssam, 쌈).</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Perilla leaves (Gganip: 깻잎) </span> - Perilla leaves are used in 
                                a pickled side dish, in stir fry and as a wrap. They are part of the mint family and have a strong aroma. They are similar to Japanese shiso, 
                                but they are known to have a different flavor and shape.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Sea kelp (Dashima: 다시마)</span> - Sea kelp (also known as Kombu) is 
                                mainly used when making stock (Korean style dashi). You buy dried sea kelp and soak it in a bowl of water for 1 hour (or more) to use. In this case, 
                                you’re mainly using the water that’s been sitting with the sea kelp not the sea kelp itself. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Dried anchovy (Marun Myeolchi: 마른 멸치) </span> - Large dried anchovy is 
                                used when making stock (Korean style dashi). Small to medium dried anchovy is used when making braised or stir fried Korean side dishes.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Seaweed (Gim: 김)</span> - Non-seasoned seaweed is most commonly used 
                                when making Kimbap (김밥, Korean rice rolls) or as a garnish in rice cake soup. Seasoned seaweed is used as a side dish. Slightly salty and sesame 
                                oil brushed seaweed is particularly popular with kids. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Korean fish cakes (Eomuk: 어묵)</span> - Korean fish cakes are commonly 
                                used in stir fry dishes or in soup. They are available in a few different shapes (e.g. square, rectangle, round, bar etc).</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Korean pork belly (Samgyeopsal: 삼겹살)</span> - Koreans love Samgyeopsal. 
                                Samgyeop means three layer so Samgyeopsal means three layered meat. This meat is typically used on a BBQ. It is popular in both the non-marinated 
                                and marinated way.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Sirloin (Deungshim:등심)  or Tenderloin (Anshim: 안심)</span> - Beef sirloin
                                 or tenderloin is commonly used when making Bulgogi (Korean marinated BBQ beef, 불고기), Miyeok guk (Korean seaweed soup, 미역국) and  Japchae 
                                 (Korean glass noodles, 잡채).</p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-2' id='dishes'>Famous Korean Dishes</h1>
                        <p className='text-lg mb-6 leading-loose'>Korea boasts a rich culinary heritage, and its famous dishes are cherished worldwide. Here are some iconic Korean dishes:</p>
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
                        <p className='text-lg leading-loose'>Korean cuisine is a vibrant and dynamic aspect of Korea's cultural identity. 
                            From the iconic kimchi to the elaborate bibimbap, each dish offers a glimpse into the country's rich history and culinary artistry. 
                            The meticulous balance of flavors and the emphasis on communal dining make Korean food not just a meal, but a cultural experience. 
                            Whether enjoyed in a traditional Korean home or at a modern fusion restaurant, Korean cuisine continues to captivate and delight food enthusiasts 
                            around the world.<br />
                        </p>
                        <br />
                        <div className='relative'>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute left-10' onClick={handleThaiCuisineClick}>&larr; Thai Cuisine</button>
                            <button className='homepage-second-background mt-6 px-4 py-2 rounded-xl absolute right-10 hover:text-orange-300' onClick={handleAmericanCuisineClick}>American Cuisine &rarr;</button>
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
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('dishes')}>Famous Korean Dishes</h1>
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


export default Korean
