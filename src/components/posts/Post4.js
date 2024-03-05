import React from 'react'
import { Card ,Button} from 'react-bootstrap'
const Post4 = () => {
  return (
    <div>
      <Card style={{width:"40rem",margin:"20px"}}>
        <Card.Body>
          <Card.Img src="https://miro.medium.com/v2/resize:fit:1400/1*9UYnklwYxaX6nQyGY_ZLjg.png"></Card.Img>
          <Card.Title style={{margin:"20px"}}>
           Ponyo
          </Card.Title>
          <Card.Text style={{color:"black"}}>"Ponyo" is a visually stunning animated film directed by Hayao Miyazaki and produced by Studio Ghibli. 
            Released in 2008, the film follows the magical journey of a goldfish named Ponyo who desires to become human after encountering a young boy named Sosuke.</Card.Text>
        <Button style={{marginLeft:"10px"}}>Read More</Button>
        </Card.Body>
        </Card>
    </div>
  )
}

export default Post4
