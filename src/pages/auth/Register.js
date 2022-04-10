import React, { useState,useEffect } from "react";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import DefaultLayout from "../../components/nav/Header";

const Register = ({history}) => {
  const [email, setEmail] = useState("");
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user]);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const actionCodeSettings = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };
 
    await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings);
 
    window.localStorage.setItem("emailForRegistration", email);
 
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration`
    );
 
    setEmail("");
  };
 
  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        autoFocus
      />

      <br />
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );

  return (
    <DefaultLayout>

    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
    </DefaultLayout>
  );
};

export default Register;

