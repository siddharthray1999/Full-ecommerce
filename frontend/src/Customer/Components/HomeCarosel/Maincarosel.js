import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./Maincarosaldata";

const Maincarosel = () => {
  const items = mainCarouselData.map((item) => (
    <img src={item.image} alt="" role="presentation" />
  ));
  return (
    <div>
      <AliceCarousel mouseTracking items={items} 
      disableButtonsControls autoPlay autoPlayInterval={1000} infinite />
    </div>
  );
};

export default Maincarosel;
