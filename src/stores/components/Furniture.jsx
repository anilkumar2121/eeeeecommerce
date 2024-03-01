import React from "react";
import { furnitureData } from "../data/furniture";

const Furniture = () => {
  const firstFiveImages = furnitureData.slice(0, 5);

  return (
   <>
   <h2>Furnitures</h2>
    <div className="proSection">
      {firstFiveImages.map((item) => {
        return (
          <div className="imgbox">
            <img className="proImage" src={item.image} />
          </div>
        );
      })}
    </div></>
  );
};

export default Furniture;
