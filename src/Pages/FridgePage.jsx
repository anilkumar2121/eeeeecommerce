import React from 'react'
import { fridgeData } from '../stores/data/fridge';
import Navbar from '../stores/components/Navbar';

const FridgePage = () => {
    return (
        <>
              <Navbar />
          <div className="pageSection">
            {fridgeData.map((item) => {
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

export default FridgePage