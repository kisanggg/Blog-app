import React from "react";
import { Card, Button } from "react-bootstrap";
const Post4 = () => {
  return (
    <div>
      <Card style={{ width: "40rem", margin: "20px" }}>
        <Card.Body>
          <Card.Img src="https://qph.cf2.quoracdn.net/main-qimg-d829f89e06281cefe47acf50c7d6d73f-lq"></Card.Img>
          <Card.Title style={{ margin: "20px" }}>Italy</Card.Title>
          <Card.Text style={{ color: "black" }}>
            Italy, with its diverse landscapes and stunning coastline, offers a
            plethora of picturesque spots to capture breathtaking sunsets.
            Positano, with its pastel-colored buildings cascading down the
            hillside, offers particularly stunning views as the sun sets over
            the Tyrrhenian Sea.
          </Card.Text>
          <Button style={{ marginLeft: "10px" }}>Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post4;
