import React from 'react'
import { menData } from '../stores/data/men';
import Navbar from '../stores/components/Navbar';

const MensPage = () => {
    return (
        <>
         <Navbar />
          <div className="pageSection">
            {menData.map((item) => {
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

export default MensPage