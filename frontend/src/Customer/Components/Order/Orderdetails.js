import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Addresscard from "../AddressCard/Addresscard";
import Ordertraker from "./Ordertracker";
import { deepPurple } from "@mui/material/colors";
const Orderdetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl y-7">Delivery Address</h1>
        <Addresscard />
      </div>
      <div className="py-20">
        <Ordertraker />
      </div>
      <Grid container className="space-y-5">
        {[1, 1, 1, 1].map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src=""
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">title</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: xl</span>
                  </p>
                  <p>Seller: zara</p>
                  <p>₹1200 </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                  className="flex items-center cursor-pointer"
                >
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Orderdetails;
