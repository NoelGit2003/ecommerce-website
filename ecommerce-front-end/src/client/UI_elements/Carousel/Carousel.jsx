import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import './Carousel.css'
// import Image1 from '../../../assets/Carousel Images/ElectronicsImage.jpg'
// import Image2 from '../../../assets/Carousel Images/fashionImage.jpg'
// import Image3 from '../../../assets/Carousel Images/cosmeticsImage.jpg'


export default function Carouselslider() {
    return (
        <section className='carousel'>
            <Carousel fade>
                <Carousel.Item>
                    <img className='carousel-image' src="./Carousel Images/ElectronicsImage.jpg" alt="" />
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='carousel-image' src="./Carousel Images/fashionImage.jpg" alt="" />
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='carousel-image' src="./Carousel Images/cosmeticsImage.jpg" alt="" />
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}