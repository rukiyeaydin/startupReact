import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Wrapper from '../components/Wrapper'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Wrapper />
      <Cards />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
