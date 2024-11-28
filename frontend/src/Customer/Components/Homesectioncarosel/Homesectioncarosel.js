import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import Homesectioncard from "../Homesectioncard/Homesectioncard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Button } from "@mui/material";


const Homesectioncarosel = ({data ,Sectionname}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item ,Sectionane}) => setActiveIndex(item);
  const items = data
    .slice(0, 10)
    .map((item) => <Homesectioncard product={item} />);
  return (
    <div className="">
      <h2 className="font-bold text-3xl">{Sectionname}</h2>
      <div className="relative  p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 bg-[]"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            color="white"
            aria-label="next"
          >
            <ArrowForwardIosIcon
              className=""
              sx={{ transform: "rotate(-90deg)" }}
            />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-[]"
            color="white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%)  rotate(90deg)",
            }}
            aria-label="next"
          >
            <ArrowForwardIosIcon
              className=""
              sx={{ transform: " rotate(90deg)" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Homesectioncarosel;
