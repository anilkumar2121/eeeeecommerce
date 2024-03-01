import React from "react";
import { fridgeData } from "../data/fridge";

const Fridge = () => {
  const firstFiveImages = fridgeData.slice(0, 5);
  return (
    <>
      <h2>Mens Wear</h2>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="imgbox">
              <img className="proImage" src={item.image} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Fridge;
