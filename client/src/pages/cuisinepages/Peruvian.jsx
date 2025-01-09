import React from 'react'
import { scrollToId } from '../../service/MainService.js'
import '../../styles/homepagestyles.css'

const Peruvian = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);

const dishes = [ 
    { id: 1, title: 'Aji De Gallina', description: 'Aji de Gallina is a traditional Peruvian dish made with shredded chicken, aji amarillo (yellow chili pepper), walnuts, and bread. It is typically served with rice, boiled potatoes, and hard-boiled eggs.', image: '../images/PeruvianDishes/ajidegallina.jpg' },
    { id: 2, title: 'Anti-Cuchos De Corazon', description: 'Anticuchos are skewers of marinated beef heart, grilled to perfection. They are a popular street food in Peru and are typically served with boiled potatoes and aji sauce.', image: '../images/PeruvianDishes/anticuchosdecorazon.jpg' },
    { id: 3, title: 'Arroz Con Pato', description: 'Arroz con Pato is a traditional Peruvian dish made with rice, duck, aji amarillo (yellow chili pepper), and cilantro. It is typically served with boiled potatoes and salsa criolla.', image: '../images/PeruvianDishes/arrozconpato.jpg' },
    { id: 4, title: 'Causa', description: 'Causa is a traditional Peruvian dish made with layers of mashed potatoes, avocado, and a filling of your choice (such as chicken, tuna, or shrimp). It is typically served cold and garnished with hard-boiled eggs, olives, and lettuce.', image: '../images/PeruvianDishes/causa.jpg' },
    { id: 5, title: 'Cuy', description: 'Cuy (guinea pig) is a traditional Peruvian dish that is typically roasted or fried whole. It is considered a delicacy in Peru and is often served with potatoes and aji sauce.', image: '../images/PeruvianDishes/cuy.jpg' },
    { id: 6, title: 'Lomo Saltado', description: 'Lomo Saltado is a traditional Peruvian stir-fry made with beef, tomatoes, onions, and aji amarillo (yellow chili pepper). It is typically served with rice and french fries.', image: '../images/PeruvianDishes/lomosaltodo.jpg' },
    { id: 7, title: 'Papa A La Huancaína', description: 'Papa a la Huancaína is a traditional Peruvian dish made with boiled potatoes, aji amarillo (yellow chili pepper), queso fresco (fresh cheese), and evaporated milk.', image: '../images/PeruvianDishes/papasalahuancaina.jpg' },
    { id: 8, title: 'Pollo A La Brasa', description: 'Pollo a la Brasa is a traditional Peruvian dish made with marinated rotisserie chicken. It is typically served with french fries, salad, and aji sauce.', image: '../images/PeruvianDishes/polloalabrasa.jpg' },
    { id: 9, title: 'Rocoto Relleno', description: 'Rocoto Relleno is a traditional Peruvian dish made with rocoto peppers stuffed with a mixture of ground beef, onions, garlic, and spices. It is typically served with potatoes and cheese.', image: '../images/PeruvianDishes/rocotorelleno.jpg' },
    { id: 10, title: 'Ceviche', description: 'Ceviche is a traditional Peruvian dish made with raw fish marinated in lime juice, onions, aji amarillo (yellow chili pepper), and cilantro. It is typically served with sweet potatoes, corn, and lettuce.', image: '../images/PeruvianDishes/ceviche.jpg' },
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
                        Experience a culinary adventure with Peruvian cuisine <br /> and discover the secrets behind its worldwide acclaim.</h1>
                    </div>
                    <div className='mb-10 text-sm'>
                        <p>By: Meliorasimpx | {today}</p>
                    </div>
                    <div className='mb-10'>
                        <p className='leading-loose text-lg' id='introduction'>Peruvian cuisine is a reflection of the rich cultural and historical tapestry of Peru. 
                            It is an amalgamation of diverse influences, including indigenous traditions, Spanish, African, and Asian (particularly Japanese and Chinese) 
                            culinary practices. This unique fusion has given rise to a gastronomic experience that is both diverse and deeply rooted in the country’s history 
                            and geography.
                        </p><br />
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='essence'>Regional Diversity</h1>
                        <p className='leading-loose text-lg'>
                            Peruvian cuisine varies significantly across different regions. The coast is known for its seafood dishes, 
                            especially ceviche. The highlands offer hearty meals featuring potatoes, corn, and meats like alpaca. 
                            The Amazon region boasts exotic ingredients such as tropical fruits and freshwater fish.
                        </p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2' id='ingredients'>Essential Ingredients in Philippines</h1>
                        <p className='mb-4 text-lg'>Philippine cuisine relies on a handful of essential ingredients that define its distinctive flavors and vibrant dishes.
                             Here are some key components:</p>
                        <ol className='flex flex-col gap-3'>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Potato</span> -  A native Peruvian specialty, the potato is a staple, 
                                especially in the Andean highlands. Some 3,000 varieties grow in Peru, so you’ll never be short of a new potato to try. Which of these spuds has the 
                                most value in Peruvian food is open to debate, but the papa amarilla (yellow potato) has a strong case to make.  </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Red onion</span> - The standard yellow onion commonly used in Europe 
                                and the USA is something of a rarity in Peru compared to the smaller, sweeter red onion. Red onions are used in almost everything, including classics 
                                like ceviche, lomo saltdo, escabeche, and many more.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Tomato</span> - Frequently used in salads and sauces, tomatoes are pretty 
                                fundamental in Peruvian cuisine, without being fancy. They rarely take center stage, but serve with honor when called upon.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Ají amarillo</span> - Peru produces a wide range of chili peppers, but 
                                none are as important as ají amarillo (yellow chili, although it’s more orange than yellow). This fairly mild chili pepper is used to make classic 
                                Peruvian dishes such as ají de gallina, causa rellena, papa a la huancaína, tiraditos, escabeches and many more.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Ají rocoto</span> - Generally speaking, Peruvian food isn’t spicy-hot. 
                                But when ají rocoto is involved, things can get fiery. Ají rocoto is used to make potent chili sauces, normally served on the side rather than 
                                incorporated into a dish, allowing you to add as you see fit. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Culantro / Cilantro</span> - he words cilantro and culantro are often used 
                                interchangeably in Peru, despite being different things. Both cilantro (Coriandrum sativum, also known as coriander) and culantro (Eryngium foetidum) 
                                have similar flavors, and can be used as alternatives to one another. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Maize</span> - Peru is home to a few varieties of native maize (corn). 
                                Large-kernelled Peruvian maize is a key ingredient, especially in the Andean highlands. Known as choclo in Peru, it serves as an accompaniment to 
                                dishes like ceviche and chicharrón de chancho, and in dishes such as pastel de choclo and humitas. </p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Beans</span> - Beans are a popular accompaniment to many dishes, 
                                especially rice-based dishes (with the exception of chifa). When you buy a rice-based lunchtime menú, there’s a good chance it’ll come with beans. 
                                Various types of frejoles (beans) are cultivated in Peru, including lima beans.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Queso fresco</span> - Peru isn’t a good country for interesting cheeses. 
                                But the light and milky queso fresco does find its way into a few tasty dishes, including papa a la huancaína, ocopa arequipeña and in solteritos.</p>
                            </li>
                            <li>
                                <p className='leading-loose text-lg font-light'><span className='font-bold'>Evaporated milk</span> - Evaporated milk is an important ingredient in 
                                Peruvian desserts like arroz con leche and the classic suspiro limeño. But it’s also used in many savory sauces and dishes, including ají de gallina, 
                                papa a la huancaína and ocopa.</p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-2' id='dishes'>Famous Peruvian Dishes</h1>
                        <p className='text-lg mb-6 leading-loose'>Peru boasts a rich culinary heritage, and its famous dishes are cherished worldwide. Here are some iconic Peruvian dishes:</p>
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
                        <p className='text-lg leading-loose'>Peruvian cuisine is a testament to the country's rich cultural heritage and its ability to adapt and innovate. 
                            It is a celebration of diverse influences coming together to create a unique culinary identity. Whether it's the spicy tang of ceviche or the 
                            comforting warmth of aji de gallina, Peruvian cuisine offers a gastronomic journey that delights the senses and tells the story of a nation.<br />
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
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full' onClick={() => scrollToId('dishes')}>Famous Peruvian Dishes</h1>
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

export default Peruvian
