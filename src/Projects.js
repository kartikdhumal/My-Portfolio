import React from 'react'
import kittubakers from './images/kittubakers.png'
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs"
import tanvistore from './images/tanvistore.png'
import portfolio from './images/portfolio.png'
import { hover } from '@testing-library/user-event/dist/hover';
import netflix from './images/Screenshot (79).png'
import dktales from './images/dktales.png'
import aircraft from './images/aircrfat.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function Projects() {
   useEffect(() => {
      AOS.init();
    }, [])
    return (
        <div data-aos="fade-down" data-aos-duration="1600" className='expbox w-100 '>
         <div className='flex flex-col xl:pb-7 xl:p-0 justify-center space-y-6 items-center mt-9 xl:mr-10 sm:mr-0 sm:p-10'>
         <div className='lg:w-[100%] sm:w-full flex xl:flex-row-reverse sm:flex-col border-[0.5px] border-sky-500 hover:scale-105 rounded-xl duration-1000 '>
               <div className='uppercase rounded-xl xl:w-64 bg-gradient-to-r from-[#E0F2FE] to to-[#0F172A] sm:w-full flex justify-center items-center'>
                   <img src={aircraft} className='xl:w-100 p-5 sm:w-100 sm:h-auto'></img> </div>
               <div dir='ltr' className='flex flex-col justify-start pt-4 xl:w-8/12 sm:w-full'>
                  <a href="https://aerocraftnexus-kartikdhumal.vercel.app/" target='_blank' className='px-4 flex justify-between flex-row text-2xl'> Aircraft Models E-commerce website  <BsArrowUpRight size={18}/> </a>
                  <p className='py-4 px-4 h-auto'> 
                  Explore my E-commerce website built with MERN stack. It has various features.
                  </p>
                  <div className='flex xl:flex-wrap sm:flex-wrap sm:space-x-4 pt-0 pb-4 sm:space-y-4' id='expskills'>
                  <div className='border rounded-md px-3 h-7 sm:mt-4 sm:ml-4 text-black border-none  bg-sky-500 hover:bg-sky-700'> React.js </div>
                     <div className='border rounded-md px-3 text-black  border-none bg-sky-500 hover:bg-sky-700'> Node.js </div>
                     <div className='border rounded-md px-3 text-black  border-none bg-sky-500 hover:bg-sky-700'> Express.js </div>
                     <div className='border rounded-md px-3 text-black  border-none bg-sky-500 hover:bg-sky-700'> MongoDB </div>
                     <div className='border rounded-md px-3 text-black  border-none bg-sky-500 hover:bg-sky-700'> Tailwind CSS </div>
                  </div>
               </div>
            </div>

         <div className='thirdbox lg:w-[100%] sm:w-full flex xl:flex-row-reverse sm:flex-col border-[0.5px] border-sky-500 hover:scale-105 rounded-xl duration-1000 '>
               <div className='uppercase rounded-xl xl:w-64 bg-gradient-to-r from-[#1D4FD9] to to-[#0F172A] sm:w-full flex justify-center items-center'>
                   <img src={dktales} className='xl:w-100 p-5 sm:w-100 sm:h-auto'></img> </div>
               <div dir='ltr' className='flex flex-col justify-start pt-4 xl:w-8/12 sm:w-full'>
                  <a href="https://dktales-kartikdhumal.vercel.app/" target='_blank' className='px-4 flex justify-between flex-row text-2xl'> Blog Website  <BsArrowUpRight size={18}/> </a>
                  <p className='py-4 px-4 h-auto'> 
                  Explore my blog website! It's made with cool techie tools like Next.js, TypeScript, MongoDB, and Prisma. You can add comments and create your own stories. 
                  Check it out and have fun reading and writing.
                  </p>
                  <div className='flex xl:flex-wrap sm:flex-wrap sm:space-x-4 pt-0 pb-4 sm:space-y-4' id='expskills'>
                     <div className='border h-8 rounded-md px-3 sm:mt-4 sm:ml-4 text-black border-none  bg-sky-500 hover:bg-sky-700'> Next.js </div>
                     <div className='border h-8  rounded-md px-3 text-black  border-none bg-sky-500 hover:bg-sky-700'> TypeScript </div>
                     <div className='border h-8  rounded-md px-3 text-black  border-none bg-sky-500 hover:bg-sky-700'> MongoDB </div>
                     <div className='border h-8  rounded-md px-3 text-black  border-none bg-sky-500 hover:bg-sky-700'> Prisma </div>
                     <div className='border h-8  rounded-md px-3 text-black  border-none bg-sky-500 hover:bg-sky-700'> Tailwind CSS </div>
                  </div>
               </div>
            </div>

         <div className='thirdbox lg:w-[100%] sm:w-full flex xl:flex-row-reverse sm:flex-col border-[0.5px] border-sky-500 hover:scale-105 rounded-xl duration-1000 '>
               <div className='uppercase rounded-xl xl:w-64 bg-gradient-to-r from-[#E50914] to to-[#0F172A] sm:w-full flex justify-center items-center'> <img src={netflix} className='xl:w-100 p-5 sm:w-100 sm:h-auto'></img> </div>
               <div dir='ltr' className='flex flex-col justify-start pt-4 xl:w-8/12 sm:w-full'>
                  <a href="https://netflix-clone-kartikdhumal.vercel.app" target='_blank' className='px-4 flex justify-between flex-row text-2xl'>  Netflix Clone  <BsArrowUpRight size={18}/> </a>
                  <p className='py-4 px-4 h-20'> 
                     Full stack Netflix Clone with Admin panel built using MERN stack 
                  </p>
                  <div className='flex xl:flex-wrap sm:flex-wrap sm:space-x-4 pt-0 pb-4 sm:space-y-4' id='expskills'>
                     <div className='border rounded-md px-3 h-7 sm:mt-4 sm:ml-4 text-black border-none  bg-sky-500 hover:bg-sky-700'> React.js </div>
                     <div className='border rounded-md px-3 text-black  border-none bg-sky-500 hover:bg-sky-700'> Node.js </div>
                     <div className='border rounded-md px-3 text-black  border-none bg-sky-500 hover:bg-sky-700'> Express.js </div>
                     <div className='border rounded-md px-3 text-black  border-none bg-sky-500 hover:bg-sky-700'> MongoDB </div>
                  </div>
               </div>
            </div>

            <div className='thirdbox sm:w-full flex xl:flex-row-reverse sm:flex-col border-[0.5px] border-sky-500 hover:scale-105 rounded-xl duration-1000 '>
               <div className='uppercase rounded-xl xl:w-64 bg-gradient-to-r from-[#D3DEF0] to to-[#0F172A] sm:w-full flex justify-center items-center'> <img src={portfolio} className='xl:w-100 p-5 sm:w-100 sm:h-auto'></img> </div>
               <div dir='ltr' className='flex flex-col justify-start pt-4 xl:w-8/12 sm:w-full'>
                  <a href="#" target='_blank' className='px-4 flex justify-between flex-row text-2xl'>  Portfolio Website  <BsArrowUpRight size={18}/> </a>
                  <p className='py-4 px-4 h-20'> 
                     It is a personal portfolio website with skills , experince , projects , contact section
                  </p>
                  <div className='flex xl:flex-wrap sm:flex-wrap sm:space-x-4 pt-0 pb-4 sm:space-y-4' id='expskills'>
                     <div className='border rounded-md px-3 h-7 sm:mt-4 sm:ml-4 text-black border-none  bg-sky-500 hover:bg-sky-700'> React.js </div>
                     <div className='border rounded-md px-3 text-black  border-none bg-sky-500 hover:bg-sky-700'> Tailwind CSS </div>
                  </div>
               </div>
            </div>

            <div className='firstbox lg:w-[100%] flex xl:flex-row-reverse sm:flex-col border-[0.5px] border-sky-500 hover:scale-105 rounded-xl duration-1000'>
               <div className='uppercase rounded-xl xl:w-64 sm:w-full bg-gradient-to-l from-[#001f50] to to-[#eaedff] sm:flex justify-center items-center'> <img src={tanvistore} className='xl:w-100  p-5 sm:w-100'></img> </div>
               <div dir='ltr' className='flex flex-col justify-start pt-4 xl:w-8/12 sm:w-full'>
                  <a href="https://tanvimedicines.000webhostapp.com/" target='_blank' className='px-4 flex flex-row justify-between text-2xl'> Medical shop E-commerce website <BsArrowUpRight size={18}/> </a>
                  <p className='py-4 px-4'> 
                I made this e-commerce website for my Last year project. It is a fully responsive Medical shop e-commerce website having all functionality.
                  </p>
                  <div className='flex xl:flex-wrap sm:flex-wrap sm:space-x-4 pt-0 pb-4 sm:space-y-4' id='expskills'>
                     <div className='border rounded-md px-3 h-7 sm:mt-4 sm:ml-4 text-black  border-none bg-sky-500 hover:bg-sky-700'> PHP </div>
                     <div className='border rounded-md px-3 text-black  border-none bg-sky-500 hover:bg-sky-700'> MySQL </div>  
                     <div className='border rounded-md px-3 text-black  border-none bg-sky-500 hover:bg-sky-700'> HTML </div>
                     <div className='border rounded-md px-3 text-black  border-none bg-sky-500 hover:bg-sky-700'> CSS </div>
                     <div className='border rounded-md px-3 text-black  border-none bg-sky-500 hover:bg-sky-700'> Javascript </div>
                  </div>
               </div>
            </div>
      
      
         </div>
    </div>
    )
}

export default Projects
