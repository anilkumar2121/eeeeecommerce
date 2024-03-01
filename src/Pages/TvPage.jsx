import React from 'react'
import { tvData } from '../stores/data/tv'
import Navbar from '../stores/components/Navbar';
 

const TvPage = () => {
    return (
        <>
            <Navbar />
          <div className="pageSection">
            {tvData.map((item) => {
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

export default TvPage