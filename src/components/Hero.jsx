import React from 'react'
import CountUp from 'react-countup'
import {HiLocationMarker} from 'react-icons/hi'

const Hero = () => {
    // hero-container p-[1rem] flex flex-row items-end justify-center gap-10  w-full 2xl:max-w-[1080px]  2xl:mx-auto
  return (
    <div className='hero-wrapper pb-[1rem] bg-[#131110] text-white' id='hero'>
        <div className="hero-container p-[1rem] flex flex-col items-center md:flex-row md:items-end justify-center md:justify-between gap-10  w-full lg:max-w-[1080px]  lg:mx-auto px-10 ">

            <div className="left flexColStart gap-[2rem] md:gap-[3rem]">
                <div className='relative z-10 '>
                    <div className='orange h-[4rem] w-[4rem] absolute rounded-full bg-gradient-to-r from-[#ffb978] to-[#ff922d] right-28 z-[-1] top-[-1rem]'></div>
                <h1 className='font-semibold text-[3rem] leading-[3.5rem] sm:text-[3.8rem] sm:leading-[4rem]'>Discover <br /> Most Suitable <br /> Property</h1>
                </div>
                <div className="desc flex flex-col sm:items-start items-center text-base">
                    <span>Find the variety of the properties that suit you very easily</span>
                    <span>Forget all difficulties in finding a residence for you</span>
                </div>
                <div className="search-bar flex flex-row items-center justify-center relative w-[90%] md:w-[80%] rounded-lg mx-auto md:mx-0">
                    <HiLocationMarker className="text-[#4066ff] absolute left-[1rem]" size={25}/>
                    <input type="text" className='pl-[3rem] focus:outline-none pr-[7rem] py-3 w-full text-black rounded-md text-sm' />
                    <button className="btn absolute right-[0.5rem] font-semibold text-white bg-gradient-to-tr from-[#4066ff] to-[#2949c6] rounded-[4px] px-[20px] py-[4px]">Search</button>
                </div>

                <div className="stats flex flex-row items-center justify-center gap-4 mx-auto md:mx-0">
                    <div className="stat-1 flex flex-col items-start">
                        <div className='flex flex-row items-center justify-center gap-2 text-3xl sm:text-4xl font-semibold '>
                            {/* <div>9000</div> */}
                            <CountUp start={8800} end={9000} duration={3}/>
                            <div className='text-[#ff922d]'>+</div>
                        </div>
                        <div className='text-sm text-gray-400'>Premium Product</div>
                        
                    </div>
                    <div className="stat-1 flex flex-col items-start">
                        <div className='flex flex-row items-center justify-center gap-2 text-3xl sm:text-4xl font-semibold'>
                        <CountUp start={1950} end={2000} duration={3}/>
                            <div className='text-[#ff922d]'>+</div>
                        </div>
                        <div className='text-sm text-gray-400'>Happy Customers</div>
                        
                    </div>
                    <div className="stat-1 flex flex-col items-start">
                        <div className='flex flex-row items-center justify-center gap-2 text-3xl sm:text-4xl font-semibold'>
                            {/* <div>9000</div> */}
                            <CountUp end={28}/>
                            <div className='text-[#ff922d]'>+</div>
                        </div>
                        <div className='text-sm text-gray-400'>Award Winning</div>
                        
                    </div>
                </div>

            </div>
            <div className="right flex flex-col items-center justify-center">
                <div className="image-container h-[380px] sm:h-[450px] rounded-t-full overflow-hidden border-4 border-gray-400 object-cover">
                <img src="./hero-image.png" alt="" className='h-full w-full'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero