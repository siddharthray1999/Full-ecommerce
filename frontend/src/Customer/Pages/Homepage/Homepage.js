import React from "react";
import MainCarosel from "../../Components/HomeCarosel/Maincarosel";
import Homesectioncarosel from "../../Components/Homesectioncarosel/Homesectioncarosel";
import { mens_kurta } from "../../../Data/Mens_kurta";


const Homepage = () => {
  return (
    <div>
      <MainCarosel />
      <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10 ">
        <Homesectioncarosel data={mens_kurta} Sectionname={"Mens kurta"}/>
        <Homesectioncarosel data={mens_kurta} Sectionname={"Mens Shirts"}/>
        <Homesectioncarosel data={mens_kurta} Sectionname={"Mens Shoes"}/>
        <Homesectioncarosel data={mens_kurta} Sectionname={"Women Saree"}/>
        <Homesectioncarosel data={mens_kurta} Sectionname={"Women Dress"}/>
      </div>
    
    </div>
  );
};

export default Homepage;
