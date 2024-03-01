import React from 'react';
import { watchData } from '../stores/data/watch';
import Navbar from '../stores/components/Navbar';

const WatchPage = () => {
    return (
        <>
            <Navbar />
          <div className="pageSection">
            {watchData.map((item) => {
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

export default WatchPage