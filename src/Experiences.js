import React from 'react'
import './styles/experience.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function Experiences() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-down" data-aos-duration="1600" className='expbox w-100 cursor-default sm:p-5'>
            <div className='flex flex-col items-center rounded-lg h-screen pb-7 pt-3 border-l-4 border-[#D3DEF0]-600  pr-7 sm:pr-0'>
                <div className='firstbox flex xl:flex-row-reverse sm:flex-col space-y-4'>
                    <span className='w-5 lg:right-3 sm:left-3 xl:block sm:absolute lg:relative mt-9 h-5 bg-sky-500 border-black border-2 rounded-xl '></span>
                    <div dir='ltr' className='flex flex-col justify-start  rounded-lg pt-4 xl:w-8/12 sm:w-100'>
                        <h1 className='px-6 font-bold text-xl border-none'>PHP developer</h1>
                        <h1 className='pt-0 px-6'><span className='font-bold text-green-700'> Achten Technology </span>
                            <h1 className='text-sm'> April 2022 - June 2022 </h1>
                            <h1 className='text-sm'> Ahmedabad , Gujarat </h1>
                        </h1>
                        <p className='pt-2 px-6 text-sm'>
                            I did an 3 month internship in php after my second year, where I learned PHP, SQL, AJAX, and more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences
