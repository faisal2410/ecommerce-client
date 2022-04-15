import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";
import { userCart } from "../functions/user";
import DefaultLayout from "../components/nav/Header";
import Glowing from "../components/Glowing/index";

const Cart = ({ history }) => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };
  const saveCashOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    dispatch({
      type: "COD",
      payload: true,
    });
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Brand</th>
          <th scope="col">Color</th>
          <th scope="col">Count</th>
          <th scope="col">Shipping</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>

      {cart.map((p) => (
        <ProductCardInCheckout key={p._id} p={p} />
      ))}
    </table>
  );

  return (
    <DefaultLayout>
      <div className="container-fluid pt-2">
        <div className="row">
          <div className="col-md-12" >
            <Glowing></Glowing>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8" data-aos="fade-right" >
            <h4>Cart / {cart.length} Product</h4>

            {!cart.length ? (
              <p>
                No products in cart. <Link to="/shop">Continue Shopping.</Link>
              </p>
            ) : (
              showCartItems()
            )}
          </div>
          <div className="col-md-4" data-aos="fade-right">
            <h4>Order Summary</h4>
            <hr />
            <p>Products</p>
            {cart.map((c, i) => (
              <div key={i}>
                <p>
                  {c.title} x {c.count} = ${c.price * c.count}
                </p>
              </div>
            ))}
            <hr />
            Total: <b>${getTotal()}</b>
            <hr />
            {user ? (
              <>
                <button
                  onClick={saveOrderToDb}
                  className=" mt-2 reg-btn w-100"
                  disabled={!cart.length}
                >
                   Proceed to Checkout
                </button>
                <br />
                <button
                  onClick={saveCashOrderToDb}
                  className=" mt-2 mb-2 reg-btn w-100"
                  disabled={!cart.length}
                >
                 Pay Cash on Delivery
                </button>
              </>
            ) : (
              <button className="btn reg-btn w-100 mt-2 mb-2">
                <Link
                  to={{
                    pathname: "/login",
                    state: { from: "cart" },
                  }}
                  className="text-white"
                >
                  Login to Checkout
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Cart;
