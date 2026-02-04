import React from 'react'
import Nav from '../components/Nav'
import Time from '../components/Time'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <Nav/>
        <Time/>
        <Footer/>
      
    </div>
  )
}

export default Home
