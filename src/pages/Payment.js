import React, { useEffect, useState } from "react";
import { createPaymentIntent } from "../functions/sslcom";
import { useSelector, useDispatch } from "react-redux";

const Payment = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    createPaymentIntent(user.token).then((res) => {
      console.log("create payment intent", res.data);
      setClientSecret(res.data);
    });
  }, []);
  return (
    <div className="container p-5 text-center">
      <p>Complete your purchase</p>
    </div>
  );
};

export default Payment;
