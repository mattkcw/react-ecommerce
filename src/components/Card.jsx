import React from 'react'

const Card = ({ image }) => {
  return (
    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white bg-opacity-10 transform hover:scale-110 hover:bg-opacity-50 transition duration-500 ease-in-out'>
      <img className='w-20 mx-auto mt-[-3rem]' src={`src/assets/images/${image}`} alt='b1' />
      <h2 className='text-2xl font-bold text-center py-8'>text here</h2>
      <p className='text-center text-4xl font-bold'>stuff</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>more text here</p>
        <p className='py-2 border-b mx-8'>more text there</p>
        <p className='py-2 border-b mx-8'>more text where</p>
      </div>
      <button className='bg-[#7289da] w-[200px] rounded-lg font-medium mx-auto py-3 mt-6'>Push</button>
    </div>
  )
}

export default Card