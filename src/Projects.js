import React from 'react'
import { BsArrowUpRight } from "react-icons/bs"
import tanvistore from './images/tanvistore.png'
import portfolio from './images/portfolio.png'
import dktales from './images/newdktales2.png'
import aircraft from './images/aircrfat.png'
import amazonprime from './images/amazonprime2.png'
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
                  <a href="https://aerocraftnexus-kartikdhumal.vercel.app/" target='_blank' className='px-4 flex justify-between flex-row text-2xl'> Aircraft Models E-commerce website  <BsArrowUpRight size={18} /> </a>
                  <p className='py-4 px-4 h-auto'>
                     Explore my E-commerce website built with MERN stack. It has various features.
                  </p>
                  <div className='flex xl:flex-wrap sm:flex-wrap p-2 justify-start items-center pt-0 pb-4' id='expskills'>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text'> React.js </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text'> Node.js </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text'> Express.js </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text'> MongoDB </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text'> Tailwind CSS </div>
                  </div>
               </div>
            </div>

            <div className='thirdbox lg:w-[100%] sm:w-full flex xl:flex-row-reverse sm:flex-col border-[0.5px] border-sky-500 hover:scale-105 rounded-xl duration-1000 '>
               <div className='uppercase rounded-xl xl:w-64 bg-gradient-to-r from-[#0f171e] to to-[#0F172A] sm:w-full flex justify-center items-center'> <img src={amazonprime} className='xl:w-100 p-5 sm:w-100 sm:h-auto'></img> </div>
               <div dir='ltr' className='flex flex-col justify-start pt-4 xl:w-8/12 sm:w-full'>
                  <a href="https://amazonprime-kartikdhumal.vercel.app/" target='_blank' className='px-4 flex justify-between flex-row text-2xl'>  Amazon Prime Video Streaming Website  <BsArrowUpRight size={18} /> </a>
                  <p className='py-4 px-4 h-auto'>
                     Amazon prime video streaming website with an admin panel. Admin can add shows without relying on third party apis
                  </p>
                  <div className='flex xl:flex-wrap sm:flex-wrap p-2 justify-start items-center pt-0 pb-4 ' id='expskills'>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> React.js </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> Node.js </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> Express.js </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> MongoDB </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> SCSS </div>
                  </div>
               </div>
            </div>

            <div className='thirdbox lg:w-[100%] sm:w-full flex xl:flex-row-reverse sm:flex-col border-[0.5px] border-sky-500 hover:scale-105 rounded-xl duration-1000 '>
               <div className='uppercase rounded-xl xl:w-64 bg-gradient-to-r from-[#001f50] to to-[#0F172A] sm:w-full flex justify-center items-center'>
                  <img src={dktales} className='xl:w-100 p-5 sm:w-100 sm:h-auto'></img> </div>
               <div dir='ltr' className='flex flex-col justify-start pt-4 xl:w-8/12 sm:w-full'>
                  <a href="https://dktales-kartikdhumal.vercel.app/" target='_blank' className='px-4 flex justify-between flex-row text-2xl'> Blog Website  <BsArrowUpRight size={18} /> </a>
                  <p className='py-4 px-4 h-auto'>
                     Explore my blog website! It's built with Next.js, TypeScript, MongoDB, and Prisma. You can add comments and create blogs.
                  </p>
                  <div className='flex xl:flex-wrap sm:flex-wrap p-2 justify-start items-center pt-0 pb-4 ' id='expskills'>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> Next.js </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> TypeScript </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> MongoDB </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> Prisma </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> Tailwind CSS </div>
                  </div>
               </div>
            </div>

            <div className='thirdbox sm:w-full flex xl:flex-row-reverse sm:flex-col border-[0.5px] border-sky-500 hover:scale-105 rounded-xl duration-1000 '>
               <div className='uppercase rounded-xl xl:w-64 bg-gradient-to-r from-[#0F172A] to to-[#0F172A] sm:w-full flex justify-center items-center'> <img src={portfolio} className='xl:w-100 p-5 sm:w-100 sm:h-auto'></img> </div>
               <div dir='ltr' className='flex flex-col justify-start pt-4 xl:w-8/12 sm:w-full'>
                  <a href="#" target='_blank' className='px-4 flex justify-between flex-row text-2xl'>  Portfolio Website  <BsArrowUpRight size={18} /> </a>
                  <p className='py-4 px-4 h-auto'>
                     It is a personal portfolio website with skills , experince , projects , contact section
                  </p>
                  <div className='flex xl:flex-wrap sm:flex-wrap p-2 justify-start items-center pt-0 pb-4 ' id='expskills'>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> React.js </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> Tailwind CSS </div>
                  </div>
               </div>
            </div>

            <div className='firstbox lg:w-[100%] flex xl:flex-row-reverse sm:flex-col border-[0.5px] border-sky-500 hover:scale-105 rounded-xl duration-1000'>
               <div className='uppercase rounded-xl xl:w-64 sm:w-full bg-gradient-to-l from-[#001f50] to to-[#eaedff] sm:flex justify-center items-center'> <img src={tanvistore} className='xl:w-100  p-5 sm:w-100'></img> </div>
               <div dir='ltr' className='flex flex-col justify-start pt-4 xl:w-8/12 sm:w-full'>
                  <a href="https://tanvimedicines.000webhostapp.com/" target='_blank' className='px-4 flex flex-row justify-between text-2xl'> Medical shop E-commerce website <BsArrowUpRight size={18} /> </a>
                  <p className='py-4 px-4 h-auto'>
                     I made this e-commerce website for my Last year project. It is a fully responsive Medical shop e-commerce website having all functionality.
                  </p>
                  <div className='flex xl:flex-wrap sm:flex-wrap p-2 justify-start items-center pt-0 pb-4 ' id='expskills'>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> PHP </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> MySQL </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> HTML </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> CSS </div>
                     <div className='font-semibold rounded-full my-2 mr-2 px-4 py-1 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95'> Javascript </div>
                  </div>
               </div>
            </div>


         </div>
      </div>
   )
}

export default Projects
