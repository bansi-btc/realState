import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css" 
import data from '../utils/slider.json'
import Card from './Card'

const Residencies = () => {
    const swi=useSwiper();

    const sliderSettings={
        slidesPerView:1,
        spaceBetween:50,
        breakpoints:{
            480:{
                slidesPerView:1,
            },
            600:{
                slidesPerView:2,
            },
            750:{
                slidesPerView:3,
            },
            1100:{
                slidesPerView:4,
            },
        }
    }
  return (
    <section className="r-wrapper w-full pb-[2rem]" id='residencies'>
        <div className="r-container p-[1rem] w-full lg:max-w-[1100px]  lg:mx-auto ">
            <div className="r-head flex flex-col md:items-start items-center gap-2 md:gap-0">
                <h1 className='text-2xl text-[#ff922d] font-semibold'>Best choices</h1>
                <h1 className='text-3xl font-bold text-[#1a2552]'>Popular Residencies</h1>
            </div>
            <Swiper {...sliderSettings} className=' mt-4 md:mt-0'>
            <SliderButtons/>
                
                {
                    data.map((ele, i)=>{
                return <SwiperSlide key={i} className=''>
                            {/* <div className='r-card'>
                                Himanshu
                            </div> */}
                            <Card {...ele}/>
                        </SwiperSlide>
                    })
                }

                
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies

const SliderButtons= ()=>{
    const swiper=useSwiper();
    return (
        <div className='r-buttons flex flex-row items-center justify-center md:justify-end gap-2 mt-0 sm:mt-2 py-2 md:py-0'>
            <button onClick={()=>{swiper.slidePrev()}} className='text-xl text-blue-500 border rounded-md bg-[#c9e6ff] h-[30px] w-[30px] flex flex-col items-center justify-center hover:scale-[1.1] transition-all duration-200'>&lt;</button>
            <button onClick={()=>{swiper.slideNext()}} className='text-xl text-blue-500 border rounded-md bg-[#c9e6ff] h-[30px] w-[30px] flex flex-col items-center justify-center hover:scale-[1.1] transition-all duration-200'>&gt;</button>
        </div>
    )
}