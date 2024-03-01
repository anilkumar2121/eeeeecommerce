import React from "react";
import { womanData } from "../data/woman";

const Women = () => {
  const firstFiveImages = womanData.slice(0, 5);

  return (
    <>
      <h2>Womens Wear</h2>
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

export default Women;
