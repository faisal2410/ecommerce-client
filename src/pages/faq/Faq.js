import React from "react";
import DefaultLayout from "../../components/nav/Header";
import FaqCard from "../../components/faq/Faq";
import "./Faq.css";

const Faq = () => {
  const name = ["F", "A", "Q"];
  return (
    <DefaultLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="colors-container">
              <div className="row h-100 align-items-center justify-content-center">
                {name.map((letter, index) => {
                  return (
                    <div className={`col-md-2 letter letter${index}`}>
                      {letter}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" data-aos="fade-right">
            <FaqCard></FaqCard>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Faq;
