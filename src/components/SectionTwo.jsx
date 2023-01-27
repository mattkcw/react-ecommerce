import React from 'react'

const SectionTwo = () => {
  return (
    <div className='w-full bg-[#0d0d0e] py-16 px-4'>
      <div className='mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>HOME/PERSONAL COMPUTER</p>
          <h1 className='text-[#ffffff] md:text-4xl sm:text-3xl text-2xl font-bold pb-6'>Tatung Einstein</h1>
          <p className=''>A variety of software could then be loaded from disk, including a CP/M-compatible operating system called Xtal DOS, 
            and a BASIC interpreter (Xtal BASIC). More than 400 software titles were released for the system, including about 120 games.
          </p>
        </div>
        <img className='w-[500px] mx-auto my-4' src='images/tatung-einstein.png' alt='computer' />
        
      </div>
    </div>
  )
}

export default SectionTwo