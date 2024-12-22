import React from 'react';
import '../styles/dashboardstyles.css';
import BarGraph from './BarGraph';

const MonthlyLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MonthlyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Dashboard = () => {
  const username = localStorage.getItem('username');
  const date = new Date();
  const format = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today = date.toLocaleDateString('en-PH', format);

  return (
    <div className='pt-16 pr-4 pl-4 h-screen w-full overflow-y-auto'>
      <div className='grid grid-cols-10 grid-rows-10 gap-4'>
        <div className='col-start-1 col-span-6 row-start-1 row-span-2 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-500 text-2xl pt-3 pl-3 rounded-xl shadow-md'>
          Welcome Back <span className='text-gray-600 font-bold'>{username}</span>!
          <h1 className='text-lg mt-2'>{today}</h1>
        </div>
        <div className='col-start-1 col-span-3 bg-blue-400 row-start-3 row-span-2 rounded-lg shadow-md'>
          <h1 className='mt-4 ml-4 font-bold'>Total User Score</h1>
          <h1 className='ml-4 text-3xl font-bold font-sans text-yellow-200'>0</h1>
        </div>
        <div className='col-start-4 col-span-3 bg-blue-500 row-start-3 row-span-2 rounded-lg shadow-md'>
          <h1 className='mt-4 ml-4 font-bold'>Total Recipes Made</h1>
          <h1 className='ml-4 text-3xl font-bold font-sans text-yellow-200'>0</h1>
        </div>
        <div className='col-start-7 col-span-4 bg-green-500 row-start-1 row-span-4 rounded-lg shadow-md'>
          <h1 className='mt-4 ml-4 font-bold text-xl mb-5'>Did you know That?</h1>
          <h1 className='text-center'>The headline is often written last. Despite being the first thing readers see, writers often craft the headline after the article is complete to ensure it perfectly encapsulates the story.</h1>
        </div>
        <div className='col-start-7 col-span-4 bg-green-400 row-start-5 row-span-3 rounded-lg shadow-md'>
          <h1 className='mt-4 ml-4 font-bold text-xl'>Recently Published</h1>
          <h1>(Recipe Title)</h1>
          <h1>(Date Created)</h1>
        </div>
        <div className='col-start-7 col-span-4 bg-green-400 row-start-8 row-span-3 rounded-lg shadow-md'>
        </div>
        <div className='col-start-1 col-span-6 row-start-5 row-span-6 bg-blue-300 rounded-lg shadow-md'>
          <h1 className='mt-2 ml-2 font-bold'>Statistical Overview</h1>
          <BarGraph data={MonthlyData} labels={MonthlyLabels} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
