import React from 'react'
import './styles/Main.css'
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineBars, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { FaWindowClose } from "react-icons/fa";
import resume from '../src/resume/kartik2024.pdf'


function Main() {
  const navOpen = () => {
    const menu = document.querySelector(".navbar");

    if (menu.classList.toggle("sm:hidden")) {
      menu.classList.toggle("sm:block ");
    }
    else {
      menu.classList.remove("sm:hidden");
    }
  }
  const navClose = () => {
    const menu = document.querySelector(".navbar");
    if (menu.classList.toggle("sm:block")) {
      menu.classList.remove("sm:block");
    }
    else {
      menu.classList.toggle("sm:block");
    }
  }
  document.onclick = () => {
    const menu = document.querySelector(".navbar");
    if (menu.classList.toggle("sm:block")) {
      menu.classList.toggle("sm:hidden");
    }
  }
  return (
    <div className='main xl:fixed xl:h-screen sm:h-50 z-40 xl:w-2/5 xl:p-10 sm:pt-14 xl:p-auto xl:ml-20 sm:z-40 flex xl:flex-col sm:flex-col-reverse xl:justify-evenly items-center sm:w-full ml-0 relative flex-col'>
      <div className='xl:py-8 xl:px-4 xl:w-96 sm:w-100 sm:py-8 sm:px-4'>
        <h1 className='stylishtext text-5xl w-full font-bold my-1'> Kartik Dhumal </h1>
        <p className='stylishtext fullstack text-2xl font-bold mt-3'> Full Stack Developer </p>
        <p className='stylishtext text-md mt-3 font-semibold' id='fullstack'>
          A Passionate Learner
        </p>
        <div className='mt-5 stylishtext'>
          <a href={resume} download="kartikdhumal2024.pdf" className="inline-block font-bold rounded-full px-4 py-2 transition duration-300 ease-in-out transform bg-gray-800 text-white hover:scale-95"> Resume </a>
        </div>

      </div>
      <div className='flex justify-start xl:hidden sm:fixed bg-[#0F172A] xl:top-auto sm:top-0 w-full p-4'>
        <button onClick={navOpen} className='xl:hidden  opennavdiv'> <img width="30" height="30" src="https://img.icons8.com/plasticine/100/menu.png" alt="menu" /> </button>
      </div>
      {/* End of the main */}
      <div className='list sm:w-auto xl:bg-inherit xl:left-auto sm:left-0 xl:relative  sm:fixed xl:top-auto xl:pt-0 sm:pt-14 sm:top-0 navbar stylishtext xl:bg-[#0F172A] xl:flex sm:hidden xl:w-96 uppercase sm:z-30'>
        {/* <button onClick={navClose} className='xl:hidden px-4 pt-4 sm:block'> <FaWindowClose size={25} color='red'/> </button> */}
        <ul className='text-lg ulbox flex justify-between flex-col  p-4 font-bold'>
          <li className='my-2   text-[#63718C]'> <NavLink style={({ isActive }) => { return isActive ? { color: "#D3DEF0", fontSize: "20px", transition: "0.175s ease-in-out " } : {} }} to="/"> About  </NavLink></li>
          <li className='my-2   text-[#63718C]'> <NavLink style={({ isActive }) => {
            return isActive ? { color: "#D3DEF0", fontSize: "20px", transition: "0.175s ease-in-out " } : {}
          }} to="/skills">  Skills  </NavLink></li>
          <li className='my-2   text-[#63718C]'> <NavLink style={({ isActive }) => {
            return isActive ? { color: "#D3DEF0", fontSize: "20px", transition: "0.175s ease-in-out " } : {}
          }} to="/education">  Education </NavLink> </li>
          <li className='my-2   text-[#63718C]'> <NavLink style={({ isActive }) => {
            return isActive ? { color: "#D3DEF0", fontSize: "20px", transition: "0.175s ease-in-out " } : {}
          }} to="/projects"> Projects </NavLink></li>
            <li className='my-2   text-[#63718C]'> <NavLink style={({ isActive }) => {
            return isActive ? { color: "#D3DEF0", fontSize: "20px", transition: "0.175s ease-in-out " } : {}
          }} to="/certifications"> Certifications </NavLink> </li>
          <li className='my-2   text-[#63718C]'> <NavLink style={({ isActive }) => {
            return isActive ? { color: "#D3DEF0", fontSize: "20px", transition: "0.175s ease-in-out " } : {}
          }} to="/contact"> Contact </NavLink> </li>
        </ul>
      </div>

      {/* End of the list  */}
      <div className='icons stylishtext xl:flex sm:hidden xl:flex-row justify-between w-96 p-4'>
        <a href='https://in.linkedin.com/in/kartik-dhumal-962395227?trk=public_profile_browsemap'><div className='hover:text-[#63718C] duration-200'>  <AiFillLinkedin size={35} /></div></a>
        <a href='https://www.instagram.com/kartik_dhumal._/'><div className='hover:text-[#63718C] duration-200'>  < AiOutlineInstagram size={35} /></div></a>
        <a href='https://github.com/kartikdhumal'><div className='hover:text-[#63718C] duration-200'>  <AiFillGithub size={35} /></div></a>
        <a href='https://twitter.com/Kartik280721'><div className='hover:text-[#63718C] duration-200'>  <AiOutlineTwitter size={35} /></div></a>
      </div>
      {/* <div className='icons flex justify-evenly border border-b-4 w-1/3'>
         <div > <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></div>
          <div> <img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/></div>
          <div> <img width="48" height="48" src="https://img.icons8.com/color/48/github--v1.png" alt="github--v1"/></div>
          <div> <img width="48" height="48" src="https://img.icons8.com/color/48/twitter-circled--v1.png" alt="twitter-circled--v1"/> </div>
     </div> */}
    </div>
  )
}

export default Main
