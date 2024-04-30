import React  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./About.css";
import Data from './Data';
export default function BlogSection() {

  const blogitem=Data.map((item)=>{
    return(
   
        <Col md={3} >
        <div className='box'>
        <img src={item.img} alt='itemimage'/>
        <h5>{item.title}</h5>
        <span>{item.price}</span>
        <h6>{item.time}</h6>
        </div>
        <button><a href='#'> Order Now </a></button>
        </Col>
    
    )
  
})
 
  return (
    <div id="exp-section">
      <section className="blog" >
          <Container >
    
          <Row className="row justify-content-center mt-0">
          <Col  md={10}>
            <h2>Explore Our Foods </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et 
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat 
            tellus. Far far away, behind the word mountains, far from the 
            countries Vokalia and Consonantia, there live the blind texts.
             Separated they live in Bookmarksgrove.
            </p> 
          </Col>
        </Row>
            <Row className="justify-content-center"  >
                 {blogitem}
            </Row>
            </Container>
      </section>
    </div>


  )
}
