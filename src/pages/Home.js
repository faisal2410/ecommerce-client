import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DefaultLayout from '../components/nav/Header';

const Home = () => {
 
  return (
    <DefaultLayout>  
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">   
          <h4 className="py-3 d-flex justify-content-center display-5 fw-bold shadow">
            New Arrivals
          </h4>
          <NewArrivals />

          <h4 className="py-3 d-flex justify-content-center display-5 fw-bold shadow">
            Best Sellers
          </h4>
          <BestSellers />

          <h4 className="py-3 d-flex justify-content-center display-5 fw-bold shadow">
            Categories
          </h4>
          <CategoryList />

          <h4 className="py-3 d-flex justify-content-center display-5 fw-bold shadow">
            Sub Categories
          </h4>
          <SubList />

          <br />
          <br />
        </div>
      </div>
    </div>
    </DefaultLayout>
  );
};

export default Home;
