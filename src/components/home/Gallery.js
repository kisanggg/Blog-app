import React from "react";

const Gallery = () => {
  return (
    <>
      <h1 style={{ fontFamily: "Times New Roman" }}>Gallery</h1>
      <div style={{display:"grid",grid: "300px /auto auto auto",
  gridGap: "10px",
  backgroundColor: "white",
  padding: "10px"}}>
        <img src="https://alumni.mcmaster.ca/s/1439/images/editor/qotw/2021/sun_5.jpg" alt="err" style={{width:"400px", height:"300px"}}></img>
        <img src="https://images.unsplash.com/photo-1554213808-9c5bab0f624e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3Vuc2V0JTIwb2NlYW58ZW58MHx8MHx8fDA%3D" alt="err" style={{width:"400px", height:"300px"}}></img>
        <img src="https://particle.scitech.org.au/wp-content/uploads/2020/06/photo_2020-06-19_10-32-48-e1592547249260.jpg" alt="" style={{width:"400px", height:"300px"}}></img>
        <img src="https://www.andrewshoemaker.com/images/640/tie-dye-polo-beach-sunset.jpg" alt="" style={{width:"400px", height:"300px"}}></img>
        <img src="https://www.goalcast.com/wp-content/uploads/2021/06/Sunset-quotes.jpg?w=708" alt="" style={{width:"400px", height:"300px"}}></img>
        <img src="https://www.americanoceans.org/wp-content/uploads/2023/09/mexico-sunset-1024x683.jpeg" alt="" style={{width:"400px", height:"300px"}}></img>
        <img src="https://media.istockphoto.com/id/1312703611/photo/sunset-beach.jpg?s=612x612&w=0&k=20&c=QfrlFEfT1S1hfHd1IhnrbEaLOwxDyXk4sKLpZyyBJfY=" alt="" style={{width:"400px", height:"300px"}}></img>
        <img src="https://media.istockphoto.com/id/187484756/photo/seascape-view.webp?b=1&s=612x612&w=0&k=20&c=imgZbhvyxoIzjdvUI_63bzcsfW9tx3tyjfSEaQAWXb0=" alt="" style={{width:"400px", height:"300px"}}></img>
        <img src="https://blog.coverglassusa.com/hs-fs/hubfs/CGU_5_11_17a.jpg?width=744&name=CGU_5_11_17a.jpg" alt="" style={{width:"400px", height:"300px"}}></img>
      </div>
    </>
  );
};

export default Gallery;
