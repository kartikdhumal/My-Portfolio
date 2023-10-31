import React from 'react'
import './styles/experience.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function Experience() {
   useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div data-aos="fade-down" data-aos-duration="1600" className='expbox w-100 cursor-default sm:p-5'>
         <div className='flex flex-col items-center rounded-lg border-l-4 border-[#D3DEF0]-600 h-screen pr-7 sm:pr-0'>
            <div className='firstbox flex xl:flex-row-reverse mt-9 sm:flex-col space-y-4'>
                <span className='w-5 xl:ml-[-12px] xl:block sm:hidden sticky sm:ml-20 mt-9 h-5 bg-sky-500 border-black border-2 rounded-xl '></span>
               <div dir='ltr' className='flex flex-col justify-start  rounded-lg pt-4 xl:w-8/12 sm:w-100'>
                  <h1 className='px-6 font-bold text-xl border-none'>PHP developer - Achten Technology </h1>
                  <p className='pt-0 px-6'> April 2022 - June 2022 </p>
                  <p className='pt-4 px-6'> 
                    I did three months internship in my second year vacation. I gained skills in PHP - MySQL - AJAX. I worked in a project named
                    'SECURE ASSET MANAGER'
                  </p>
                  <div className='flex xl:flex-nowrap sm:flex-wrap sm:space-x-4 pt-0 pb-4 sm:space-y-4' id='expskills'>
                     <div className='border rounded-md px-3  h-7 sm:mt-4 sm:ml-4 sm:px-2 text-black  border-none bg-sky-500 hover:bg-sky-700'> PHP </div>
                     <div className='border rounded-md px-3 sm:px-2 text-black  border-none bg-sky-500 hover:bg-sky-700'> MySQL </div>
                     <div className='border rounded-md px-3 sm:px-2 text-black  border-none bg-sky-500 hover:bg-sky-700'> AJAX </div>
                     <div className='border rounded-md px-3 sm:px-2 text-black  border-none bg-sky-500 hover:bg-sky-700'> CSS </div>
                     <div className='border rounded-md px-3 sm:px-2 text-black  border-none bg-sky-500 hover:bg-sky-700'> Javascript </div>
                  </div>
               </div>
            </div>
         </div>
    </div>
  )
}

export default Experience
