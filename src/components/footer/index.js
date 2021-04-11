import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Elem from './styles';
import logo from '../../assets/images/singleLine.png';


const Footer = () => {
  
  return (
        <Elem.FooterWrapper>    
            <Container> 
                <Row>
                    <Col>
                        <Elem.FooterLogo><img src={logo} alt="Logo" /></Elem.FooterLogo>
                        <Elem.AppStoreButton>App Store</Elem.AppStoreButton>
                        <Elem.AppStoreButton>Play Store</Elem.AppStoreButton>
                    </Col>
                    <Col>
                        <Elem.footerLinks>
                            <h6>Features</h6>
                            <p><a href="#" title="Celebrations">Celebrations</a></p>
                            <p><a href="#" title="Organizers">Organizers</a></p>
                            <p><a href="/Bookings" title="Bookings">Bookings</a></p>
                            <p><a href="/Profile" title="Profile">Profile</a></p>
                            <p><a href="/Community" title="Community">Community</a></p>
                            <p><a href="/TreasureHunt" title="Treasure Hunt">Treasure Hunt</a></p>
                        </Elem.footerLinks>
                    </Col>
                    <Col>
                        <Elem.footerLinks>
                            <h6>Contact</h6>
                            <p>11 East Street, Hyderabad, AP, IN, 225696</p>
                            <p>givesmile@galamela.com</p>
                        </Elem.footerLinks>
                    </Col>
                    <Col>
                        <Elem.footerLinks>
                            <h6>Others</h6>
                            <p><a href="/how-it-works" title="How it works">How it works</a></p>
                            <p><a href="/about-us" title="About Us">About Us</a></p>
                            <p><a href="/Team" title="Team">Team</a></p>
                            <p><a href="/faqs" title="FAQs">FAQs</a></p>
                            <p><a href="/privacy-terms" title="Privacy & Terms">Privacy & Terms</a></p>
                            <p><a href="/feedback" title="Feedback">Feedback</a></p>
                        </Elem.footerLinks>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Elem.RightsText>All Rights Reserved</Elem.RightsText>
                    </Col>
                </Row>
            </Container> 
        </Elem.FooterWrapper>
  );
}

export default Footer;