import React from "react";
import { acData } from "../data/ac";

const Acs = () => {
  const firstFiveImages = acData.slice(0, 5);
  return (
    <>
      <h2>Ac</h2>
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

export default Acs;
