import React from 'react'
import BeefBurger from '../carts-images/Beef-Burger.png'
import VeggiePizza from '../carts-images/Pizza.png'
import FriedChicken from '../carts-images/Chicken-Broast.png'
import ChickenRoll from '../carts-images/Chicken-Roll.png'
import SubSandwich from '../carts-images/Sub-Sandwich.png'
import ChickenLasagna from '../carts-images/Chicken-Lasagna.png'
import ItalianSpaghetti from '../carts-images/Italian-Spaghetti.png'
import ChickenSharwama from '../carts-images/Chicken-Shawarma.png'

function Menu({ addToCart }) {

  const products = [
    {
      id: 1,
      name: "double beef burger",
      price: 9.67,
      image: BeefBurger
    },
    {
      id: 2,
      name: "veggie pizza",
      price: 10.99,
      image: VeggiePizza
    },
    {
      id: 3,
      name: "fried chicken",
      price: 13.45,
      image: FriedChicken
    },
    {
      id: 4,
      name: "chicken roll",
      price: 7.50,
      image: ChickenRoll
    },
    {
      id: 5,
      name: "sub sandwich",
      price: 6.99,
      image: SubSandwich
    },
    {
      id: 6,
      name: "chicken lasagna",
      price: 16.45,
      image: ChickenLasagna
    },
    {
      id: 7,
      name: "italian spaghetti",
      price: 7.65,
      image: ItalianSpaghetti
    },
    {
      id: 8,
      name: "chicken sharwama",
      price: 9.31,
      image: ChickenSharwama
    },
  ]

  return (
    <>
      <main>
        {/* Menu-Section */}
        <div id='menu' className='page-section'>
          <div id='Menu-Container' className='flex flex-col px-6 mx-auto py-20'>
            <div id='Menu-Heading' className='text-center pb-12'>
              <h5 className="text-transform: uppercase text-amber-400 font-medium -tracking-4">
                our menu
              </h5>
              <h1 className="text-transform: capitalize text-5xl font-bold">
                the most popular
              </h1>
            </div>
            <div id='Menu_Cart_Section' className='md:mx-6 lg:mx-8'>
              <div id='Menu-Cart-Container' className='pb-8 flex flex-col gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

                {products.map((product) => (
                  <div
                    key={product.id}
                    className='text-center flex flex-col gap-2 border border-amber-400 rounded-xl inset-shadow-sm inset-shadow-white-100/10 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] p-6'
                  >
                    <img
                      className='h-35 w-35 mx-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]'
                      src={product.image}
                      alt={product.name}
                    />
                    <h4
                      className='text-transform: capitalize text-lg font-bold'
                    >
                      {product.name}
                    </h4>
                    <span
                      className='text-amber-400 font-semibold pb-2'
                    >
                      ${product.price}
                    </span>
                    <button
                      className='bg-amber-400 hover:bg-amber-500 w-fit mx-auto text-white py-2 px-5 rounded-xl text-sm cursor-pointer'
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Menu