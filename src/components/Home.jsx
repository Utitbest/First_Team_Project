import React from 'react'
import WomanCook from '/womanCooking.jpg'


const Home = () => {
  return (
    <div className='flex-1 flex w-full flex-col justify-center'>
      <div className='w-full flex flex-col items-center pt-10'>
        <h1 className='text-4xl font-extrabold text-green-800 mb-3'>Healthy meals, zero fuss</h1>
        <p className='text-[12px] text-green-800'>Discover eight quick, whole food recipes that you can cook tonight</p>
        <p className='text-[12px] text-green-800 mb-7'>no processed junk, no guesswork.</p>

        <div className='flex items-center justify-center'>
          <button className='rounded-[10px] bg-green-800 text-white inline-flex px-3.5 py-2'>Start exploring</button>
        </div>

        <div className='w-full flex items-center justify-center '>
          <div className=' items-center justify-center '>
            <img className='rotate-90 w-100' src={WomanCook} alt="Landing page image" />
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Home