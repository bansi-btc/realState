import React from 'react'

const GetStarted = () => {
  return (
    <div className='start-wrapper pb-[1rem] px-10' id='getstart'>
        <div className='start-cont p-[3rem] w-full lg:max-w-[1080px]  lg:mx-auto bg-[#4161df] flex flex-col items-center justify-center gap-5 rounded-md'>
            <h1 className='text-4xl font-semibold text-white'>Get started with Homyz</h1>
            <p className='text-gray-300 w-full sm:w-[50%] text-center'>Subscribe and find super attractive price quotes from us.
            Find your residence soon</p>
                <button className='text-white bg-[#5a73d7] px-4 py-1 border border-white text-sm rounded-md font-semibold transition-all duration-300 hover:scale-[1.1]'>Get started</button>
        </div>
    </div>
  )
}

export default GetStarted