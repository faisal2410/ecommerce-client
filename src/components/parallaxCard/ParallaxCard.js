import React from 'react';
import { Parallax, Background } from "react-parallax";

const styles = {
  fontFamily: 'Montserrat', 
    textAlign: "center"
  };
  const insideStyles = {
    background: "transparent",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color:"white",
    fontSize:"60px"
  };

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";


const ParallaxCard = () => {
    return (
        <div style={styles}>  
    <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 200 }}>
      <div style={insideStyles}>Lead Shop</div>       
      </div>
    </Parallax>
     </div>
    );
};

export default ParallaxCard;