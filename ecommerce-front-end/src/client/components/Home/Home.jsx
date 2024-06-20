import React from 'react'


import Carouselslider from '../../UI_elements/Carousel/Carousel'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="home-carousel">
        <Carouselslider />
      </div>
      <div className="home-collections">
        
      </div>

    </div>
  )
}

export default Home