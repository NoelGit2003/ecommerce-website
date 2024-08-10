import React from 'react'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { userContext } from '../../../App'
import './Cart.css'

const Cart = () => {
  const { user } = useContext(userContext);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/client/cart', {
          params: { email: user.email },
        });
        setAllProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [user.email]);

  const deleteItem = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/client/cartItemDelete`, {
        data: {
          email: user.email,
          productId,
        },
      });

      if (response.status === 200) {
        setAllProducts(prevProducts => prevProducts.filter(item => item.product._id !== productId));
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const response = await axios.put('http://localhost:3000/client/updateCartQuantity', {
        email: user.email,
        productId,
        quantity,
      });
      console.log('Update Response:', response.data); // Debugging line
      setAllProducts(prevProducts =>
        prevProducts.map(item =>
          item.product._id === productId ? { ...item, quantity } : item
        )
      );
    } catch (error) {
      console.error('Error updating quantity:', error);
      if (error.response) {
        console.error('Server responded with:', error.response.data); // Server response
      }
    }
  };

  const increment = (productId, currentQuantity) => {
    console.log('Incrementing product:', productId, 'Current Quantity:', currentQuantity); // Debugging line
    updateQuantity(productId, currentQuantity + 1);
  };

  const decrement = (productId, currentQuantity) => {
    console.log('Decrementing product:', productId, 'Current Quantity:', currentQuantity); // Debugging line
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    }
  };

  const calculateTotal = () => {
    return allProducts.reduce((total, item) => {
      return total + (item.product.ProductPrice * item.quantity);
    }, 0);
  };

  return (
    <section className='cart-section'>
      <div className="cart-left">
        <div className='c-left-head-box'>
          <div className="c-left-head">
            <h1>My Cart</h1>
          </div>
          <hr />
        </div>

        <div className="c-left-product">
          {allProducts.map(item => (
            <div key={item.product._id} className="c-left-product-main">
              <div className="c-left-image">
                <img src={`http://localhost:3000/uploads/${item.product.ProductImage}`} alt={item.product.ProductTitle} />
                <div className="c-left-detail-head-mobile">
                  <h4>{item.product.ProductTitle}</h4>
                  <p>{item.product.ProductPrice}</p>
                </div>
              </div>

              <div className="c-left-detail c-lpm-item">
                <h4>{item.product.ProductTitle}</h4>
                <p>{item.product.ProductPrice}</p>
              </div>

              <div className="c-left-reponsive-product c-left-productCount c-lpm-item">
                <div className="c-left-productCount c-lpm-item">
                  <div className="c-left-counter">
                    <div className='c-left-minus' onClick={() => decrement(item.product._id, item.quantity)}>
                      <img src="./Cart Images/minus.png" alt="-" style={{ width: '10px', paddingBottom: '3px' }} />
                    </div>
                    <div className="c-left-count"> {item.quantity} </div>
                    <div className="c-left-plus" onClick={() => increment(item.product._id, item.quantity)}>
                      <img src="./Cart Images/plus.png" alt="+" style={{ width: '10px', paddingBottom: '3px' }} />
                    </div>
                  </div>
                </div>

                <div className="c-left-totalproductprice c-lpm-item">
                  <div className="c-left-price"> {item.product.ProductPrice * item.quantity} </div>
                </div>

                <div className="c-left-delete c-lpm-item">
                  <img
                    src="./Cart Images/delete.png"
                    alt="Delete"
                    onClick={() => deleteItem(item.product._id)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-right">
        <div className='cart-right-content'>

          <div>
            <div className="cart-right-head">
              Order Summary
            </div>
            <hr />
          </div>

          <div className="cart-right-main">
            <div className="cart-total cart-right-main-item">
              <p>Subtotal</p>
              <p>{calculateTotal()}</p>
            </div>

            <div className="cart-charges cart-right-main-item">
              <div className="cart-delivery">
                <p>Delivery</p>
                <p>250</p>
              </div>
              <div className="cart-gst">
                <p>GST</p>
                <p>Included</p>
              </div>
            </div>

            <div className="cart-address cart-right-main-item">
              <span>Address:</span>
              <span>Rajasthan, India</span>
            </div>
            <hr style={{ width: '320px' }} />
          </div>

          <div className="cart-total-charge cart-right-main-item">
            <h6>Total</h6>
            <h6>{calculateTotal() + 250}</h6>
          </div>

          <div className="cart-checkout">
            <button className='cart-checkout-btn btn btn-light' type='submit'>Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart