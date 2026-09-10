import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About_us from './components/About_us'
import Menu from './components/Menu'
import Services from './components/Services'
import Application from './components/Application'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import CartSlidebar from './components/CartSlidebar'
import { useState } from 'react'

function App() {

  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  //Function for Cart Adding Items.

  const addToCart = (product) => {

    setCart((previousCart) => {

      const existingCart = previousCart.find(
        (item) => item.id === product.id
      )

      if (existingCart) {

        return previousCart.map(
          (item) => item.id === product.id
            ? {
              ...item,
              quantity: item.quantity + 1
            }
            : item
        )
      }

      return [
        ...previousCart,
        {
          ...product,
          quantity: 1
        }
      ]

    })
  }

  console.log(cart)

  //Function for Product Increasing and Decreasing..

  const quantityIncreasing = (id) => {

    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id ? {
          ...item,
          quantity: item.quantity + 1
        } :
          item
      ))
  }

  const quantityDecreasing = (id) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id ? {
          ...item,
          quantity: item.quantity - 1
        } :
          item
      )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeFromCart = (id) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    )
  }

  return (
    <>
      <Header
        cart={cart}
        setIsCartOpen={setIsCartOpen}
      />
      <main className='pt-20'>
        <Home />
        <About_us />
        <Menu addToCart={addToCart} />
        <Services />
        <Application />
        <Subscribe />
        <Footer />
      </main>

      <CartSlidebar
        cart={cart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        quantityIncreasing={quantityIncreasing}
        quantityDecreasing={quantityDecreasing}
        removeFromCart={removeFromCart}
      />

    </>
  )
}

export default App
