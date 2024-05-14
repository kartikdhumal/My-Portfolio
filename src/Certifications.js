import React from 'react'
import { BsArrowUpRight } from "react-icons/bs"
import tanvistore from './images/tanvistore.png'
import prjcoursera from './images/prjcoursera.jpg'
import dktales from './images/newdktales2.png'
import aircraft from './images/aircrfat.png'
import amazonprime from './images/amazonprime2.png'
import nodescaler from './images/nodescaler.jpeg'
import javaudemy from './images/javaudemy.jpeg'
import advanedjava from './images/advanedjava.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function Certifications() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-down" data-aos-duration="1600" className='expbox w-100 '>
            <div className='flex flex-col xl:pb-7 xl:p-0 justify-center space-y-6 items-center mt-9 xl:mr-10 sm:mr-0 sm:p-10'>
                <div className='lg:w-[100%] sm:w-full flex xl:flex-row-reverse sm:flex-col border-[0.5px] border-sky-500 hover:scale-105 rounded-xl duration-1000 '>
                    <div className='uppercase rounded-xl xl:w-64 sm:w-full flex justify-center items-center'>
                        <img src={javaudemy} className='xl:w-100 p-5 sm:w-100 sm:h-auto'></img> </div>
                    <div dir='ltr' className='flex flex-col justify-around pt-4 xl:w-8/12 sm:w-full'>
                        <a href="https://www.udemy.com/certificate/UC-aef6a2b6-352a-4f53-bc84-8f02d446a890/" target='_blank' className='px-4 flex justify-between flex-row text-2xl'> Java for beginners  <BsArrowUpRight size={18} /> </a>
                        <p className='py-2 px-4 lg:my-0 sm:my-4 mx-4 rounded-lg h-auto w-28 text-[#ffffff] text-center  bg-[#A435F0]'>
                            Udemy
                        </p>
                    </div>
                </div>

                <div className='thirdbox lg:w-[100%] sm:w-full flex xl:flex-row-reverse sm:flex-col border-[0.5px] border-sky-500 hover:scale-105 rounded-xl duration-1000 '>
                    <div className='uppercase rounded-xl xl:w-64 sm:w-full flex justify-center items-center'>
                        <img src={nodescaler} className='xl:w-100 p-5 sm:w-100 sm:h-auto'></img> </div>
                        <div dir='ltr' className='flex flex-col justify-around pt-4 xl:w-8/12 sm:w-full'>
                        <a href="https://moonshot.scaler.com/s/sl/Nc0MuRbOS1?_gl=1*3d4keg*_ga*MTIxMTU4NDIzNy4xNzEzMzM3ODI0*_ga_53S71ZZG1X*MTcxNTEwODE1My4yLjEuMTcxNTEwODU4MC4wLjAuMjA4NjU4ODA1NA../" target='_blank' className='px-4 flex justify-between flex-row text-2xl'> Node.js - Master the fundalmentals  <BsArrowUpRight size={18} /> </a>
                        <p className='py-2 px-4 mx-4 lg:my-0 sm:my-4 rounded-lg h-auto w-28 text-[#ffffff] text-center bg-blue-800'>
                            Scaler
                        </p>
                    </div>
                </div>

                <div className='thirdbox lg:w-[100%] sm:w-full flex xl:flex-row-reverse sm:flex-col border-[0.5px] border-sky-500 hover:scale-105 rounded-xl duration-1000 '>
                    <div className='uppercase rounded-xl xl:w-64 sm:w-full flex justify-center items-center'>
                        <img src={prjcoursera} className='xl:w-100 p-5 sm:w-100 sm:h-auto'></img> </div>
                        <div dir='ltr' className='flex flex-col justify-around pt-4 xl:w-8/12 sm:w-full'>
                        <a href="https://www.coursera.org/account/accomplishments/verify/56NSTK7J3VF3/" target='_blank' className='px-4 flex justify-between flex-row text-2xl'> Programming with javascript <BsArrowUpRight size={18} /> </a>
                        <p className='py-2 px-4 mx-4 lg:my-0 sm:my-4 rounded-lg h-auto w-28 text-[#FFFFFF] text-center  bg-[#0056D2]'>
                            Coursera
                        </p>
                    </div>
                </div>

                <div className='thirdbox lg:w-[100%] sm:w-full flex xl:flex-row-reverse sm:flex-col border-[0.5px] border-sky-500 hover:scale-105 rounded-xl duration-1000 '>
                    <div className='uppercase rounded-xl xl:w-64 sm:w-full flex justify-center items-center'>
                        <img src={advanedjava} className='xl:w-100 p-5 sm:w-100 sm:h-auto'></img> </div>
                        <div dir='ltr' className='flex flex-col justify-around pt-4 xl:w-8/12 sm:w-full'>
                        <a href="https://www.coursera.org/account/accomplishments/verify/56NSTK7J3VF3/" target='_blank' className='px-4 flex justify-between flex-row text-2xl'> Advanced Java Workshop <BsArrowUpRight size={18} /> </a>
                        <p className='py-2 px-4 mx-4 lg:my-0 sm:my-4 rounded-lg h-auto w-64 text-[#FFFFFF] text-center bg-yellow-700'>
                            Gujarat University
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certifications
