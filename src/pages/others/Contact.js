import React from "react";
import DefaultLayout from "../../components/nav/Header";
import ContactCard from "../../components/others/contact/Contact";
import { Parallax, Background } from "react-parallax";
import "./Contact.css";

const Contact = () => {
  return (
  <>
        
      <div className="parallax-parent">
        <Parallax strength={500}>
          <Background>
            <img
              src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1217&q=80"
              alt=""
            />
          </Background>
          <div className="parallax-content">
            <div>
              <h1>GET IN TOUCH</h1>
              <h3>Please Feel Free to Contact with Us</h3>
              <button>Shop Now</button>
            </div>
          </div>
        </Parallax>      
      </div>
      <div className="container-fluid">   
        <div className="row">
          <div className="col-md-12">
            <ContactCard></ContactCard>
          </div>
        </div>
      </div>
      </>
  
  );
};

export default Contact;
