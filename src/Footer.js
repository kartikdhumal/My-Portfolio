import React from 'react'
import { AiFillLinkedin , AiOutlineInstagram , AiOutlineBars , AiFillGithub , AiOutlineTwitter} from "react-icons/ai";

function Footer() {
  return (
    <div className='xl:hidden'>
<div class="bg-gradient-to-t from-sky-800 to to-[#0F172A] mt-28">
    <div class="max-w-2xl mx-auto text-white py-10">
        <div class="text-center">
            <h3 className="text-3xl font-bold">@2023 Kartik Dhumal </h3>
        </div>
        <div class="mt-14 flex flex-col md:flex-row md:justify-center items-center text-sm text-sky-500">
      <div className='icons sm:flex sm:flex-row justify-between w-60 p-4 text-[#0F172A]'>
         <a href='https://in.linkedin.com/in/kartik-dhumal-962395227?trk=public_profile_browsemap'><div className='text-[#D3DEF0] duration-200'>  <AiFillLinkedin size={35} /></div></a>
          <a href='https://www.instagram.com/kartik_dhumal._/'><div className='duration-200  text-[#D3DEF0]'>  < AiOutlineInstagram size={35} /></div></a>
          <div className='duration-200 text-[#D3DEF0] '>  <AiFillGithub size={35} /></div>
          <a href='https://twitter.com/Kartik280721 '><div className='text-[#D3DEF0] duration-200'>  <AiOutlineTwitter size={35} /></div></a>  
     </div>

        </div>
    </div>
</div>
    </div>
  )
}

export default Footer
