import React from "react";
import DefaultLayout from "../../components/nav/Header";
import MissionCard from "../../components/others/mission/Mission";

const Mission = () => {
  return (
    <DefaultLayout>
      <div className="container-fluid" data-aos="fade-right">
        <div className="row">
          <div className="col-md-12">
            <MissionCard></MissionCard>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Mission;
