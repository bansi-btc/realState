import React from 'react'

const Companies = () => {
  return (
    <div className='c-wrapper ' id='company'>
        <div className="c-container px-[1rem] py-[2rem] flex flex-col items-center gap-10 md:gap-0 md:flex-row justify-between  w-full lg:max-w-[1080px]  lg:mx-auto">
            <img src="./prologis.png" alt="" width={130}/>
            <img src="./tower.png" alt="" width={130}/>
            <img src="./equinix.png" alt="" width={130}/>
            <img src="./realty.png" alt="" width={130}/>

        </div>
    </div>
  )
}

export default Companies