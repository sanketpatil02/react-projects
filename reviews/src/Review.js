import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaNetworkWired, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);
  const {name, image, job, text} = people[index];

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="btn-container">
        <button className="prev-btn" 
          onClick={() => {
            var newIndex = index - 1;
            if(newIndex < 0) newIndex = people.length - 1;
            setIndex(newIndex);
          }}
        >
          <FaChevronLeft />
        </button>

        <button className="next-btn"
          onClick={() => {
            var newIndex = index + 1;
            if(newIndex > people.length - 1) newIndex = 0;
            setIndex(newIndex);
          }}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn'
        onClick={() => {
          var randomNumber = Math.floor(Math.random() * people.length);
          // console.log(randomNumber);
          setIndex(randomNumber);
        }}      
      >surprise me!</button>
    </article>
  )
};

export default Review;
