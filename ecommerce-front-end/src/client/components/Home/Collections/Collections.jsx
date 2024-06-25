import React from 'react'
import SwiperCard from '../../../UI_elements/SwiperCard/SwiperCard';
import './Collections.css'

const Collections = () => {

  return (
    <section className='h-collections'>

      <div className="collection-head">

        <div className='collection-item'>
          <h1>Best Sellers</h1>
        </div>

        <SwiperCard className='collection-item collection-slider' />

        <div className="collection-item">
          <button className='btn btn-primary'>See All</button>
        </div>

      </div>

    </section >
  );

}

export default Collections