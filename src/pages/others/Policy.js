import React from "react";
import DefaultLayout from "../../components/nav/Header";
import PolicyCard from "../../components/others/policy/Policy";

const Policy = () => {
  return (
    <DefaultLayout>
      <div className="container-fluid" data-aos="fade-right">
        <div className="row">
          <div className="col-md-12">
            <PolicyCard></PolicyCard>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Policy;
