import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserCheck, faBriefcase, faDiagramProject, faArrowAltCircleUp,  } from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = () => {

    return (
        <React.Fragment>
            <Navbar bg="dark" variant='dark' expand="lg" id="navbar">
                <Container>
                    <Navbar.Brand href="">Portofolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/* <Nav.Link href=""><FontAwesomeIcon icon={faHouse} className='me-2'/>Home</Nav.Link> */}
                        <Link to="about" smooth={true} offset={-20}><Nav.Link><FontAwesomeIcon icon={faUserCheck} className='me-2'/>About Me</Nav.Link></Link>
                        <Link to="skill" smooth={true} offset={40}><Nav.Link><FontAwesomeIcon icon={faDiagramProject} className='me-2'/>Skills</Nav.Link></Link>
                        <Link to="project" smooth={true}><Nav.Link><FontAwesomeIcon icon={faBriefcase} className='me-2'/>Projects</Nav.Link></Link>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Link to="navbar" smooth={true}><FontAwesomeIcon icon={faArrowAltCircleUp} className="text-dark arrowTop"/></Link>
            </div>
        </React.Fragment>
    );
}

export default NavbarComponent;