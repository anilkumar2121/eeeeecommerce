import React from "react";
import { kitchenData } from "../stores/data/kitchen";
import Navbar from "../stores/components/Navbar";

const KitchenPage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {kitchenData.map((item) => {
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

export default KitchenPage;
