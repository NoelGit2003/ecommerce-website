import React from 'react'
import { useState } from 'react';
import Breadcrumb from '../../UI_elements/Breadcrumb/Breadcrumb'
import './ProductDetails.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductProgress from '../../UI_elements/ProductProgress/ProductProgress'
import Collections from '../Home/Collections/Collections'
import Help from '../Home/Help/Help'
import SwiperCard from '../../UI_elements/SwiperCard/SwiperCard';
const ProductDetails = () => {

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (halfStar) {
      stars.push(<i key={fullStars} className="fas fa-star-half-alt"></i>);
    }

    return stars;
  }

  // document.addEventListener('DOMContentLoaded', () => {
  //   document.querySelector('.quantity-up-arrow').addEventListener('click', () => {
  //     const input = document.getElementById('quantity');
  //     input.stepUp();
  //   });

  //     document.querySelector('.quantity-up-arrow').addEventListener('click', () => {
  //       const input = document.getElementById('quantity');
  //       input.stepUp();
  //     });
  //   });

  const [value, setValue] = useState(() => {
    const input = document.getElementById('quantity')
    return input ? parseInt(input.value, 10) : 0;
  })

  const increment = () => {
    setValue(prevValue => prevValue + 1)
  }

  const decrement = () => {
    if (value === 0) {
      setValue(prevValue => 0)
    }
    else
      setValue(prevValue => prevValue - 1)
  }

  return (
    <>
      <div className="product-details-main">
        <div className="product-details-box">
          <div className="product-wrapper">
            <div className="p-detail-list" style={{ marginLeft: "3vh" }}>
              <div className="p-details-img-box">
                {/* <img src="./ProductDetail Images/watch.jpg" alt="" /> */}
                <img className="image-zoom" src="./ProductDetail Images/watch-3.jpg" alt="" />
              </div>
              <div className="p-description-wrapper">
                <div style={{ marginTop: "3vh", fontSize: "1.9vh" }}>
                  <Breadcrumb />
                </div>
                <div className="p-description">
                  <h6 style={{ color: "#949494" }}>Casada</h6>
                  <h4> The Quad Series | All Black | Two Tone | Minimalism | Premium <br /> Analog Watch - For Men CSD-387-BLACK-BLK</h4>
                  <div className="single-product-rating">
                    <div className="product-stars">
                      {renderStars(4)}
                    </div>
                    <p>4.8 | 6 reviews</p>
                  </div>
                  <hr style={{ marginTop: "3vh", marginBottom: "4vh" }} />
                  <div className='product-price'>
                    <p style={{ fontSize: "3vh", color: "red" }}> -5% </p>
                    <div className='product-price-value'>
                      <img className="product-price-symbol" src="./ProductDetail Images/rupee.png" alt="" />
                      <p style={{ color: 'black', fontSize: '3vh' }}>92,000</p>
                    </div>
                  </div>
                </div>

                <div className="product-quantity">
                  <p>Quantity</p>
                  <div className="product-input-price">
                    <input type="text" id="quantity" value={value} />
                    <div className="product-quantity-arrows">
                      <img onClick={increment} className='quantity-up-arrow' src="./ProductDetail Images/up-arrow.png" alt="" />
                      <img onClick={decrement} className='quantity-down-arrow' src="./ProductDetail Images/down-arrow.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="product-shop-buttons">
                  <button className="btn btn-dark rounded-4 px-3 product-buttons " type="button">Add to cart</button>
                  <button className="btn btn-dark rounded-4 px-3 ms-3 product-buttons" type="button">Buy Now</button>
                </div>

                <div className="product-information">
                  <h5>About this item</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit temporibus rerum laboriosam autem illum eum exercitationem officiis, aperiam earum asperiores perspiciatis doloribus voluptate reprehenderit maiores veritatis facere natus, mollitia aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam accusantium vitae eos similique harum hic at sed obcaecati inventore ipsam est magni, vero, laudantium cum iste natus perspiciatis nemo debitis?</p>
                </div>

              </div>
            </div>
            <hr style={{ marginTop: '5vh' }} />
            <div className="product-ratings">
              <div className='product-reviews'>
                <h4 style={{fontSize:"5vh"}}>Reviews</h4>
                <div className="review-stars">
                  <div className="star-section">
                    <div className="rating-stars">
                      {renderStars(3.5)}
                    </div>
                    <div>
                    <p> 4.8 </p>
                    </div>
                  </div>


                </div>
                <p>Based on 6 reviews</p>
                <div>
                  <div className='purple-review'>Leave a Review</div>
                </div>
              </div>

              <div className="product-rating-bar">
                <ProductProgress />
              </div>
            </div>
              <hr style={{ marginTop: '5vh' }} />
{/* 
            <div className="user-views">
              <div className="user1-review">

              </div>
            </div> */}

          </div>
        </div>
          <div className="other-products">
              <h4>You might also like</h4>
          <SwiperCard />
          </div>
      </div>

    </>
  )
}

export default ProductDetails