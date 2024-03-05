import React from 'react'
import { Card ,Button} from 'react-bootstrap'

const Post2 = () => {
  return (
    <div>
       <Card style={{width:"40rem",margin:"20px"}}>
        <Card.Body>
          <Card.Img src="https://www.hindustantimes.com/ht-img/img/2024/02/07/1600x900/One_Piece_manga_spread_1707300615544_1707300662162.jpg"></Card.Img>
          <Card.Title style={{margin:"20px"}}>
           One Piece
          </Card.Title>
          <Card.Text style={{color:"black"}}>"One Piece" is a widely popular Japanese anime and manga series created by Eiichiro Oda. 
            It follows the adventures of Monkey D. Luffy and his diverse crew of pirates known as the Straw Hat Pirates 
            as they sail across the vast and dangerous seas in search of the legendary treasure known as One Piece.</Card.Text>
        <Button style={{marginLeft:"10px"}}>Read More</Button>
        </Card.Body>
        </Card>
    
    </div>
  )
}

export default Post2
