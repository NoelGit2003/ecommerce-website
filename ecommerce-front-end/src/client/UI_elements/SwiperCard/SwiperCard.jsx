import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './SwiperCard.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperCard = () => {

    const data = [
        {
          name: 'image',
          price: 100,
          rating: 5,
          image: "https://static.wixstatic.com/media/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg/v1/fill/w_331,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg"
    
        },
        {
          name: 'image',
          price: 100,
          rating: 5,
          image: "https://static.wixstatic.com/media/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg/v1/fill/w_331,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg"
    
        },
        {
          name: 'image',
          price: 100,
          rating: 5,
          image: "https://static.wixstatic.com/media/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg/v1/fill/w_331,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg"
    
        },
        {
          name: 'image',
          price: 100,
          rating: 5,
          image: "https://static.wixstatic.com/media/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg/v1/fill/w_331,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg"
    
        },
        {
          name: 'image',
          price: 100,
          rating: 5,
          image: "https://static.wixstatic.com/media/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg/v1/fill/w_331,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg"
    
        },
      ]
      
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='swiper-collection'
        >
            {data.map((card, i) => (
                <SwiperSlide key={i}>
                    <div className="r-card">
                        <img src={card.image} alt="collection_image" />


                        <div className="">
                            <span style={{ color: "orange" }}>$</span>
                            <span>{card.price}</span>
                        </div>


                        <div className="primaryText">
                            {card.name}
                        </div>


                        <span className="secondaryText">
                            {card.rating}
                        </span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SwiperCard