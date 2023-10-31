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
import './styles/Animation.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


function Skills() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
 <div dir='ltr' data-aos="fade-down" data-aos-duration="1600" className='animatebox w-100  mr-14 '>
    <div className="xl:flex xl:flex-row xl:flex-wrap sm:justify-center sm:ite space-x-7 space-y-7 h-full py-10 px-5 sm:flex flex-row flex-wrap">
    <div className='w-40 h-40 border-b-4 border-red-700 mt-7 ml-7 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center' > <img src={html} className='w-1/2 h-50'></img> <span className="font-bold flex justify-center items-center"> HTML </span> </div>
    <div className='w-40 h-40 border-b-4 border-sky-400 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center'> <img src={css} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold"> CSS </span> </div>
    <div className='w-40 h-40 border-b-4 border-amber-300 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center'> <img src={javascript} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold"> Javascript </span>  </div>
    <div className="w-40 h-40 border-b-4 border-indigo-500 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center"> <img src={bootstrap} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold"> Bootstrap </span> </div>
    <div className="w-40 h-40 border-b-4 border-cyan-400 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center"> <img src={tailwindcss} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold">Tailwind CSS </span> </div>
    <div className="w-40 h-40 border-b-4 border-sky-500 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center"> <img src={react} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold"> React.js </span> </div>
    <div className="w-40 h-40 border-b-4 border-blue-200 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center"> <img src={php} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold"> PHP </span> </div>
    <div className="w-40 h-40 border-b-4 border-sky-200 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center"> <img src={mysql} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold"> MySQL </span> </div>
    <div className="w-40 h-40 border-b-4 border-cyan-600 p-2 hover:scale-105 rounded-xl duration-500 flex flex-col justify-center items-center"> <img src={python} className='w-1/2 h-50'></img> <span className="flex justify-center items-center font-bold"> Python </span> </div>
</div>
       </div>
  )
}

export default Skills
