import React from "react";
import "./aboutus.css";
const Aboutus = () => {
  return (
    <>
      <h1 style={{ fontFamily: "Times New Roman" }}>About Us</h1>
      <div className="aboutUs">
        <img
          src="https://motif-blog-assets.motifphotos.com/motif-blog/wp-content/uploads/2018/12/iStock-902506410_1200x800px-1200x800.jpg?x98050"
          alt="err"
          width={1220}
          height={650}
        ></img>
        <div style={{ display: "flex" }}>
          <p
            style={{
              width: "1000px",
              color: "rgb(120 116 107)",
              fontSize: "15px",
              textAlign: "justify",
              marginTop: "20px",
              marginLeft: "120px",
            }}
          >
            Welcome to "kiki" a blog dedicated to capturing the mesmerizing
            beauty of sunset through breathtaking photographs. Here, we embark
            on a visual journey that celebrates the fleeting moments of magic as
            the sun dips below the horizon. Each post on kiki is a love letter
            to the golden hour, showcasing stunning images that showcase the
            kaleidoscope of colors and textures painted across the sky. Whether
            it's the soft pastel hues of a tranquil beach scene or the fiery
            blaze of a sun setting behind city skyscrapers, our goal is to
            transport you to the serene and awe-inspiring landscapes that we
            have the privilege to witness. Our team of passionate photographers
            is dedicated to chasing the perfect sunset, seeking out picturesque
            locations and vantage points to capture nature's masterpiece.
            Through our lenses, we aim to evoke emotion, stir the soul, and
            inspire wonder in our audience. But kiki is more than just a
            collection of photographs; it's a community of sunset enthusiasts
            united by our shared appreciation for the beauty of twilight. We
            invite you to join us on this journey, to share your own sunset
            experiences, and to immerse yourself in the beauty of nature's daily
            spectacle. So sit back, relax, and let the magic of sunset unfold
            before your eyes as we serenade you with the most stunning sunset
            photographs from around the world. Welcome to kiki - where every
            sunset is a masterpiece waiting to be discovered.
          </p>
        </div>
        <div
          style={{
            textAlign: "left",
            marginLeft: "0px",
            marginTop: "30px",
            backgroundColor: "rgb(167 160 148)",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Contacts</h2>
          <p
            style={{
              fontSize: "25px",
              color: "black",
              marginLeft: "50px",
              marginTop: "30px",
            }}
          >
            Fill out the form below so we could reach you:{" "}
          </p>

          <form id="form" className="form" style={{ marginLeft: "70px" }}>
            <label for="Name">Name*</label>
            <br />
            <input
              type="text"
              placeholder="Enter your full name."
              class="name"
            />
            <br />
            <label for="Email">Email*</label>
            <br />
            <input
              type="email"
              placeholder="Enter your email address"
              class="email"
            />
            <br />
            <label for="Coment">Comment:</label>
            <br />
            <textarea type="text" class="comment" />
            <br />
            <button
              style={{
                width: "100px",
                height: "40px",
                border: "1px solid rgb(44, 140, 219)",
                borderRadius: "8px",
                color: " aliceblue",
                backgroundColor: "rgb(44, 140, 219)",
                marginBottom: "30px",
              }}
              type="submit"
              onClick="handleSubmit()"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
