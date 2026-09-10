import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'

function CartSlidebar({
  cart,
  isCartOpen,
  setIsCartOpen,
  quantityIncreasing,
  quantityDecreasing,
  removeFromCart
}) {

  // Total Function

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  )

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white z-[60] shadow-2xl
    transform transition-transform duration-300
    ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
    >

      {/* Cart Slidebar Header */}

      <div className='flex justify-between items-center p-5 border-b'>
        <h2 className='text-transform: capitalize text-xl font-bold'
        >
          your cart</h2>
        <button
          onClick={() => setIsCartOpen(false)}
          className='cursor-pointer'
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      {/* Cart Slidebar Items */}

      <div className='p-5 h-[calc(100vh-80px)] overflow-y-auto'>

        {cart.length === 0 ? (
          <p className='text-transform: capitalize'>
            your cart is empty
          </p>
        ) : (

          <div className='flex flex-col gap-4'>

            {cart.map((item) => (

              <div
                key={item.id}
                className='flex items-center gap-3 border-b pb-4'>

                <img
                  className='w-16 h-16 object-contain'
                  src={item.image}
                  alt={item.name}
                />

                <div
                  className='flex-1'
                >
                  <h3
                    className='font-semibold capitalize'>
                    {item.name}
                  </h3>
                  <p
                    className='text-amber-400 font-semibold'>
                    ${item.price}
                  </p>
                  <p className=''>
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                  <div className='flex items-center gap-2 mt-2'>
                    <button
                      onClick={() => quantityIncreasing(item.id)}
                      className='w-7 h-7 border rounded cursor-pointer bg-amber-400 text-white'
                    >
                      <FontAwesomeIcon className='text-sm' icon={faPlus} />
                    </button>
                    <p>
                      {item.quantity}
                    </p>
                    <button
                      onClick={() => quantityDecreasing(item.id)}
                      className='w-7 h-7 border rounded cursor-pointer bg-amber-400 text-white'
                    >
                      <FontAwesomeIcon className='text-sm' icon={faMinus} />
                    </button>
                  </div>
                  <div className='flex flex-col'>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className='cursor-pointer'
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        )}
        <div className='border-t p-5'>
          <div className='flex justify-between font-bold text-lg items-center'>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            className='w-full mt-4 bg-amber-400 text-white rounded-lg py-3 cursor-pointer'
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartSlidebar