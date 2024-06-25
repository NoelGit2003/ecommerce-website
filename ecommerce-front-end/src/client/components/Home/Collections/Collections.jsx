import React from 'react'
import SwiperCard from '../../../UI_elements/SwiperCard/SwiperCard';
import './Collections.css'

const Collections = () => {

  return (
    <section className='h-collections'>

      <div className="collection-head">
        <h1>Best Sellers</h1>
        <div>
          <SwiperCard className='collection-slider' />
        </div>
      </div>

    </section >
  );

}

export default Collections