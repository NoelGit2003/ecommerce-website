import React from 'react'
import './ProductCard.css'

const ProductCard = () => {
    const currency = 'Rs. '

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


    const card =
    {
        name: 'Drone',
        price: 100000,
        rating: 5,
        image: "https://static.wixstatic.com/media/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg/v1/fill/w_331,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg"
    }


    return (
        <section className='bp-cards'>
            <div className="bp-card">
                <div className="bp-card-details">
                    <div className="bp-card-img">
                        <img src={card.image} alt="bp_image" className="bp-card-image" />
                    </div>

                    <div className="bp-card-name">{card.name}</div>
                    <div className="bp-card-price">
                        <span>{currency}</span>
                        <span>{card.price}</span>
                    </div>
                    <div className="bp-card-rating">
                        <span className='bp-star-rating'>
                            {renderStars(card.rating)}
                        </span>
                        <span className="bp-card-rating-number">{card.rating}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCard