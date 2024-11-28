import React from "react";
import { Avatar } from "@mui/material";
import { Rating, Box, Typography, Grid } from "@mui/material";
const Productreviewcard = () => {
  return (
    <div>
      {" "}
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              src=""
            >
              r
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">ram</p>
              <p className="opacity-70">April 5, 2023</p>
            </div>
            <div>
              <Rating
                value={4.5}
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />
            </div>
            <p>this is nice tshirt</p>
          </div>
        </Grid>
      </Grid>
      <div className="col-span-1 flex"></div>
    </div>
  );
};

export default Productreviewcard;
