import React from 'react'
import { booksData } from '../stores/data/books'
import Navbar from '../stores/components/Navbar';

const BookPage = () => {
    return (
        <>
              <Navbar />
          <div className="pageSection">
            {booksData.map((item) => {
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

export default BookPage