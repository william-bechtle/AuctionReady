import React from "react";
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const NavBar = () => {

  const user = useSelector(state => state.user);
  const ip = useSelector(state => state.ip);
  let req = "http://" + ip + ":4000/";

  if(user != null) {
  if (user.username == "cal" || user.username == "dan"){
  return (
    
    <Navbar collapseOnSelect expand="lg" className="navbar-dark bg-dark">
      <a className="navbar-brand" href={req}>
        AuctionReady
      </a>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto d-block">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Nav.Item>
                <Nav.Link eventKey="1" as={Link} to="/">
                  Login
                </Nav.Link>
              </Nav.Item>
            </li>
            <li className="nav-item">
              <Nav.Item>
                <Nav.Link eventKey="2" as={Link} to="/estate">
                  Set Estate
                </Nav.Link>
              </Nav.Item>
            </li>
            <li className="nav-item">
              <Nav.Item>
                <Nav.Link eventKey="3" as={Link} to="/capturepage">
                  Catalog Items
                </Nav.Link>
              </Nav.Item>
            </li>
            <li className="nav-item">
              <Nav.Item>
                <Nav.Link eventKey="4" as={Link} to="/fullmanifest">
                  Full Manifest
                </Nav.Link>
              </Nav.Item>
            </li>
            <li className="nav-item">
              <Nav.Item>
                <Nav.Link eventKey="5" as={Link} to="/catmanifest">
                  By Category
                </Nav.Link>
              </Nav.Item>
            </li>
            <li className="nav-item">
              <Nav.Item>
                <Nav.Link eventKey="5" as={Link} to="/logout">
                  Logout
                </Nav.Link>
              </Nav.Item>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    

  )}
  else {
    return(
      <Navbar collapseOnSelect expand="lg" className="navbar-dark bg-dark">
      <a className="navbar-brand" href={req}>
        AuctionReady
      </a>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto d-block">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Nav.Item>
                <Nav.Link eventKey="1" as={Link} to="/">
                  Login
                </Nav.Link>
              </Nav.Item>
            </li>
            <li className="nav-item">
              <Nav.Item>
                <Nav.Link eventKey="4" as={Link} to="/fullmanifest">
                  Full Manifest
                </Nav.Link>
              </Nav.Item>
            </li>
            <li className="nav-item">
              <Nav.Item>
                <Nav.Link eventKey="5" as={Link} to="/catmanifest">
                  By Category
                </Nav.Link>
              </Nav.Item>
            </li>
            <li className="nav-item">
              <Nav.Item>
                <Nav.Link eventKey="5" as={Link} to="/logout">
                  Logout
                </Nav.Link>
              </Nav.Item>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}
else {
  return(
    <Navbar collapseOnSelect expand="lg" className="navbar-dark bg-dark">
      <a className="navbar-brand" href={req}>
        AuctionReady
      </a>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto d-block">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Nav.Item>
                <Nav.Link eventKey="1" as={Link} to="/">
                  Login
                </Nav.Link>
              </Nav.Item>
            </li>
            <li className="nav-item">
              <Nav.Item>
                <Nav.Link eventKey="4" as={Link} to="/fullmanifest">
                  Full Manifest
                </Nav.Link>
              </Nav.Item>
            </li>
            <li className="nav-item">
              <Nav.Item>
                <Nav.Link eventKey="5" as={Link} to="/catmanifest">
                  By Category
                </Nav.Link>
              </Nav.Item>
            </li>
            <li className="nav-item">
              <Nav.Item>
                <Nav.Link eventKey="5" as={Link} to="/logout">
                  Logout
                </Nav.Link>
              </Nav.Item>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
};
export default NavBar;