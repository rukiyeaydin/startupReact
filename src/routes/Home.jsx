import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Wrapper from '../components/Wrapper'
import Cards from '../components/Cards'

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Wrapper />
      <Cards />
    </div>
  )
}

export default Home
