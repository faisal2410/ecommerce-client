import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Hero.css"

const Hero = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div>
              <Carousel
                className=""
                autoPlay={true}
                showArrows={false}
                infiniteLoop
                animationHandler="fade"
                transitionTime="3000"
                interval="5000"
              >
                <div className="carousel-content">
                  <img className="img-fluid" src="../daraz-img1.jpg"  />
                </div>
                <div className="carousel-content">
                  <img className="img-fluid" src="../daraz-img2.jpg" />
                </div>
                <div className="carousel-content">
                  <img className="img-fluid" src="../daraz-img3.jpg" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
