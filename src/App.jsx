import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About_us from './components/About_us'
import Menu from './components/Menu'
import Services from './components/Services'
import Application from './components/Application'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <main className='pt-20'>
      <Home/>
      <About_us/>
      <Menu/>
      <Services/>
      <Application/>
      <Subscribe/>
      <Footer/>
      </main>
    </>
  )
}

export default App
