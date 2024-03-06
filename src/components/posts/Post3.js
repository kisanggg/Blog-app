import React from "react";
import { Card, Button } from "react-bootstrap";
const Post3 = () => {
  return (
    <div>
      <Card style={{ width: "40rem", margin: "20px" }}>
        <Card.Body>
          <Card.Img src="https://media.istockphoto.com/id/675073698/video/sunset-in-naples-florida.jpg?s=640x640&k=20&c=pwwBx4sdTsoCXAwmHFEA8_3wTuXjX7IW99r57oYGntI="></Card.Img>
          <Card.Title style={{ margin: "20px" }}>Maldives</Card.Title>
          <Card.Text style={{ color: "black" }}>
            The Maldives, known for its stunning natural beauty, pristine
            beaches, and crystal-clear waters, offers some of the most
            breathtaking sunsets in the world. As the sun begins its descent
            over the Indian Ocean, the sky transforms into a canvas of vibrant
            colors, casting a magical glow over the horizon.
          </Card.Text>
          <Button style={{ marginLeft: "10px" }}>Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post3;
