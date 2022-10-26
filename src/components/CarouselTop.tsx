import Carousel from 'react-bootstrap/Carousel';
import imgSlide01 from '../assets/img/slide/slide-1.jpg'
import imgSlide02 from '../assets/img/slide/slide-2.jpg'
import imgSlide03 from '../assets/img/slide/slide-3.jpg'

const CarouselTop = () => {
  return <>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgSlide01}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgSlide02}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgSlide03}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
}

export default CarouselTop;