import React from "react";
import Cartitem from "./Cartitem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="lg:col-span-2 lg:px-5 bg-white">
          <div className=" space-y-3">
            {[1, 1, 1].map((item) => (
              <Cartitem />
            ))}
          </div>
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black ">
                <span>Price (1 item)</span>
                <span>₹123</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">-₹231</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">₹12132</span>
              </div>
            </div>

            <Button
              onClick={handleCheckout}
              variant="contained"
              type="submit"
              sx={{
                padding: ".8rem 2rem",
                marginTop: "2rem",
                width: "100%",
                bgcolor: "#9155fd",
              }}
            >
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
