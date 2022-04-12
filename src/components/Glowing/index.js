import React from "react";
// import Layout from "../Layout/index";
import "./index.css";
const Glowing=()=> {
  return (
    
      <div className="glowing-parent">
        <div className="h-50">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_SkhtL8.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="glowing-text-part">
              <h1>LEAD SHOP</h1>
              <h4>Hassle-Free Shopping Experience</h4>
        </div>
      </div>

  );
}

export default Glowing;
