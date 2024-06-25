import React from 'react'


import Carouselslider from '../../UI_elements/Carousel/Carousel'
import Banner from './Banner/Banner'
import Collections from './Collections/Collections'
import Category from './Category/Category'
import Services from './Services/Services'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="home-carousel">
        <Carouselslider />
      </div>
      <div className="home-banner">
        <Banner />
      </div>
      <div className="home-category">
        <Category/>
      </div>
      <div className="home-collections">
        <Collections />
      </div>
      <div className="home-services">
        <Services/>
      </div>
    </div>
  )
}

export default Home