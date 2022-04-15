import React from 'react';
import "./NewsBanner.css";

const NewsBanner = () => {
    return (
        <div>
              <div className="coffieshop-parent">
        <div className="row h-100 align-items-center">
          <div
            className="col-md-6 coffieshop-text-part p-5"
            data-aos="slide-down"
          >
            <h1>
              Its not just a <b> Blog</b>
            </h1>
            <h2>
              Its <b>SOMETHING</b> more....
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta a
              accusamus corporis cumque incidunt sequi, nemo quos nobis velit?
              
            </p>
          </div>
          <div
            className="col-md-6 h-75 flex align-items-center coffie-cup"
            data-aos="slide-up"
          >
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_dauput1g.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>

          <div className="circle"></div>
        </div>
      </div>

        </div>
    );
};

export default NewsBanner;