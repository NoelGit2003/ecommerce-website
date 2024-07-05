import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <section className='h-banner'>
            <div className="hb-item">
                <img src="https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_641,h_638,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg" alt="" />
                <div className="b-text">
                    <h4>Holiday Deals</h4>
                    <h1>Up to <br />30% off</h1>
                    <h5>Selected Smartphone Brands</h5>
                    <button className="btn b-btn" role="button" style={{ color: 'white' }}>Shop now</button>
                </div>
            </div>
            <div className="hb-item">
                <img src="https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_641,h_638,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg" alt="" />
                <div className="b-text">
                    <h4>Holiday Deals</h4>
                    <h1>Up to <br />30% off</h1>
                    <h5>Selected Smartphone Brands</h5>
                    <button className="btn b-btn" role="button" style={{ color: 'white' }}>Shop now</button>
                </div>
            </div>
        </section>
    )
}

export default Banner