

  import React from 'react'

  import Carousel from 'react-bootstrap/Carousel';
  import 'bootstrap/dist/css/bootstrap.min.css';
  
const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  
  return (
    <>

     <h1 className='heading'>Services</h1>
    <section className='Services'>
  

<Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src={require('../../../assets/fa1.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={require('../../../assets/fa2.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={require('../../../assets/f3.jpg')}
          alt="Third slide"
        />

<Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={require('../../../assets/f4.jpg')}
          alt="Third slide"
        />
              </Carousel.Item>
    </Carousel>
    </section>
    </>
  )
  }

export default Services