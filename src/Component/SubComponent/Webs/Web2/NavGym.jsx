import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Web2style.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavGym = () => {
  const NavContent = [
    {
      id: 1,
      name: "Home",
      location: "#banner",
    },
    {
      id: 2,
      name: "About",
      location: "#about",
    },
    {
      id: 3,
      name: "Classes",
      location: "#classes",
    },

    {
      id: 4,
      name: "Gallery",
      location: "#gallery",
    },
    {
      id: 5,
      name: "Pricing",
      location: "#pricing",
    },
    {
      id: 6,
      name: "Contact",
      location: "#contact",
    },
  ];

  return (
    <>
      <Navbar expand="lg" className="bg-body-dark custom-navbar sticky-top">
        <Container>
          <Navbar.Brand className="navbar-brand" href="#">
            <span className="h2 fw-bold" style={{color:'#E5D283'}}> Fitness</span>
            <span className="h1 text-danger iconStyle">+</span>
          </Navbar.Brand>{" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border:'4px solid #E5D283' , color:'red'}} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto d-flex justify-content-between"
              style={{ width: "80%" }}
            >
              {NavContent.map((ele) => (
                <Nav.Link className="text-white fw-bold" key={ele.id} href={ele.location}>
                  {ele.name}
                </Nav.Link>
              ))}
            </Nav>
            <Link>
              <Button className="bg-dark">Get Membership</Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavGym;
