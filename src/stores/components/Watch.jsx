import React from "react";
import { watchData } from "../data/watch";

const Watch = () => {
  const firstFiveImages = watchData.slice(0, 5);

  return (
    <>
      <h2>Watches</h2>
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

export default Watch;
