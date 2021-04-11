import React from 'react';
import {Container,Carousel} from 'react-bootstrap';
import Elem from './styles';
import homeBanner from '../../assets/images/homeBanner.png';


const HomeBanner = () => {
  
  return (
        <Elem.BannerWrapper>    
           
              <Carousel interval={100000}>
                <Carousel.Item>
                    {/* <img
                      className=""
                      src={homeBanner}
                      alt="First slide"
                    /> */}
                  <Container>
                    
                    <Carousel.Caption>
                      <h3>Welcome to </h3>
                      <p>Celebrations Marketplace 1</p>
                    </Carousel.Caption>
                  </Container>
                </Carousel.Item>
                <Carousel.Item>
                  {/* <img
                      className="d-block w-100"
                      src={homeBanner}
                      alt="Second slide"
                    /> */}
                  <Container>                    
                    <Carousel.Caption>
                      <h3>Welcome to </h3>
                      <p>Celebrations Marketplace 2</p>
                    </Carousel.Caption>
                  </Container>
                </Carousel.Item>
                <Carousel.Item>
                  {/* <img
                      className="d-block w-100"
                      src={homeBanner}
                      alt="Third slide"
                    /> */}
                  <Container>
                    <Carousel.Caption>
                      <h3>Welcome to </h3>
                      <p>Celebrations Marketplace 3</p>
                    </Carousel.Caption>
                  </Container>
                </Carousel.Item>                  
              </Carousel>
        </Elem.BannerWrapper>
  );
}

export default HomeBanner;