import React from "react";
import { Box, Grid } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";

import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
const Ordercard = () => {
  const navigate = useNavigate();
  return (
    <div
      onclick={() => navigate(`/account/order/${5}`)}
      className="p-5 shadow-lg hover:shadow-2xl border "
    >
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70"
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">sckdksfsk</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: xl</span>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹1200</p>
        </Grid>
        <Grid item xs={4}>
          {/* <p className="space-y-2 font-semibold">
            {order?.orderStatus === "DELIVERED" ? (
              <>
                <FiberManualRecordIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span>Delivered On Mar 03</span>
              </>
            ) : (
              <>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span>Expected Delivery On Mar 03</span>
              </>
            )}
          </p> */}
          <p className="text-xs">Your Item Has Been Delivered</p>
          {/* {item.orderStatus === "DELIVERED" && (
            <div className="flex items-center text-blue-600 cursor-pointer">
              <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
              <span>Rate & Review Product</span>
            </div>
          )} */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Ordercard;
