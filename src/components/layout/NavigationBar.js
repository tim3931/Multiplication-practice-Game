import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    .navbar {
        background: #008161;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: white;
        font-weight: bold;
        &:hover {
            color: #fe3c01;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar>
            <Navbar.Brand href="/">Multiplication Table</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Student">Student</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Monitor">Monitor</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

export default NavigationBar;
