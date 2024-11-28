import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Customer/Pages/Homepage/Homepage";
import Cart from "../Customer/Components/Cart/Cart";
import Navigation from "../Customer/Components/Navigation/Navigation";
import Footer from "../Customer/Components/Footer/Footer";
import Orderdetails from "../Customer/Components/Order/Orderdetails";
import Product from "../Customer/Components/Product/Product";
import ProductDetails from "../Customer/Components/ProductDetails/ProductDetails";
import Checkout from "../Customer/Components/Checkout/Checkout";
import Order from "../Customer/Components/Order/Order";

const Customerroutes = () => {
  return (
    <div>
      <div>
        {" "}
        <Navigation />
      </div>
      <Routes>
        <Route path="/Login" element={<Homepage />}></Route>
        <Route path="/Register" element={<Homepage />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        <Route
          path="/:lavelOne/:lavelTwo/:lavelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<Orderdetails />}
        ></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Customerroutes;
