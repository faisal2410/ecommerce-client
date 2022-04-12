import React from "react";
import DefaultLayout from "../../components/nav/Header";
import TermsCard from "../../components/others/terms/Terms";

const Terms = () => {
  return (
    <DefaultLayout>
      <div className="container-fluid" data-aos="fade-right">
        <div className="row">
          <div className="col-md-12">
            <TermsCard></TermsCard>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Terms;
