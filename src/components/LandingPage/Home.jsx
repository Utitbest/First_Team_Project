import React from 'react'
import WomanCook from '/womanCooking.jpg'


const Home = () => {
  return (
    <section className='px-16'>
      <div className='w-full flex flex-col items-center pt-10'>
        <h1 className='text-4xl font-bold text-green-950 mb-3 md:text-6xl'>Healthy meals, zero fuss</h1>
        <p className='text-[15px] text-green-950'>Discover eight quick, whole food recipes that you can cook tonight</p>
        <p className='text-[15px] text-green-950 mb-7'>no processed junk, no guesswork.</p>

        <div className='flex items-center justify-center'>
          <button className='rounded-[10px] bg-green-950 text-white inline-flex px-3.5 py-2'>Start exploring</button>
        </div>

        <div className='flex items-center justify-center mt-10 p-3'>
          <div className='flex items-center justify-center'>
            <img className='aspect-4/2 object-cover flex border-gray-100 border-8 rounded-2xl' src={WomanCook} alt="Landing page image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home