import React from 'react'
import Home_Img from '../images/Home.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {faXTwitter, faInstagram, faFacebookF, faGooglePlusG} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <>
    <main>
      <div id='Home-Section' className='lg:min-h-screen'>
      <div id='Home-Container' className="flex lg:h-screen lg:justify-center lg:items-center flex-col lg:flex-row lg:px-20 mx-auto pt-12 lg:gap-40 md:flex-row md:items-center md:justify-center md:gap-20 md:pb-10 px-6">
        <div id='Home-Left'>
        <h1 className=' leading-14 text-5xl font-semibold text-transform: capitalize lg:text-[5rem] lg:leading-24 text-gray-800'>enjoy your <br/> delicious <span className='text-amber-400'>food</span></h1>
        <p className='pt-8 pb-6 text-gray-600 lg:text-[1.160rem] lg:font-medium'>We will fill your tummy with delicious <br/> food with fast delivery.</p>
        <div id='Social-Liks' className='pb-10 flex flex-row gap-3 md:gap-5 items-center '>
        <button className=' text-transform: capitalize bg-amber-400 hover:bg-amber-400/75 text-white px-5 py-2 rounded-xl cursor-pointer'>order now</button>
        <div className='flex flex-row flex-wrap gap-3 md:gap-5'>
        <FontAwesomeIcon className='bg-amber-100 p-2 rounded-lg text-lg cursor-pointer' icon={faXTwitter}/>
        <FontAwesomeIcon className='bg-amber-100 p-2 rounded-lg text-lg cursor-pointer' icon={faInstagram}/>
        <FontAwesomeIcon className='bg-amber-100 p-2 rounded-lg text-lg cursor-pointer' icon={faFacebookF}/>
        <FontAwesomeIcon className='bg-amber-100 p-2 rounded-lg text-lg cursor-pointer' icon={faGooglePlusG}/>
        </div>
        </div>
        </div>
        <div id='Home-Right' className='mx-auto relative w-[250px] flex justify-center items-center'>
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] h-[80%] bg-amber-400 rounded-t-[150px] z-0'></div>
        <img src={Home_Img} className='max-w-80 mx-auto lg:max-w-120 relative z-10 object-contain' alt="Chef_Image" />
        </div>
      </div>
      </div>
    </main>
    </>
  )
}

export default Home