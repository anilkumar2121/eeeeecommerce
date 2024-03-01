import React from 'react'
import { speakerData} from "../data/speaker"

const Speaker = () => {
    const firstFiveImages = speakerData.slice(0, 5);
    return (
      <>
        <h2>Mens Wear</h2>
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
}

export default Speaker