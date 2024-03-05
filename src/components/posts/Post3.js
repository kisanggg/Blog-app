import React from 'react'
import { Card ,Button} from 'react-bootstrap'
const Post3 = () => {
  return (
    <div>
      <Card style={{width:"40rem",margin:"20px"}}>
        <Card.Body>
          <Card.Img src="https://editors.dexerto.com/wp-content/uploads/2023/06/26/demon-slayer-hashira-training-arc.jpg"></Card.Img>
          <Card.Title style={{margin:"20px"}}>
           Demon Slayer
          </Card.Title>
          <Card.Text style={{color:"black"}}>"Demon Slayer: Kimetsu no Yaiba" is a popular anime series based on the manga of the same name written by Koyoharu Gotouge. 
            The anime was produced by studio Ufotable and directed by Haruo Sotozaki.</Card.Text>
        <Button style={{marginLeft:"10px"}}>Read More</Button>
        </Card.Body>
        </Card>
    </div>
  )
}

export default Post3
