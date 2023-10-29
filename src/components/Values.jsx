import React, { useState } from 'react'
import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";
import {IoMdArrowDropdown} from 'react-icons/io'

export const Values = () => {

    const [cnt, setcnt] = useState(1);
  return (
    <div className='value-wrapper pb-[2rem]' id='values'>
        <div className="value-container  p-[1rem] flex flex-col md:flex-row items-center gap-5 md:gap-0 md:items-start justify-between  w-full lg:max-w-[1080px]  lg:mx-auto px-10">
        <div className="left flex flex-col items-center justify-center md:w-[40%]">
                <div className="image-container h-[380px] sm:h-[450px] rounded-t-full overflow-hidden border-4 border-gray-400 object-cover">
                <img src="./value.png" alt="" className='h-full w-full'/>
                </div>
            </div>
        <div className="right flexColStart gap-[3rem] md:w-[50%] ">
                <div className='flex flex-col items-start gap-2'>
                    <h1 className='text-2xl text-[#ff922d] font-semibold'>Our Value</h1>
                    <h1 className="text-3xl font-bold text-[#1a2552]">Value We Give To You</h1>
                    <p className='text-gray-400 text-sm'>We always ready to helpby providing the best services for you. <br /> we believe a good blace to live can make you life better.</p>
                </div>

                <div className='sm:h-[250px] w-full flex flex-col items-start justify-start gap-3'>
                    <div className={`border border-gray-200 rounded-md shadow-md w-full flex flex-col justify-between p-4 
                    ${cnt===1?"h-[50%]":"h-[25%]"} gap-2`}>
                        <div className='flex flex-row items-center justify-between gap-4'>
                            <div className='h-[30px] w-[30px] bg-blue-100 flex flex-col items-center justify-center rounded-sm'><HiShieldCheck className='text-blue-500'/></div>
                        <h1 className='text-sm sm:text-base'>Best interest rates on the market</h1>
                            <div onClick={()=>{setcnt(1)}} className='h-[30px] w-[30px] bg-blue-100 flex flex-col items-center justify-center rounded-sm'><IoMdArrowDropdown/></div>
                        </div>
                        {cnt===1 && <div className={`text-xs text-gray-500 transition-all duration-300 
                        `}>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</div>}
                    </div>
                    <div className={`border border-gray-200 rounded-md shadow-md w-full flex flex-col justify-between p-4 
                    ${cnt===2?"h-[50%]":"h-[25%]"} gap-2`}>
                        <div className='flex flex-row items-center justify-between gap-4'>
                            <div className='h-[30px] w-[30px] bg-blue-100 flex flex-col items-center justify-center rounded-sm'> <MdCancel className='text-blue-500'/></div>
                        <h1 className='text-sm sm:text-base'>Prevent unstable prices</h1>
                            <div onClick={()=>{setcnt(2)}} className='h-[30px] w-[30px] bg-blue-100 flex flex-col items-center justify-center rounded-sm'> <IoMdArrowDropdown/></div>
                        </div>
                        {cnt===2 && <div className='text-xs text-gray-500'>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</div>}
                    </div>
                    <div className={`border border-gray-200 rounded-md shadow-md w-full flex flex-col justify-between p-4 
                    ${cnt===3?"h-[50%]":"h-[25%]"}`}>
                        <div className='flex flex-row items-center justify-between gap-4'>
                            <div className='h-[30px] w-[30px] bg-blue-100 flex flex-col items-center justify-center rounded-sm'><MdAnalytics className='text-blue-500'/></div>
                        <h1 className='text-sm sm:text-base'>Best price on the market</h1>
                            <div onClick={()=>{setcnt(3)}} className='h-[30px] w-[30px] bg-blue-100 flex flex-col items-center justify-center rounded-sm'><IoMdArrowDropdown/></div>
                        </div>
                        {cnt===3 && <div className='text-xs text-gray-500'>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</div>}
                    </div>
                    
                </div>

            </div>
           
        </div>
    </div>
  )
}
