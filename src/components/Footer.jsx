import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {faXTwitter, faInstagram, faFacebookF, faGooglePlusG} from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    // Footer-Section
      <div id='contact' className='page-section'>
    <div className='mt-20 bg-amber-100'>
      <footer>
        <div id='Footer-Container' className='p-6 pt-10 md:pt-16 gap-6 grid grid-cols-1 md:text-center lg:grid-cols-4 lg:flex-row lg:py-20 lg:px-20 mx-auto'>
          <div id='footer-logo' className='md:mx-auto lg:flex flex-col lg:items-center'>
           <h2 className="text-2xl font-bold text-amber-400 cursor-pointer md:text-3xl lg:text-2xl">PizzaWebsite.</h2>
           <p className='pt-8 pb-6 text-gray-600 font-medium md:text-lg lg:text-[1rem] lg:font-medium'>We will fill your tummy with delicious <br/> food with fast delivery.</p>
        <div className='flex flex-row flex-wrap gap-3 md:gap-5 lg:gap-2'>
        <FontAwesomeIcon className='bg-white p-2 md:p-3 lg:p-2 rounded-lg text-lg cursor-pointer md:text-xl lg:text-lg' icon={faXTwitter}/>
        <FontAwesomeIcon className='bg-white p-2 md:p-3 lg:p-2 rounded-lg text-lg cursor-pointer md:text-xl lg:text-lg' icon={faInstagram}/>
        <FontAwesomeIcon className='bg-white p-2 md:p-3 lg:p-2 rounded-lg text-lg cursor-pointer md:text-xl lg:text-lg' icon={faFacebookF}/>
        <FontAwesomeIcon className='bg-white p-2 md:p-3 lg:p-2 rounded-lg text-lg cursor-pointer md:text-xl lg:text-lg' icon={faGooglePlusG}/>
        </div>
          </div>
          <div id='our-menu'>
            <h4 className='text-3xl lg:text-3xl font-bold text-transform: capitalize pb-4 md:text-4xl'>our menu</h4>
            <ul className='text-gray-600 flex flex-col gap-2 text-transform: capitalize md:text-lg lg:text-base'>
            <a href=""><li>special</li></a>
            <a href=""><li>popular</li></a>
            <a href=""><li>category</li></a>
            </ul>
          </div>
          <div id='company'> 
            <h4 className='text-3xl lg:text-3xl font-bold text-transform: capitalize pb-4 md:text-4xl'>company</h4>
            <ul className='text-gray-600 flex flex-col gap-2 text-transform: capitalize md:text-lg lg:text-base'>
            <a href=""><li>why foodie</li></a>
            <a href=""><li>partner with us</li></a>
            <a href=""><li>about us</li></a>
            <a href=""><li className='text-transform: uppercase'>faq's</li></a>
            </ul>
          </div>
          <div id='support'>
            <h4 className='text-3xl lg:text-3xl font-bold text-transform: capitalize pb-4 md:text-4xl'>support</h4>
            <ul className='text-gray-600 flex flex-col gap-2 text-transform: capitalize md:text-lg lg:text-base'>
            <a href=""><li>account</li></a>
            <a href=""><li>support center</li></a>
            <a href=""><li>feedback</li></a>
            <a href=""><li>contacts</li></a>
            </ul>
          </div>
          </div>
          <p className='text-normal text-gray-600 text-transform:m capitalize text-center pb-5'>created by Owais nawab</p>
      </footer>
    </div>
    </div>
  )
}

export default Footer