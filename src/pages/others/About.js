import React from "react";
import DefaultLayout from "../../components/nav/Header";
import AboutCard from "../../components/others/about/About";

const About = () => {
  return (
    <DefaultLayout>
      <div className="container-fluid" data-aos="fade-right">
        <div className="row">
          <div className="col-md-12">
            <AboutCard></AboutCard>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default About;
