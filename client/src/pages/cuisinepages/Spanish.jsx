import '../../styles/homepagestyles.css'

const Spanish = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString('en-PH', options);
    
    return (
        <div className='flex pt-16 homepage-background overflow-y-auto negative-z-index'>
            <div className='ml-8 mr-8 flex w-full h-full gap-10'>
                <div className='w-2/3 h-auto pr-1'>
                    <div className='h-96 w-4/5 bg-black'>
                        <img src="../images/Spanish-Seafood-Paella.png" alt="title" className='h-full w-full object-cover rounded-sm' />
                    </div>
                    <div>
                        <h1 className='mt-5 mb-5 text-2xl'>Explore the Different Dishes of the Spanish Cuisine <br />and Why They're So Popular</h1>
                    </div>
                    <div className='mb-10'>
                        <p>By: Meliorasimpx | {today}</p>
                    </div>
                    <div className='mb-10'>
                        <p className='indent-12 '>Spain, a country rich in culture and history, offers a gastronomic experience that is as diverse as its landscapes.
                            Spanish cuisine is renowned for its vibrant flavors, fresh ingredients, and a culinary tradition that dates back centuries.
                            From bustling city markets to quaint village eateries, the food of Spain is a celebration of life itself.</p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2'>Essence</h1>
                        <p className='indent-12'>At the heart of Spanish cuisine lies a timeless philosophy that values simplicity and the quality of ingredients above all else.
                            This culinary tradition is not about complexity or elaborate techniques, but about allowing the natural flavors of the ingredients to shine.
                            Spanish chefs and home cooks alike understand that when you start with the best produce, you need little else to create a memorable dish.</p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-xl font-bold mb-2'>Most Used Ingredients in Spain</h1>
                    </div>
                </div>
                <div className='w-1/5 fixed right-10'>
                    <h1 className='text-xl font-bold mb-2'>Sections</h1>
                    <div className='flex flex-col items-center justify-center gap-2 pl-2'>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full'>Introduction</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full'>Essence</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full'>Ingredients</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full'>Famous Dishes</h1>
                        </div>
                        <div className='w-full h-12 homepage-second-background hover:bg-white hover:text-black transition-all duration-300'>
                            <h1 className='pl-2 pt-2 text-lg font-bold cursor-pointer w-full h-full'>Conclusion</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spanish
