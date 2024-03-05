import React from 'react'
import Post1 from './Post1'
import Post2 from './Post2'
import Post3 from './Post3'
import Post4 from './Post4'
import { Col, Container, Row ,Card} from 'react-bootstrap'

const Posts = () => {
  return (
    <Container>
    <Row>
      <Row style={{display:"flex"}}>
        <Col md={8} style={{justifyContent:"center",margin:"20px", marginLeft:"50px"}}>
          <Post1 />
        </Col>
        <Col md={2} className="mt-4 ">
            <Card style={{width:"14rem", marginTop:"18px"}}>
                <Card.Body style={{marginLeft:"8px"}}>
                    <Card.Title>Recent Posts</Card.Title>
                    <ul className="list">
                        <li><a href="#">Kiki Delivery Service</a></li>
                        <li><a href="#">One Piece</a></li>
                        <li><a href="#">Demon Slayer</a></li>
                        <li><a href="#">Ponyo</a></li>
                    </ul>
                </Card.Body>
            </Card>
        </Col>
        </Row>
        <Col md={8} style={{justifyContent:"center",margin:"20px", marginLeft:"50px"}}>
          <Post2 />
        </Col>
        <Col md={8} style={{justifyContent:"center",margin:"20px", marginLeft:"50px"}}>
          <Post3 />
        </Col>
        <Col md={8} style={{justifyContent:"center",margin:"20px", marginLeft:"50px"}}>
          <Post4 />
        </Col>
      </Row>
    </Container>
  )
}

export default Posts
