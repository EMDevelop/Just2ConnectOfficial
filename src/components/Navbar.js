import React, {useState} from 'react'
import {Navbar,Nav,NavDropdown,Button} from "react-bootstrap";
import './Navbar.css'
import MainLogo from '../images/Just2Connect_Logo.png'
import WhitePinkPhone from '../images/icons/WhitePinkPhone.png'

function NavigationBar() {

const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
return (
        <>
        <Navbar className='Navbar' expand="lg">
          <Navbar.Brand href="/">
            <img src={MainLogo} alt="Just2Connect Logo" className="MainLogo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link className = 'NavLinks' href="/">Home</Nav.Link>
            <Nav.Link className = 'NavLinks' href="/TelephoneSystems">Telephone Systems</Nav.Link>
            <Nav.Link className = 'NavLinks' href="/Broadband">Broadband</Nav.Link>
            <NavDropdown title="Other Services" 
              id="collasible-nav-dropdown" 
              show={show}
              onMouseEnter={showDropdown} 
              onMouseLeave={hideDropdown}
              className = 'DropdownNav'
            >
              <NavDropdown.Item className="dropdownItemsNavbar" href="/VideoConferencing">Video Conferencing</NavDropdown.Item>
              <NavDropdown.Item className="dropdownItemsNavbar" href="/MobileSIM">Mobile SIM</NavDropdown.Item>
              <NavDropdown.Item className="dropdownItemsNavbar" href="/VirtualPhoneNumbers">Virtual Phone Numbers</NavDropdown.Item>
              <NavDropdown.Item className="dropdownItemsNavbar" href="/SIPTrunks">SIP Trunks</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className = 'NavLinks' href="/About">About</Nav.Link>
            <Nav.Link className = 'NavLinks' href="/Contact">Contact</Nav.Link>
            </Nav>
            <Button className ='CTAButton' href="tel:+441442573030" >
              <img src={WhitePinkPhone} alt="CTAPhone" className="CTAPhone"/>
              <p className="CTAText">01442 573030</p>
            </Button>
            
          </Navbar.Collapse>
				</Navbar>
        </>
    )
}

export default NavigationBar





