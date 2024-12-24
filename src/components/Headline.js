import React from 'react';
import './Headline.css';

const Headline = () => {
  return (
    <div className="headline-container bg-warning text-dark">
      <marquee behavior="scroll" direction="left">
        💥 Discount Up to 70% on Selected Items! 🛒 Hurry Up! Offer Valid Till Stocks Last! 📢
      </marquee>
    </div>
  );
};

export default Headline;

