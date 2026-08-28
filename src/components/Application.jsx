import React from 'react'
import Phone_Img from '../images/phone.png'


function Application() {
  return (
    <>
    <main>
      <div id='Application-Section' className='bg-[#FFF1CC] mx-6 lg:mx-20 min-h-screen rounded-4xl'>
        <div id='Application-Container' className='flex flex-col mx-auto px-8 lg:px-20 md:flex-row justify-center items-center gap-20 h-1/2'>
          <div id='Application-Left'>
          <img src={Phone_Img} className='mx-auto pt-8 rotate-[-10deg] w-60 md:w-80' alt="" />
          </div>
          <div id='Application-Right' className='pb-10 md:pt-10'>
          <h5 className="text-transform: uppercase text-amber-400 font-medium -tracking-4">
            our application
          </h5>
          <h1 className="text-gray-800 text-transform: capitalize text-5xl font-bold pb-7 md:pt-2 md:leading-14 lg:text-6xl lg:leading-18">
            simple way to <br/> order your food
          </h1>
          <p className='text-gray-600 lg:text-lg'>Discover food wherever and whenever <br/> and get your food delivery quickly.</p>
          <button className=' text-transform: capitaliz bg-amber-400 hover:bg-amber-400/75 text-white px-5 py-2 rounded-xl cursor-pointer mt-6'>Get the App</button>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Application