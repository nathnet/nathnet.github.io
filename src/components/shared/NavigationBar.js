import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return(
        <>
            <Navbar className="justify-content-around">
                <Navbar.Brand className="ml-5">
                    Tung Netmaneesuk
                </Navbar.Brand>
                <Navbar.Collapse className="px-5 ml-auto mr-5 flex-grow-0">
                    <Nav>
                        <Nav.Link 
                            className="px-5"
                            as={Link}
                            to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            className="px-5"
                            as={Link}
                            to="/about">
                            About
                        </Nav.Link>
                        <Nav.Link 
                            className="px-5"
                            as={Link}
                            to="/portfolio">
                            Portfolio
                        </Nav.Link>
                        <Nav.Link 
                            className="px-5"
                            as={Link}
                            to="/contact">
                            Contact
                        </Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavigationBar;