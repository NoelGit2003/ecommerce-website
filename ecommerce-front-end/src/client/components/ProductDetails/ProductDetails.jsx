import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

import { userContext } from '../../../App'
import ProductProgress from '../../UI_elements/ProductProgress/ProductProgress';
import Breadcrumb from '../../UI_elements/Breadcrumb/Breadcrumb';
import SwiperCard from '../../UI_elements/SwiperCard/SwiperCard';
import './ProductDetails.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProductDetails = () => {
  const { user } = useContext(userContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:3000/client/getProduct/${id}`)
      .then(res => {
        const data = res.data;
        setProduct(data);
      })
      .catch(err => console.error('Error fetching product data:', err));
  }, [id]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/client/getAllProducts');
        await setAllProducts(response.data);
        // console.log(products)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async () => {
    try {
      console.log(user)
      const response = await axios.put('http://localhost:3000/client/addToCart', {
        email: user.email, // Use the user's email
        productId: id, // Use the current product ID
        quantity: quantity
      });

      console.log('Product added to cart:', response.data);
      // Optionally, provide feedback to the user that the product has been added to the cart
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

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

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="product-details-main">
      <div className="product-details-box">
        <div className="product-wrapper">
          <div className="p-detail-list">
            <div className="p-details-img-box">
              <img className="image-zoom" src={`http://localhost:3000/uploads/${product.ProductImage}`} alt={product.ProductName} />
            </div>
            <div className="p-description-wrapper">
              <div className="p-breadcrumb" style={{ marginTop: "3vh", fontSize: "1.9vh" }}>
                <Breadcrumb />
              </div>
              <div className="p-description">
                <h6 style={{ color: "#949494" }}>{product.ProductCategory}</h6>
                <p className='product-heading'>{product.ProductTitle}</p>
                <div className="single-product-rating">
                  <div className="product-stars">
                    {renderStars(product.ProductRating || 0)}
                  </div>
                  <p>{product.ProductRating || 0} | {product.ReviewsCount || 0} reviews</p>
                </div>
                <hr style={{ marginTop: "3vh", marginBottom: "4vh" }} />
                <div className='product-price'>
                  <p style={{ fontSize: "3vh", color: "red" }}> -{product.ProductDiscount}% </p>
                  <div className='product-price-value'>
                    <img className="product-price-symbol" src="./ProductDetail Images/rupee.png" alt="₹" />
                    <p style={{ color: 'black', fontSize: '3vh' }}>{product.ProductPrice}</p>
                  </div>
                </div>
              </div>

              <div className="product-quantity">
                <p>Quantity</p>
                <div className="product-input-price mb-1">
                  <input type="text" id="quantity" value={quantity} readOnly />
                  <img onClick={increment} className='quantity-up-arrow' src="./ProductDetail Images/up-arrow.png" alt="+" />
                  <img onClick={decrement} className='quantity-down-arrow' src="./ProductDetail Images/down-arrow.png" alt="-" />
                </div>
              </div>
              <div className="product-shop-buttons">
                <button
                  className="btn btn-dark rounded-4 px-3 product-buttons"
                  type="button"
                  onClick={addToCart}
                >
                  Add to cart
                </button>
                <NavLink to="/orderNow">
                  <button className="btn btn-dark rounded-4 px-3 product-buttons" type="button">Buy Now</button>
                </NavLink>
              </div>

              <div className="product-information">
                <h5>About this item</h5>
                <p>{product.ProductDescription}</p>
              </div>
            </div>
          </div>
          <hr style={{ marginTop: '5vh' }} />

          <div className="product-ratings">
            <div className='product-reviews'>
              <h4 style={{ fontSize: "35px" }}>Reviews</h4>
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
          <hr style={{ marginTop: '5vh' }} className='hr-below-bar' />
        </div>
      </div>
      <div className="other-products">
        <h4>You might also like</h4>
        <SwiperCard products={allProducts} />
      </div>
    </div>
  );
};

export default ProductDetails;
