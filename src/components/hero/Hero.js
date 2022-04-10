import React from 'react';
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Jumbotron from "../cards/Jumbotron";


const Hero = () => {
    return (
        <div>
        <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">       
          <div>
            <Carousel className="" autoPlay={true} showArrows={false} infiniteLoop animationHandler="fade" transitionTime="3000" interval="5000">
              <div>
                <img className="img-fluid"  src="../image1.webp" />          
                <div className="legend  py-5 d-flex justify-content-center">
                  <Jumbotron
                    text={["Latest Products", "New Arrivals", "Best Sellers"]}
                  />
                </div>               
                <div className="buy-btn  col-md-4 offset-md-4 ">
                <Link  to="/shop" className="btn text-white ">Shop Now</Link>               
                </div>
              </div>
              <div>
                <img className="img-fluid"  src="../image2.webp" />         
                <div className="legend  py-5 d-flex justify-content-center">
                  <Jumbotron
                    text={["Latest Products", "New Arrivals", "Best Sellers"]}
                  />
                </div>
                <div className="buy-btn   col-md-4 offset-md-4">
                <Link to="/shop" className="btn text-white ">Shop Now</Link>
                </div>
              </div>
              <div>
                <img className="img-fluid"  src="../image3.webp" />              
                <div className="legend  py-5 d-flex justify-content-center">
                  <Jumbotron
                    text={["Latest Products", "New Arrivals", "Best Sellers"]}
                  />
                </div>
                <div className="buy-btn  col-md-4 offset-md-4 ">
                <Link to="/shop" className=" btn text-white ">Shop Now</Link>
                </div>
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