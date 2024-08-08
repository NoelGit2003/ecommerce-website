import React from 'react'
import SwiperCard from '../../../UI_elements/SwiperCard/SwiperCard';
import './Collections.css'

const Collections = (props) => {

  return (
    <section className='h-collections'>

      <div className="collection-head">

        <div className='collection-item'>
          <h1>{props.title}</h1>
        </div>

        <SwiperCard className='collection-item collection-slider' products = {props.products}/>

        <div className="collection-item">
          <button className='btn collection-btn'>See All</button>
        </div>

      </div>

    </section >
  );

}

export default Collections