import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserCheck, faBriefcase, faDiagramProject, faArrowAltCircleUp,  } from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = () => {

    return (
        <React.Fragment>
            <Navbar bg="dark" variant='dark' expand="md" id="navbar" className='sticky-md-top'>
                <Container>
                    <Navbar.Brand href="">Portofolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/* <Nav.Link href=""><FontAwesomeIcon icon={faHouse} className='me-2'/>Home</Nav.Link> */}
                        <Link to="about" smooth={true} offset={-70}><Nav.Link><FontAwesomeIcon icon={faUserCheck} className='me-2'/>Tentang</Nav.Link></Link>
                        <Link to="skill" smooth={true} offset={-20}><Nav.Link><FontAwesomeIcon icon={faDiagramProject} className='me-2'/>Keahlian</Nav.Link></Link>
                        <Link to="project" smooth={true} offset={-10}><Nav.Link><FontAwesomeIcon icon={faBriefcase} className='me-2'/>Projek</Nav.Link></Link>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Link to="about" smooth={true} offset={-120}><FontAwesomeIcon icon={faArrowAltCircleUp} className="text-dark arrowTop"/></Link>
            </div>
        </React.Fragment>
    );
}

export default NavbarComponent;