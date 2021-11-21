import React from 'react';
import navigations from '../data/navigation.json';
import { Navbar, Container, Nav as Navigation } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div style={{ backgroundColor: 'rgb(132, 184, 86)' }}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">MAKTABA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navigation className="me-auto">
              {navigations.map((item, index) => {
                return (
                  <div key={index}>
                    <li
                      style={{
                        listStyle: 'none',
                        marginLeft: 35,
                      }}
                    >
                      <Link
                        to={item.link}
                        style={{
                          textDecoration: 'none',
                          color: 'white',
                          fontSize: 17,
                        }}
                      >
                        {item.title}
                      </Link>
                    </li>
                  </div>
                );
              })}
            </Navigation>
            <div>
              <Link to="/Login" className="marklogin">
                Admin
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nav;

// const Navigation = () => {
//   return (

//   );
// };

// export default Navigation;
