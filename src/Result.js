import React from 'react'
import {  Route , Routes } from 'react-router-dom'
import Contact from './Contact'
import Pagenotfound from './Pagenotfound'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Skills from './Skills'


function Result() {
  return (
    <div dir='rtl' className='lg:h-screen  justify-between font-medium text-lg flex-col self-center items-center right-0 xl:absolute bottom-0 left-0'>
    <div className='xl:w-3/6 ml-auto flex flex-col justify-start items-center font-semibold sm:w-full'>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={ <Skills />} />
        <Route path="/experience" element={ <Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
    </div>
  )
}

export default Result
