import React, { useState } from 'react'
import {Link} from 'react-scroll'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

const Header = () => {
  const [show, setshow] = useState(false)
  return (
    <div className='h-wrapper bg-[#131110] text-white'>
        <div className='h-container flex flex-row items-center justify-between p-[1rem] w-full 2xl:max-w-[1080px]  2xl:mx-auto text-[#ffffffc7] text-sm relative'>

            <img src="./logo.png" alt="logo" width={100}/>

            <div className="h-menu hidden sm:flex flex-row items-center justify-center gap-4">
              <Link to='residencies' smooth={true} duration={0}>
                <div  className='hover:cursor-pointer'>Residencies</div>
              </Link>
              <Link to='values' smooth={true} duration={0}>
                <div  className='hover:cursor-pointer'>Our Values</div>
              </Link>
              <Link to='contact' smooth={true} duration={0}>
                <div  className='hover:cursor-pointer'>Contact us</div>
              </Link>
              <Link to='getstart' smooth={true} duration={0}>
                <div  className='hover:cursor-pointer'>Get started</div>
              </Link>
                <button className="btn font-semibold px-[1.4rem] py-[0.6rem] text-white bg-gradient-to-tr from-[#4066ff] to-[#2949c6] rounded-[4px] duration-300 hover:cursor-pointer hover:scale-110">Contact</button>
            </div>

            <div className={`bg-gray-100 text-black flex flex-col items-center justify-center gap-6 p-10 rounded-md text-base absolute top-14 ${show?"scale-y-100":"scale-y-0"} origin-top transition-all duration-200 right-14 z-20 sm:hidden`}>
            <Link to='residencies' smooth={true} duration={0}>
                <div  className='hover:cursor-pointer' onClick={()=>{setshow(prev => !prev)}}>Residencies</div>
              </Link>
              <Link to='values' smooth={true} duration={0}>
                <div  className='hover:cursor-pointer' onClick={()=>{setshow(prev => !prev)}}>Our Values</div>
              </Link>
              <Link to='contact' smooth={true} duration={0}>
                <div  className='hover:cursor-pointer' onClick={()=>{setshow(prev => !prev)}}>Contact us</div>
              </Link>
              <Link to='getstart' smooth={true} duration={0}>
                <div  className='hover:cursor-pointer' onClick={()=>{setshow(prev => !prev)}}>Get started</div>
              </Link>
                <button className="btn font-semibold px-[1.4rem] py-[0.6rem] text-white bg-gradient-to-tr from-[#4066ff] to-[#2949c6] rounded-[4px] duration-300 hover:cursor-pointer hover:scale-110">Contact</button>
            </div>

            {!show && <div className='sm:hidden' onClick={()=>{setshow(prev => !prev)}}><GiHamburgerMenu className='text-2xl font-semibold'/></div>}
            {show && <div className='sm:hidden' onClick={()=>{setshow(prev => !prev)}}><IoMdClose className='text-2xl font-semibold'/></div>}
        </div>
    </div>
  )
}

export default Header