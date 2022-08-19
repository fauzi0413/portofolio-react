import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserCheck, faBriefcase, faDiagramProject } from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = () => {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="">Portofolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/* <Nav.Link href=""><FontAwesomeIcon icon={faHouse} className='me-2'/>Home</Nav.Link> */}
                        <Nav.Link href=""><FontAwesomeIcon icon={faUserCheck} className='me-2'/>About Me</Nav.Link>
                        <Nav.Link href=""><FontAwesomeIcon icon={faDiagramProject} className='me-2'/>Skills</Nav.Link>
                        <Nav.Link href=""><FontAwesomeIcon icon={faBriefcase} className='me-2'/>Projects</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default NavbarComponent;