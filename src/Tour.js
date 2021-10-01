import React, { useState } from 'react';

const Tour = (props) => {
  // console.log(props);
  const {id, name, price, image, info, removeTourHandler} = props; 
  const [readMore, setReadMore] = useState(false);  
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
      <p>
        {readMore ? info : `${info.substring(0,200)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : 'show more'}
        </button>
        </p>
      <button className="delete-btn" onClick={() => removeTourHandler(id)}>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;