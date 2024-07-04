import React from 'react'
import './Cart.css'

const Cart = () => {

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
    <section className='cart-section'>

      <div className="cart-left">

        <div className='c-left-head-box'>
          <div className="c-left-head">
            <h1>My Cart</h1>
          </div>
          <hr />
        </div>

        <div className="c-left-product">

          {/* product start */}

          <div className="c-left-product-main">

            <div className="c-left-image">
              <img src="https://static.wixstatic.com/media/c22c23_9a6d29ecf9c640b28cc79f695e9fb3c2~mv2.png/v1/fill/w_331,h_331,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_9a6d29ecf9c640b28cc79f695e9fb3c2~mv2.png" alt="" />

              <div className="c-left-detail-head-mobile">
                <div className="c-left-detail-head-mobile">
                  <h4>Tablet</h4>
                  <p>25000</p>
                </div>
              </div>

            </div>

            <div className="c-left-detail c-lpm-item">
              <div className="c-left-detail-head">
                <h4>Tablet</h4>
                <p>25000</p>
              </div>
            </div>

            <div className="c-left-reponsive-product c-left-productCount c-lpm-item">
              <div className="c-left-productCount c-lpm-item">
                <div className="c-left-counter">
                  <div className='c-left-minus'>
                    <img src="./Cart Images/minus.png" alt="-" style={{ width: '10px', paddingBottom: '3px' }} />
                  </div>
                  <div className="c-left-count"> 2 </div>
                  <div className="c-left-plus">
                    <img src="./Cart Images/plus.png" alt="+" style={{ width: '10px', paddingBottom: '3px' }} />
                  </div>
                </div>
              </div>

              <div className="c-left-totalproductprice c-lpm-item">
                <div className="c-left-price"> 35000</div>
              </div>

              <div className="c-left-delete c-lpm-item">
                <img src="./Cart Images/delete.png" alt="Delete" />
              </div>

            </div>

          </div>
          <hr />
          {/* product end */}

        </div>



      </div>

      <div className="cart-right">

        <div>
          <div className="cart-right-head">
            Order Summary
          </div>
          <hr />
        </div>

        <div className="cart-right-main">
          <div className="cart-total cart-right-main-item">
            <p>Subtotal</p>
            <p>2500</p>
          </div>

          <div className="cart-charges cart-right-main-item">
            <div className="cart-delivery">
              <p>Delivery</p>
              <p>250</p>
            </div>
            <div className="cart-gst">
              <p>GST</p>
              <p>50</p>
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
          <h6>25500</h6>
        </div>

        <div className="cart-checkout">
          <button className='cart-checkout-btn btn btn-light' type='submit'>Checkout</button>
        </div>

      </div>

    </section>
  )
}

export default Cart