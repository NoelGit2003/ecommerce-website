import React from 'react'
import './Services.css'

function Services() {
    return (
        <section className="h-service-main">
            <div className="h-services">

                <div className='h-services-items'>
                    <img src="./Service Images/delivery-bike.png" className='h-services-image' alt="" />
                    <p>Curb-side<br /> pickup</p>
                </div>

                <div className='h-services-items'>
                    <img src="./Service Images/delivery-box.png" className='h-services-image' alt="" />
                    <p>Free shipping on <br /> orders over $50</p>
                </div>

                <div className='h-services-items'>
                    <img src="./Service Images/interest.png" className='h-services-image' alt="" />
                    <p>Low prices <br />guaranteed</p>
                </div>

                <div className='h-services-items'>
                    <img src="./Service Images/service_24-7.png" className='h-services-image' alt="" />
                    <p>Available to <br />you 24/7</p>
                </div>

            </div>
        </section>
    )
}

export default Services