import React from "react";
import { Card, Button } from "react-bootstrap";

const Post1 = () => {
  return (
    <div>
      <Card style={{ width: "40rem", margin: "20px" }}>
        <Card.Body>
          <Card.Img src="https://blog.coverglassusa.com/hs-fs/hubfs/CGU_5_11_17a.jpg?width=744&name=CGU_5_11_17a.jpg"></Card.Img>
          <Card.Title style={{ margin: "20px" }}>
            Sunset in California
          </Card.Title>
          <Card.Text style={{ color: "black" }}>
            Sunsets in California are renowned for their breathtaking beauty and
            diverse landscapes. Whether you're on the coast, in the mountains,
            or amidst the urban sprawl, California offers a plethora of stunning
            locations to witness the sun dip below the horizon.
          </Card.Text>
          <Button style={{ marginLeft: "10px" }}>Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post1;
