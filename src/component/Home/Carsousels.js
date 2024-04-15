import Carousel from 'react-bootstrap/Carousel';
import item1 from '../../assets/item.jpg';
import "./Carsousels.css";
import { Col, Row,Container } from 'react-bootstrap';
function DarkVariantExample() {
  return (
    <section className='slider'>
         
        <Container>
            <Row>    
      <Col md={10} lg={12}>
      <h2>Testimonials</h2>
    <Carousel >
      <Carousel.Item>
        <img
          src={item1}
          alt="First slide"
        />
        <Carousel.Caption>
        
        <p>"Indulge in an exceptional culinary experience at a charming restaurant in the heart of the city. "</p>
        <span>Eve Samara
        
        </span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          src={item1}
          alt="Second slide"
        />
        <Carousel.Caption>
       
       
        <p> "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
           </p>

           <span>
        Sima Diva
        </span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={item1}
          alt="Third slide"
        />
        <Carousel.Caption>
        
        
        <p> " Savor exquisite cuisine in a cozy urban eatery."
           </p>
           <span>
        Ali Mohammed
        </span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </Container>
    
    </section>
  );
}

export default DarkVariantExample;