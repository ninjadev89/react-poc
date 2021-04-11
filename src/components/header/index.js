import React from 'react';
import {Nav,Navbar,Container} from 'react-bootstrap';
import Elem from './styles';
import logo from '../../assets/images/header-logo.png';


const Header = () => {
  
  return (
        <Elem.HeaderWrapper>    
            <Container> 
                <Navbar fixed="top" sticky="top" expand="md" className={'px-0'}>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Get the App</Nav.Link>
                            <Nav.Link href="#link">About Us</Nav.Link> 
                            <Nav.Link href="#SignIn">Sign in</Nav.Link> 
                            <Nav.Link >Pune</Nav.Link>            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>  
            </Container> 
        </Elem.HeaderWrapper>
  );
}

export default Header;