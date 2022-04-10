import React, { useEffect, useState } from "react";
import { createPaymentIntent } from "../functions/sslcom";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/nav/Header";

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
    <DefaultLayout>
    <div className="container p-5 text-center">
      <p>Complete your purchase</p>
    </div>
    </DefaultLayout>
  );
};

export default Payment;
