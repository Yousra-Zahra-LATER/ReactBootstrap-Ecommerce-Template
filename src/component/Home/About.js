import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import beef from '../../assets/beef.jpg';
import aboutt from '../../assets/aboutt.png';
import "./About.css";
import { faCheck, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Data from './Data';
export default function About() {

  const blogitem=Data.map((item)=>{
    return(
   
        <Col md={4}>
          <div className='box'>
        <img src={item.img}/>
        <h5>{item.title}</h5>
        <span>{item.price}</span>
        <h6>{item.time}</h6>
        </div>
        <button><a href='#'> Order Now </a></button>
        </Col>
    
    )
  
})
 
  return (
    <Fragment>
     <section className="about">
            <Container  >
              <Row className="justify-content-md-center">
                <Col  md={4} ><img src={beef} title="about" alt='About' /></Col>
                <Col md={6} >
                <h2>We pride ourselves on making real food from the best ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <button > <a href="#">Learn More </a> </button>
                </Col>
              </Row>   
            </Container>
    </section>
   
    <div className='space100'></div>
    <section className="ingredients" >
          <Container >
              <Row className="justify-content-md-center">
                <Col md={4} >
                <h2>We make everything by hand with the best possible ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <ul>
                    <li> <FontAwesomeIcon icon={faCheck} size="1x" color="#860A35" />  Etiam sed dolor ac diam volutpat.</li>
                    <li><FontAwesomeIcon icon={faCheck} size="1x" color="#860A35" />  Erat volutpat aliquet imperdiet.</li>
                    <li><FontAwesomeIcon icon={faCheck} size="1x" color="#860A35" />  purus a odio finibus bibendum.</li>
                    </ul>
              
                <button > <a href="#">Learn More </a> </button>
                </Col>
                <Col md={6}><img src={aboutt} title="about" alt='About' /></Col>
              </Row>   
            </Container>
      </section>
      
      
      <section className="paralex" >
          <Container>
          <Row>
          <Col md={12}>
            <h2>When a man's stomach is full it makes  <br/>
                     difference whether he is rich or poor. </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio  <br/>
                   finibus bibendum in sit amet leo. Mauris feugiat erat tellus.

            </p>
              <a href='#'> <FontAwesomeIcon icon={faPlay} />  Watch Our Story</a>
          </Col>
        </Row>
            </Container>
      </section>


      <section className="blog" >
          <Container>
          <Row className="row">
          <Col md={12}>
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
            <Row className="justify-content-md-center">
                 {blogitem}
            </Row>
            </Container>
      </section>


      </Fragment>
  )
}
