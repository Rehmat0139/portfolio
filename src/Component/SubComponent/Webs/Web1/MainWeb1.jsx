import React from "react";
import {
  Button,
  DropdownButton,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  Container,
  Dropdown,
} from "react-bootstrap";
import { MapPin, Search, ShoppingCart } from "lucide-react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Link } from "react-router-dom";
import "./Web1.css";

export const MainWeb1 = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ backgroundColor: "#007185" }}
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="mx-3">
          <span>Y</span>
          <span>O</span>
          <span>U</span>
          <span>S</span>
          <span>H</span>
          <span>O</span>
          <span>P</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            <div
              className="d-flex align-items-center"
              data-toggle="modal"
              data-target="#Modal"
              style={{
                cursor: "pointer",
                display: "block",
              }}
            >
              <MapPin size={30} />
              <strong className="ms-2 me-4">Select your address</strong>
              <div
                class="modal fade"
                id="Modal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="ModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="ModalLabel">
                        Select Location
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p>
                        Select a delivery location to see product availability
                        and delivery options
                      </p>
                    </div>
                    <div class="modal-footer">
                      <input type="text" placeholder="Type Your Location" />
                      <Link>
                        <Button>Sign up</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <InputComp />
            <SignIN />
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

function InputComp() {
  const dropDownArr = [
    {
      path: "all-categories",
      item: "All Categories",
    },
    {
      path: "devices",
      item: "Devices",
    },
    {
      path: "appliances",
      item: "Appliances",
    },
    {
      path: "fashions",
      item: "Fashions",
    },
    {
      path: "accessories",
      item: "Accessories",
    },
    {
      path: "pharmacy",
      item: "Pharmacy",
    },
    {
      path: "electronics",
      item: "Electronics",
    },
    {
      path: "jewellery",
      item: "Jewellery",
    },
  ];

  return (
    <InputGroup className="mx-3">
      <DropdownButton
        variant="secondary"
        title="All"
        id="input-group-dropdown-1"
      >
        {dropDownArr.map((ele, id) => (
          <DropdownItem
            key={id}
            as={Link}
            to={`/portfolio/Project/WebComp/${ele.path}`}
          >
            {ele.item}
          </DropdownItem>
        ))}
      </DropdownButton>
      <FormControl
        className="navInput"
        aria-label="Text input with dropdown button"
        placeholder="Search . . . ."
        style={{ width: "100%" }}
      />
      <Button variant="secondary" style={{ borderRadius: "0 10px 10px 0" }}>
        <Search />
      </Button>
    </InputGroup>
  );
}

function SignIN() {
  return (
    <div>
      <li className="dropdown">
        <a href="/" className="dropdown-toggle" data-toggle="dropdown">
          <div className="mt-3 ">
            <div>Hello, Sign in</div>
            <span>
              <strong>Accounts & Lists</strong>
            </span>
          </div>
        </a>

        <ul className="dropdown-menu multi-column columns-2">
          <div className="row">
            <ul
              className="dropdown-head d-flex flex-column justify-content-center align-items-center"
              style={{ textDecoration: "none", listStyle: "none" }}
            >
              <Link className="m-2" style={{ textDecoration: "none" }}>
                <Button variant="warning">Sign In</Button>
              </Link>
              <p className="m-2">
                New Customer ? <Link>Start Here</Link>
              </p>
            </ul>

            <div className="col-sm-6">
              <Dropdown.Divider />
              <ul className="multi-column-dropdown">
                <strong className="mx-3">Your Lists</strong>
                <li>
                  <a href="/">Create a Wish List</a>
                </li>
                <li>
                  <a href="/">Wish From Any Website</a>
                </li>
                <li>
                  <a href="/">Baby Wishlist</a>
                </li>
                <li>
                  <a href="/">Discover Your Style</a>
                </li>
                <li>
                  <a href="/">Explore Showroom</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <Dropdown.Divider />
              <ul className="multi-column-dropdown">
                <strong className="mx-3">Your Account</strong>
                <li>
                  <a href="/">Your Order</a>
                </li>
                <li>
                  <a href="/">Your WishList</a>
                </li>
                <li>
                  <a href="/">Your Recommendations</a>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </li>
    </div>
  );
}

const Cart = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center mx-5"
      style={{ position: "absolute", right: 0 }}
    >
      <ShoppingCart size={40} />
      <h5>Cart</h5>
    </div>
  );
};
