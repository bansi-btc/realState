import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {BsChatFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='contact-wrapper pb-[2rem]' id='contact'>
        <div className="contact-container  p-[1rem] flex flex-col md:flex-row items-center md:items-start justify-between  w-full lg:max-w-[1080px]  lg:mx-auto px-10 gap-5 md:gap-0">
        <div className="left flexColStart gap-[3rem] md:w-[50%] ">

                <div className='flex flex-col items-center md:items-start gap-2'>
                    <h1 className='text-2xl text-[#ff922d] font-semibold'>Our Contact Us</h1>
                    <h1 className="text-3xl font-bold text-[#1a2552]">Easy to contact us</h1>
                    <p className='text-gray-400 text-sm text-center sm:text-start'>We always ready to helpby providing the best services for you. we believe a good blace to live can make you life better.</p>
                </div>

                <div className='flex flex-col md:flex-row md:flex-wrap justify-start items-center gap-5 border-green-500 w-full'>
                    <div className='w-full md:w-[46%] border border-gray-200 rounded-md flex flex-col items-center p-3 gap-3 transition-all duration-300 hover:scale-[1.1] hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer'>
                        <div className=' self-start flex flex-row items-center justify-start gap-4'>
                            <div className='h-[30px] w-[30px] bg-blue-100 flex flex-col items-center justify-center rounded-sm'><BsFillTelephoneFill className='text-blue-500'/></div>
                            <div className='flex flex-col items-start justify-center gap-0'>
                                <div className='text-lg font-semibold text-gray-800'>Call</div>
                                <div className='text-sm text-gray-500'>1234 123 5412</div>
                            </div>
                            

                        </div>
                        <button className='bg-blue-100 rounded-md text-center w-[95%] mx-auto self-center px-3 py-1 text-blue-500 font-semibold transition-all duration-200 hover:scale-[0.9] hover:bg-purple-500 hover:text-gray-100 '>Call Now</button>
                    </div>
                    <div className='w-full md:w-[46%] border border-gray-200 rounded-md flex flex-col items-center p-3 gap-3 transition-all duration-300 hover:scale-[1.1] hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer'>
                        <div className=' self-start flex flex-row items-center justify-start gap-4'>
                            <div className='h-[30px] w-[30px] bg-blue-100 flex flex-col items-center justify-center rounded-sm'><BsFillChatDotsFill className='text-blue-500'/></div>
                            <div className='flex flex-col items-start justify-center gap-0'>
                                <div className='text-lg font-semibold text-gray-800'>Chat</div>
                                <div className='text-sm text-gray-500'>1234 123 5412</div>
                            </div>
                            

                        </div>
                        <button className='bg-blue-100 rounded-md text-center w-[95%] mx-auto self-center px-3 py-1 text-blue-500 font-semibold  transition-all duration-200 hover:scale-[0.9] hover:bg-purple-500 hover:text-gray-100'>Chat Now</button>
                    </div>
                    <div className='w-full md:w-[46%] border border-gray-200 rounded-md flex flex-col items-center p-3 gap-3 transition-all duration-300 hover:scale-[1.1] hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer'>
                        <div className=' self-start flex flex-row items-center justify-start gap-4'>
                            <div className='h-[30px] w-[30px] bg-blue-100 flex flex-col items-center justify-center rounded-sm'><BsFillChatDotsFill className='text-blue-500'/></div>
                            <div className='flex flex-col items-start justify-center gap-0'>
                                <div className='text-lg font-semibold text-gray-800'>Video Call</div>
                                <div className='text-sm text-gray-500'>1234 123 5412</div>
                            </div>

                        </div>
                        <button className='bg-blue-100 rounded-md text-center w-[95%] mx-auto self-center px-3 py-1 text-blue-500 font-semibold  transition-all duration-200 hover:scale-[0.9] hover:bg-purple-500 hover:text-gray-100'>Video Call Now</button>
                    </div>
                    <div className='w-full md:w-[46%] border border-gray-200 rounded-md flex flex-col items-center p-3 gap-3 transition-all duration-300 hover:scale-[1.1] hover:shadow-md hover:shadow-gray-500 hover:cursor-pointer'>
                        <div className=' self-start flex flex-row items-center justify-start gap-4'>
                            <div className='h-[30px] w-[30px] bg-blue-100 flex flex-col items-center justify-center rounded-sm'><BsChatFill className='text-blue-500'/></div>
                            <div className='flex flex-col items-start justify-center gap-0'>
                                <div className='text-lg font-semibold text-gray-800'>Message</div>
                                <div className='text-sm text-gray-500'>1234 123 5412</div>
                            </div>
                            

                        </div>
                        <button className='bg-blue-100 rounded-md text-center w-[95%] mx-auto self-center px-3 py-1 text-blue-500 font-semibold  transition-all duration-200 hover:scale-[0.9] hover:bg-purple-500 hover:text-gray-100'>Message Now</button>
                    </div>
                </div>
        </div>
        <div className="right flex flex-col items-center justify-center md:w-[40%]">
                <div className="image-container h-[380px] md:h-[450px] rounded-t-full overflow-hidden border-4 border-gray-400 object-cover">
                <img src="./contact.jpg" alt="" className='h-full w-full'/>
                </div>
        </div>
        
           
        </div>
    </div>
  )
}

export default Contact