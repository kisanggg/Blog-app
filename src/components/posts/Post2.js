import React from "react";
import { Card, Button } from "react-bootstrap";

const Post2 = () => {
  return (
    <div>
      <Card style={{ width: "40rem", margin: "20px" }}>
        <Card.Body>
          <Card.Img src="https://scng-dash.digitalfirstmedia.com/wp-content/uploads/2020/01/OCR-L-SUNSETS-0104-02-LO.jpg"></Card.Img>
          <Card.Title style={{ margin: "20px" }}>Ibiza</Card.Title>
          <Card.Text style={{ color: "black" }}>
            Capturing the sunset in Ibiza is a truly magical experience.
            Renowned for its stunning coastline, Ibiza offers a plethora of
            breathtaking spots to witness the sun descending into the horizon,
            painting the sky with an array of vibrant colors.
          </Card.Text>
          <Button style={{ marginLeft: "10px" }}>Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post2;
