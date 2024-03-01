import React from "react";
import { mobileData } from "../data/mobiles";

const Mobile = () => {
  const firstFiveImages = mobileData.slice(0, 5);

  return (
    <>
      <h2>Mobiles</h2>
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

export default Mobile;
