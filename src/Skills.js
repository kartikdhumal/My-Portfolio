import React from 'react'
import html from './images/html.png'
import css from './images/css.png'
import javascript from './images/javascript.png'
import bootstrap from './images/bootstrap.png'
import tailwindcss from './images/tailwindcss.png'
import php from './images/php.png'
import mysql from './images/mysql.png'
import react from './images/react.png'
import python from './images/python.png'
import git from './images/github.png'
import expressjs from './images/express-js.png'
import nodejs from './images/nodejs.png'
import nextjs from './images/next.png'
import typescript from './images/typescript.png'
import mongodb from './images/mongodb.png'
import './styles/Animation.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


function Skills() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
 <div dir='ltr' data-aos="fade-down" data-aos-duration="1600" className='animatebox w-100 lg:mr-14 sm:mr-0'>
    <div className="xl:flex xl:flex-row xl:flex-wrap sm:justify-center lg:space-x-7 sm:space-x-6 space-y-7 h-full py-10 px-5 sm:flex flex-row flex-wrap">
    <div className='lg:w-40 sm:w-32 h-40 border-b-4 border-red-700 mt-7 ml-7 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center' > <img src={html} className='w-1/2 h-50'></img> <span className="font-bold flex justify-center items-center"> HTML </span> </div>
    <div className='lg:w-40 sm:w-32 h-40 border-b-4 border-sky-400 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center'> <img src={css} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold"> CSS </span> </div>
    <div className='lg:w-40 sm:w-32 h-40 border-b-4 border-amber-300 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center'> <img src={javascript} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold"> Javascript </span>  </div>
    <div className="lg:w-40 sm:w-32 h-40 border-b-4 border-sky-500 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center"> <img src={react} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold"> React.js </span> </div>
    <div className="lg:w-40 sm:w-32 h-40 border-b-4 border-green-400 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center"> <img src={nodejs} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold"> Node.js </span> </div>
    <div className="lg:w-40 sm:w-32 h-40 border-b-4 border-[#494444] p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center"> <img src={expressjs} className='w-1/2 rounded-[50%] h-50'></img> <span className="flex justify-center items-center font-bold"> Express.js </span> </div>
    <div className="lg:w-40 sm:w-32 h-40 border-b-4 border-gray-500 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center"> <img src={nextjs} className='w-1/2 h-50 bg-white rounded-3xl'></img> <span className="flex justify-center items-center font-bold"> Next.js </span> </div>
    <div className="lg:w-40 sm:w-32 h-40 border-b-4 border-[#3178C6] p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center"> <img src={typescript} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold"> Typescript </span> </div>
    <div className="lg:w-40 sm:w-32 h-40 border-b-4 border-green-200 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center"> <img src={mongodb} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold"> MongoDB </span> </div>
    <div className="lg:w-40 sm:w-32 h-40 border-b-4 border-orange-600 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center"> <img src={git} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold"> Git </span> </div>
    <div className="lg:w-40 sm:w-32 h-40 border-b-4 border-cyan-400 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center"> <img src={tailwindcss} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold">Tailwind CSS </span> </div>
    <div className="lg:w-40 sm:w-32 h-40 border-b-4 border-blue-200 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center"> <img src={php} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold"> PHP </span> </div>
    <div className="lg:w-40 sm:w-32 h-40 border-b-4 border-sky-200 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center"> <img src={mysql} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold"> MySQL </span> </div>
</div>
       </div>
  )
}

export default Skills
