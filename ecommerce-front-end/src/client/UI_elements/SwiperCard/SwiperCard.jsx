import React from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SwiperCard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SwiperCard = () => {

  const currency = 'Rs. '

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
  
    if (halfStar) {
      stars.push(<i key={`half-${fullStars}`} className="fas fa-star-half-alt"></i>);
    }
  
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${fullStars + halfStar + i}`} className="far fa-star"></i>);
    }
  
    return stars;
  };

  const data = [
    {
      name: 'Drone',
      price: 100000,
      rating: 5,
      image: "https://static.wixstatic.com/media/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg/v1/fill/w_331,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg"
    },
    {
      name: 'Gaming Laptop',
      price: 70000,
      rating: 4.5,
      image: "https://static.wixstatic.com/media/c22c23_3ab3d3acd73843deba1dece7b2254e2f~mv2.jpg/v1/fill/w_331,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_3ab3d3acd73843deba1dece7b2254e2f~mv2.jpg"
    },
    {
      name: 'Earbuds',
      price: 3000,
      rating: 4,
      image: "https://static.wixstatic.com/media/c22c23_0fa2a9bb97f443658acb747221ff337b~mv2.jpg/v1/fill/w_331,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_0fa2a9bb97f443658acb747221ff337b~mv2.jpg"
    },
    {
      name: 'Tablet',
      price: 25000,
      rating: 3,
      image: "https://static.wixstatic.com/media/c22c23_9a6d29ecf9c640b28cc79f695e9fb3c2~mv2.png/v1/fill/w_331,h_331,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_9a6d29ecf9c640b28cc79f695e9fb3c2~mv2.png"
    },
    {
      name: '4k LED TV',
      price: 70000,
      rating: 3.9,
      image: "https://static.wixstatic.com/media/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg/v1/fill/w_331,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg"
    }
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      breakpoints={{
        270: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        960: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }}
      className='swiper-collection'>

      {data.map((card, i) => (
        <SwiperSlide key={i}>
          <div className="card">
            <div className="card-details">
              <NavLink to='/productDetails' style={{textDecoration: 'none'}}>
                <img src={card.image} alt="collection_image" className="card-image" />
                <div className="card-name" >{card.name}</div>
                <div className="card-price">
                  <span>{currency}</span>
                  <span>{card.price}</span>
                </div>
                <div className="card-rating">
                  <span className='star-rating'>
                    {renderStars(card.rating)}
                  </span>
                  <span className="card-rating-number">{card.rating}</span>
                </div>
              </NavLink>
            </div>
          </div>
        </SwiperSlide>
      ))}


    </Swiper>
  );
}

export default SwiperCard;