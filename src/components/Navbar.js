import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar>
            <Navbar.Brand href="#/">
                <div className="icon"></div>
            </Navbar.Brand>
                <Nav className="mr-auto">                               
                    <Nav.Link className="navset" href="#/"></Nav.Link>
                    {/*
                    <Nav.Link className="btn-space" href="#/Works">Works</Nav.Link>
                    <Nav.Link className="btn-space" href="#/Aquarium">Aquarium</Nav.Link>
                    <Nav.Link className="btn-space" href="#/About">About</Nav.Link>
                    */}
                </Nav>
        </Navbar>
    )
}

export default withRouter(Navigation);