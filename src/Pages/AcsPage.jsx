import React, { useState } from "react";
import { acData } from "../stores/data/ac";
import Navbar from "../stores/components/Navbar";
import { Link } from "react-router-dom";
const AcsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (acc) => {
    if (selectedProduct.includes(acc)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== acc));
    } else {
      setSelectedProduct([...selectedProduct, acc]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? acData
      : acData.filter((orange) => selectedProduct.includes(orange.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {acData.map((phone) => {
            return (
              <div className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(phone.company)}
                    onChange={() => companyHandler(phone.company)}
                  />
                  {phone.company}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div>
                <Link to={`/acs/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt="" />
                  </div>
                </Link>
                <div></div>
                {item.model}, {item.company}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AcsPage;
