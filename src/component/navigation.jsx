import React from 'react';
import navigations from '../data/navigation.json';
import { Navbar, Container, Nav } from 'react-bootstrap';

const navigation = () => {
  return (
    <div style={{ backgroundColor: 'rgb(132, 184, 86)' }}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">MAKTABA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navigations.map((item, index) => {
                return (
                  <div key={index}>
                    <li
                      style={{
                        listStyle: 'none',
                        marginLeft: 35,
                      }}
                    >
                      <a
                        href={item.link}
                        style={{
                          textDecoration: 'none',
                          color: 'white',
                          fontSize: 17,
                        }}
                      >
                        {item.title}
                      </a>
                    </li>
                  </div>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default navigation;
