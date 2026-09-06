import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {faStar as solidStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as regularStar} from "@fortawesome/free-regular-svg-icons";
import User1 from '../images/User1.JPG'
import User2 from '../images/User2.jpg'
import User3 from '../images/User3.jpg'
import User4 from '../images/User4.jpg'
import PizzaBoy from '../images/PizzaDeliveryBoy.png'
import { useState } from 'react';

function Services() {

  const reviews = [
    {
      name: "Sophia Anderson",
      star: 5,
      text: "Fresh ingrediants, creative menu and warm service make this spot a hidden gem. Perfect for a casual dinners of special nights. Truly a foodie's paradise!",
      image: User1
    },
    {
      name: "Jack Andrew",
      star: 4,
      text: "Amazing food quality and quick service and warm service make this spot a hidden gem. Perfect for a casual dinners of special nights.",
      image: User2
    },
    {
      name: "Adonis Jasper", 
      star: 5,
      text: "Best experience ever, highly recommended!",
      image: User3
    },
    {
      name: "Olivia Fem", 
      star: 3,
      text: "The food was decent and presentation was good, but the service was a bit slow. Overall, it was an average experience—there’s definitely room for improvement.",
      image: User4
    }
  ]

  const [index, setIndex] = useState(0)

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const preReview = () => {
      setIndex((prev) => (prev -1 + reviews.length) % reviews.length)
  };

  const review = reviews[index]

  return (
   <>
   <main>
    {/* Services-Section */}
    <div id="service" className='page-section'>
    <div id='Services-Container' className='flex flex-col px-6 mx-auto lg:h-screen lg:flex-row lg:justify-center lg:items-center lg:px-20 lg:gap-10 md:flex-row md:justify-center md:items-center md:px-10 md:gap-10 pb-20 mx-auto'>
    <div id='Services-Left' className=''>
     <img className='w-80 h-80 mx-auto pb-12 rounded-4xl lg:w-120 lg:h-120 md:w-120 md:h-120' src={PizzaBoy} alt="" />
    </div>
    <div id='Services-Right' className='pb-12'>
      <div id='Services-Heading'>
        <h5 className="text-transform: uppercase text-amber-400 font-medium -tracking-4">
            our reviews
          </h5>
          <h1 className="text-transform: capitalize text-5xl font-bold">
            what they say?
          </h1>
      </div>
      <div id='Services-Sliders' className=''>
      <div id='Services-Reviews' className='pt-15 flex items-center gap-5 md:gap-3'>
       <img className='h-16 w-16 rounded-full lg:h-12 lg:w-12 md:h-12 md:w-12' src={review.image} alt={review.name} />
       <div id='Review-Names' className=''>
       <h4 className='font-bold text-3xl pb-1 lg:text-xl md:text-lg'>{review.name}</h4>
       <div className='flex items-center gap-1 text-yellow-400 lg:text-sm md:text-sm'>
       {/* {[...Array(review.star)].map((_, i) => (
       <FontAwesomeIcon key={i} icon={faStar}/>
       ))} */}

       {[...Array(5)].map((_, i) => (
        <FontAwesomeIcon 
        key={i}
        icon={i < review.star ? solidStar : regularStar}
        style={{color: 'gold'}}
        />
       ))}

       {/* <FontAwesomeIcon icon={faStar}/>
       <FontAwesomeIcon icon={faStar}/>
       <FontAwesomeIcon icon={faStar}/> */}
       </div>
       </div>
      </div>
      <div id='Services-Reviews-Para' className='flex flex-col py-10'>
      <p className='text-xl text-gray-500 lg:w-150 md:w-100'>{review.text}</p>
      </div>
      <div id='Services-Reviews-Button' className='flex justify-between items-center'>
       <FontAwesomeIcon className='bg-yellow-400 p-2 rounded-full mt-5 cursor-pointer' onClick={preReview} icon={faArrowLeft}/>
       <FontAwesomeIcon className='bg-yellow-400 p-2 rounded-full mt-5 cursor-pointer' onClick={nextReview} icon={faArrowRight}/>
      </div>
      </div>
    </div>
    </div>
    </div>
   </main>
   </>
  )
}

export default Services