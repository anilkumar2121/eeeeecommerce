import React from 'react'
import { furnitureData } from '../stores/data/furniture';
import Navbar from '../stores/components/Navbar';

const FurniturePage = () => {
    return (
        <>
              <Navbar />
          <div className="pageSection">
            {furnitureData.map((item) => {
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
}

export default FurniturePage