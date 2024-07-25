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
            <div className='flex flex-col items-center rounded-lg h-full pb-7 pt-3 border-l-4 border-[#D3DEF0]-600  pr-7 sm:pr-0'>
                <div className='firstbox flex xl:flex-row-reverse sm:flex-col space-y-4'>
                    <span className='w-5 lg:right-3 sm:left-3 xl:block sm:absolute lg:relative mt-9 h-5 bg-sky-500 border-black border-2 rounded-xl '></span>
                    <div dir='ltr' className='flex flex-col justify-start  rounded-lg pt-4 xl:w-8/12 sm:w-100'>
                        <h1 className='px-6 font-bold text-xl border-none'>Master of Computer Applications</h1>
                        <p className='pt-0 px-6'> <span className='font-bold text-yellow-700'> Gujarat University </span>
                            <p className='text-sm'> August 2023 - current </p>
                        </p>
                        <p className='pt-2 px-6 text-sm'>
                            Currently pursuing a Master of Computer Applications (MCA) from the Department of Computer Science at Rollwala, Gujarat University.
                        </p>
                    </div>
                </div>
                <div className='firstbox flex xl:flex-row-reverse mt-9 sm:flex-col space-y-4'>
                    <span className='w-5 lg:right-3 sm:left-3 xl:block sm:absolute lg:relative mt-9 h-5 bg-sky-500 border-black border-2 rounded-xl '></span>
                    <div dir='ltr' className='flex flex-col justify-start  rounded-lg pt-4 xl:w-8/12 sm:w-100'>
                        <h1 className='px-6 font-bold text-xl border-none'>Bachelor of Computer Applications</h1>
                        <p className='pt-0 px-6'> <span className='font-bold text-sky-700'>Som Lalit Institute Of Computer Applications</span>
                            <p className='text-sm'> August 2020 - June 2023  </p>
                        </p>
                        <p className='pt-2 px-6 text-sm'>
                            Completed my graduation from Som Lalit Institute of Computer Applications, Ahmedabad, with a focus on computer science.
                        </p>
                    </div>
                </div>
                <div className='firstbox flex xl:flex-row-reverse mt-9  sm:flex-col space-y-4'>
                    <span className='w-5 lg:right-3 sm:left-3 xl:block sm:absolute lg:relative mt-9 h-5 bg-sky-500 border-black border-2 rounded-xl '></span>
                    <div dir='ltr' className='flex flex-col justify-start  rounded-lg pt-4 xl:w-8/12 sm:w-100'>
                        <h1 className='px-6 font-bold text-xl border-none'>H.S.C.</h1>
                        <p className='pt-0 px-6'> <span className='font-bold text-blue-600'>Shruti School </span>
                            <p className='text-sm'> June 2009 - March 2020  </p>
                        </p>
                        <p className='pt-2 px-6 text-sm'>
                            Completed H.S.C in commerce stream from Shruti Higher Secondary School , Bapunagar , Ahmedabad
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
