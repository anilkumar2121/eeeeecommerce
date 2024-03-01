import React from "react";
import { womanData } from "../stores/data/woman";
import Navbar from "../stores/components/Navbar";

const WomensPage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {womanData.map((item) => {
          return (
            <div>
              <div className="pageImg">
                <img src={item.image} alt="" />
              </div>
              <div></div>
              {item.model}, {item.company}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WomensPage;
