import React from 'react'
import { speakerData } from '../stores/data/speaker';
import Navbar from '../stores/components/Navbar';

const SpeakerPage = () => {
    return (
        <>
            <Navbar />
          <div className="pageSection">
            {speakerData.map((item) => {
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

export default SpeakerPage