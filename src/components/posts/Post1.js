import React from 'react'
import { Card ,Button} from 'react-bootstrap'

const Post1 = () => {
  return (  
    <div>
        <Card style={{width:"40rem",margin:"20px"}}>
        <Card.Body>
          <Card.Img src="https://i.guim.co.uk/img/media/70c3d88f9b85c23dca04051db41edf6c101de4a9/102_0_2000_1200/master/2000.jpg?width=700&quality=85&auto=format&fit=max&s=457387fd4068cc2812361031751a2b10"></Card.Img>
          <Card.Title style={{margin:"20px"}}>
            Kiki Delivery Service
          </Card.Title>
          <Card.Text style={{color:"black"}}>Kiki's Delivery Service" is a beloved anime film produced by Studio Ghibli and directed by Hayao Miyazaki. 
            Released in 1989, the film follows the story of a young witch named Kiki who sets out on a journey to live on her own for a year, as is customary for witches in her world. 
            Accompanied by her black cat Jiji, Kiki settles in the seaside town of Koriko and starts a delivery service using her flying broomstick.</Card.Text>
        <Button style={{marginLeft:"10px"}}>Read More</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Post1
