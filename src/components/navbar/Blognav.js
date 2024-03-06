import React from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { Link,Routes,Route } from "react-router-dom";
import {
  Search
} from "react-bootstrap-icons";
import "./blognav.css";
import Aboutus from "../home/Aboutus";
import Blogs from "../home/Blogs";
import Gallery from "../home/Gallery";
import Home from "../home/Home";

const Blognav = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ fontSize: "20px" }}>
              <Nav.Link as={Link} to="/home" >
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutus">
                Aboutus
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery" >
                Gallery
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form>
          <Search 
              size={25}
              style={{ marginRight: "6px", marginTop: "1px" }}
            />
            <input
              style={{ width: "260px", height:"35px"}}
              type="text"
              placeholder="Search"
            ></input>
          </Form>
        </Container>
      </Navbar>
          <div>
          <Routes>
            <Route path="/" />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
          </div>
      
    </>
  );
};
export default Blognav;
