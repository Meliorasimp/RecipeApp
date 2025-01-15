import React, { useEffect } from 'react';
import '../styles/dashboardstyles.css';

const About = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.class-hidden');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className='flex justify-center flex-col items-center min-h-screen w-full dashboard-main-background gap-10 overflow-x-hidden'>
      <div className='flex flex-row justify-evenly w-11/12 h-full'>
        <div className='flex-1 flex justify-center items-center h-screen first-section class-hidden'>
          <div className='w-full h-3/4 flex justify-center items-center mr-10'>
            <img src="../images/About/devplaceholder.jpg" alt="" className='w-full h-full object-cover rounded-lg' />
          </div>
        </div>
        <div className='flex-1 flex justify-center items-center h-screen second-section class-hidden'>
          <div className=' w-full h-3/4 flex flex-col justify-center items-start'>
            <p className='text-2xl mb-10'>Meinard Legashki S. Limlengco | Software Developer</p>
            <p className='text-xl leading-relaxed'>
              Hi, I am Meinard Legashki S. Limlengco and I am a Software developer based in the Philippines with a passion for Creating and Learning new things
              alike, I also Like Playing Video games and Watching Movies in Netflix in my free time. <br /><br />
              If you like this Project and want to see more of my work, you can check out my Github Profile by clicking the link below. <br /><br />
              <a href="https://github.com/Meliorasimp" className='text-blue-500 hover:underline'>https://github.com/Meliorasimp</a>
              <br /><br />
              PS: Don't forget to give me a Github stars :P
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-evenly w-11/12 h-full'>
        <div className='flex-1 flex justify-center items-center h-screen mr-10 class-hidden first-section'>
          <div className='w-full h-3/4 flex flex-col justify-center items-start'>
            <h1 className='text-2xl mb-10'>Épicurienne</h1>
            <p className='text-xl leading-relaxed'>
              This Project is aimed for Users to Share Their Recipe and also Teaching myself While Doing the Said projects about the Concepts of the MERN
            </p>
          </div>
        </div>
        <div className='flex-1 flex justify-center items-center w-screen h-screen class-hidden second-section'>
          <div className='w-full h-3/4 flex justify-center items-center'>
            <img src="../images/About/websiteplaceholder.jpg" alt="Website Image" className='w-full h-full object-cover rounded-lg' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
