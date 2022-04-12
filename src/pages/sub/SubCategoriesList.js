import React from "react";
import DefaultLayout from "../../components/nav/Header";
import SubCategriesListCard from "../../components/sub/SubList";
import "./SubCategories.css";

const SubCategoriesList = () => {
  return (
    <DefaultLayout>
      
      <div className="cars-parent container-fluid ">
        <div className="row">
          <div className="col-md-6 part-1">
            <img
              src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80"
              alt=""
            />
          </div>
          <div className="col-md-6 part-2">
            <img
              src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80"
              alt=""
            />
          </div>
          <h1 className="cars-text">CATEGORIES</h1>
        </div>
        <div className="text-seperator"><span>SUB</span></div>
      </div>
      <div className="container-fluid">    
     
        <div className="row">
          <div className="col-md-12">
            <SubCategriesListCard></SubCategriesListCard>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SubCategoriesList;
