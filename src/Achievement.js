import React, { useEffect } from 'react'
import fivestar from './images/5star.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BsArrowUpRight } from 'react-icons/bs';

function Achievement() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div data-aos="fade-down" data-aos-duration="1600" className=' w-100 '>
            <div className='flex flex-col xl:pb-7 xl:p-0 justify-center space-y-6 items-center mt-9 xl:mr-10 sm:mr-0 sm:p-10'>
                <div className='lg:w-[100%] sm:w-full flex xl:flex-row-reverse sm:flex-col border-[0.5px] border-sky-500 hover:scale-105 rounded-xl duration-1000 '>
                    <div className='uppercase rounded-xl xl:w-64 lg:bg-gradient-to-r from-[#2C8E3C] to to-[#0F172A] sm:bg-gradient-to-b sm:w-full flex justify-center items-center'>
                        <img src={fivestar} alt={fivestar} className='xl:w-100 p-5 sm:w-[70%] sm:h-auto'></img> </div>
                    <div dir='ltr' className='flex flex-col justify-center items-center pt-4 xl:w-8/12 sm:w-full'>
                        <a href="https://www.hackerrank.com/kartikdhumal24" target='_blank' rel="noreferrer" className='px-4 flex justify-between flex-row text-2xl'> Gold Badge in Problem Solving in Hackerrank  <BsArrowUpRight size={18} /> </a>
                        <p className='py-4 px-4 h-auto'>
                            Worked on and solved different problems in Javascript to enhance my programming skills.
                        </p>
                    </div>
                </div>
            </div></div>
    )
}

export default Achievement
