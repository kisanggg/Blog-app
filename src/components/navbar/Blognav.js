import React from "react";
import { Navbar, Nav, Container, Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Luggage, Search, Calendar, Telephone ,Geo, Facebook, Whatsapp, Instagram, Envelope} from "react-bootstrap-icons";
import "./blognav.css";
const Blognav = () => {
  return (
    < >
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ fontSize: "20px" }}>
            <Link to="/Aboutus" className="nav-link">Aboutus</Link>
            <Link to="/Blogs" className="nav-link">Blogs</Link>
            <Link to="/Gallery" className="nav-link">Gallery</Link>
            </Nav>
          </Navbar.Collapse>
          <Form>
            <Search
              size={25}
              style={{ marginRight: "6px", marginTop: "1px" }}
            />
            <input
              style={{ width: "260px" }}
              type="text"
              placeholder="Search"
            ></input>
            <div className="search-icon"></div>
          </Form>
        </Container>
      </Navbar>
      <Navbar.Brand
        style={{ color: "black", fontSize: "100px", fontFamily: "Times New Roman", margin:"1px"}}
      href="#"
      >
        Kiki
      </Navbar.Brand>
      <div className="text" >
        <div className="image">
          <img
            src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxNjk3MDczLXdpa2ltZWRpYS1pbWFnZS1rb3dyZTJnaS5qcGc.jpg"
            alt="err"
            style={{ width: "1260px", height: "600px", marginTop: "10px" }}
          ></img>
          <div className="imageText">
            <h3 style={{ color: "rgb(203 200 190)" }}>A beautiful sunset</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>
                <Calendar style={{ margin: "5px" }} />
                Mar 05,2024
              </p>
              <p>
                <Luggage style={{ margin: "5px" }} />
                Travel
              </p>
            </div>
            <p>
              Sunsets are admired for their beauty and are often considered
              romantic or serene moments....
            </p>
            <button style={{
              width: "fit-content",
              height: "37px",
              border: "1px solid black",
              borderRadius: "5px",
              backgroundColor: "rgb(46, 45, 44)",
              color: "rgb(210, 204, 204)"
            }}
              
            >
              Continue Reading
            </button>
          </div>
        </div>
      </div>
      <div className="card-wrapper" style={{display:"flex",justifyContent:"space-evenly",marginTOp:"30px",backgroundColor:"#e5e5dc"}}>
      <Card style={{width:"45rem",margin:"20px"}}>
        <Card.Body>
          <Card.Img src="https://media.istockphoto.com/id/1146694569/photo/spring-time-colourful-sky-sunset.jpg?s=612x612&w=0&k=20&c=FN4YzENIk5lPwpx8oFNKXWgFPn0jhGZ4LQa4lSlxBv8="></Card.Img>
          <Card.Title style={{margin:"20px"}}>
            Sunset
          </Card.Title>
          <Card.Text style={{color:"black"}}>One of the most captivating aspects of sunset is the colorful display it creates in the sky. 
          As the sun descends, it casts its warm rays across the atmosphere, resulting in a stunning array of colors such as orange, pink, red, and purple.
           These colors are caused by the scattering of sunlight by particles and molecules in the Earth's atmosphere.
           Sunsets are often admired for their scenic beauty, especially when viewed from picturesque locations such as beaches, mountains, deserts, or city skylines. 
           The combination of the setting sun, the horizon, and the surrounding landscape creates a visually striking scene that evokes a sense of tranquility and awe.</Card.Text>
        <Button style={{marginLeft:"10px"}}>Read More</Button>
        </Card.Body>
      </Card>
      <div>
      <Card style={{width:"18rem",margin:"20px"}}>
        <Card.Body>
          <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ006TcB2KFoDkcE1ADKFVRIY3cGLOkgNXv5zxi6B-L6ccybX4lAWWa4_2yJ2a-aralu2E&usqp=CAU"></Card.Img>
          <Card.Title>
            Sunset
          </Card.Title>
          <Card.Text style={{color:"black"}}>Sunset is the time of day when the sun dips below the horizon. 
           </Card.Text>
        <Button style={{marginLeft:"10px"}}>Read More</Button>
        </Card.Body>
      </Card>
      <Card style={{width:"18rem",margin:"20px"}}>
        <Card.Body>
          <Card.Img src="https://bookretreats.com/assets/photo/retreat/0m/37k/37359/p_1263401/1000_1701895524.jpg"></Card.Img>
          <Card.Title>
            Sunset
          </Card.Title>
          <Card.Text style={{color:"black"}}>Sunset is the time of day when the sun dips below the horizon.</Card.Text>
        <Button style={{marginLeft:"10px"}}>Read More</Button>
        </Card.Body>
      </Card> 
      </div>
      </div>
      <div style={{borderTop:"1px solid #e5e5dc",backgroundColor:"#9d9d9d",margin:"30px"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtKHBQhgRF8ghfLcJN6CoBb7PlWEtzunApfg5t7deNnXpmBDuZVJsFjfD_QX6SKXobglU&usqp=CAU" alt="a" width={250} height={200} style={{margin:"20px",marginTop:"40px"}}></img>
        <h5 style={{textAlign:"center"}}><Geo size={25} style={{marginRight:"8px"}}/>Kathmandu, Nepal</h5>
        <h6 style={{textAlign:"center"}}><Envelope size={20} style={{marginRight:"8px"}}/>kiki.ta@gmail.com</h6>
        <h6 style={{textAlign:"center"}}><Telephone size={20} style={{marginRight:"8px"}}/>+9779854123456</h6>
        <button style={{
              width: "fit-content",
              height: "37px",
              marginTop:"30px",
              border: "1px solid black",
              borderRadius: "5px",
              backgroundColor: "rgb(46, 45, 44)",
              color: "rgb(210, 204, 204)"}}>
        Join The Online Community
        </button>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
            <Facebook size={30} style={{margin:"10px",marginBottom:"20px" ,marginTop:"50px"}}/>
            <Whatsapp  size={30} style={{margin:"10px",marginBottom:"20px",marginTop:"50px"}}/>
            <Instagram  size={30} style={{margin:"10px",marginBottom:"20px",marginTop:"50px"}}/>
        </div>
        <h6 style={{marginTop:"10px"}}>© 2024 by KikiTa HaYam -Explore </h6>
        <h6 style={{marginBottom:"20px"}}>KikiTa HaYam - Explore Inc. is a 501(c)(3) Nonprofit Organization <br/> EIN 87-3029570</h6>
      </div>
    </>
  );
};
export default Blognav;
