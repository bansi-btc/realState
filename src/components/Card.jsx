import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css" 

const Card = ({name, price, detail, image}) => {
  return (
    <div className='w-[52%] sm:w-full h-[300px] p-[10px] hover:bg-blue-50 transition-all duration-200 hover:scale-[1.02] mx-auto hover:shadow-lg hover:shadow-gray-400 cursor-pointer rounded-lg'>
        <img src={image} alt=""  />
        <div className='text-xl font-semibold text-gray-500'><span className='text-[#ff922d]'>$</span> {price}</div>
        <div className='text-xl font-bold text-blue-950'>{name}</div>
        <div className="text-xs text-gray-600">{detail}</div>
    </div>
  )
}

export default Card