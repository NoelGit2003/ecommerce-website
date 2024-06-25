import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SwiperCard.css';

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
    }
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 960px
        960: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }}
      className='swiper-collection'
    >
      {data.map((card, i) => (
        <SwiperSlide key={i}>
          <div className="card">
            <div className="card-details">
              <img src={card.image} alt="collection_image" className="card-image" />
              <div className="card-name">{card.name}</div>
              <div className="card-price">
                <span>Rs.</span>
                <span>{card.price}</span>
              </div>
              <span className="card-rating">{card.rating}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperCard;