import React from 'react'
import stylish from './images/stylish.png'
import './styles/About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import './styles/Animation.css'

function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div dir='ltr' className='w-100 justify-between font-medium text-lg flex-col self-center items-center '>
       <div  className='w-100 ml-auto flex flex-col justify-start items-center font-semibold'>
       <img src={stylish} className='stylishimg xl:w-1/2 xl:h-1/4 mt-10 sm:w-3/4 sm:h-2/3 rounded-full shadow-2xl grayscale' ></img>
        <p  className='stylishimg p-6'>
        My name is Kartik Dhumal, I'm an aspiring full stack developer based in Ahmedabad , Gujarat. I completed my Bachelor of Computer Applications at Som Lalit Institute of Computer Applications. Currently I am doing my MCA from Department of Computer Science - Gujarat University </p>

    <p  className='stylishimg pt-1 px-6'> I have developed many types of front-ends from well know applications to Ecommerce platforms. I am eager to join a creative, problem solving team. Ability to learn and implement new technologies quickly. </p>

    <p  className='stylishimg py-6 px-6'>
    I have successfully completed plenty of projects in which I have shown my excellence in different technologies and frameworks, I am undoubtedly good at using Full stack technologies. Currently, I am practicing Data structures & Algoridhams. Furthermore, I am an enthusiastic person and passionate about my career, and I always try to keep a high team spirit.”
       </p>
       </div> 
       <div className='p-8'>

       </div>
    </div>
  )
}

export default About
