import React from 'react'
import { Parallax } from 'react-parallax';

import Carouselslider from '../../UI_elements/Carousel/Carousel'
import Banner from './Banner/Banner'
import Collections from './Collections/Collections'
import Category from './Category/Category'
import Services from './Services/Services'
import Help from './Help/Help'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="home-head-parallax">
        <Parallax
          bgImage="./Home Background/background.jpg"
          strength={500}
          className='home-parallax'
        >
          <div className="home-carousel">
            <Carouselslider />
          </div>
          <div className="home-banner">
            <Banner />
          </div>
          <div className="home-category">
            <Category />
          </div>
        </Parallax>
      </div>

      <div className="home-collections">
        <Collections title='Best Sellers' />
        <Collections title='On Discount' />
      </div>
      <div className="home-services">
        <Services />
      </div>
      <div className="home-help">
        <Help />
      </div>


    </div>
  )
}

export default Home