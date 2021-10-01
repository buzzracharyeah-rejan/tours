import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  // console.log('render tours');
  // console.log(tours);
  // console.log(props);
  // console.log(props.removeTourHandler); 
  return (
      <section>
       <div className="title">
         <h2>our tours</h2>
         <div className="underline"></div>
       </div>
      {props.tours.map(tour => <Tour key={tour.id} {...tour} removeTourHandler={props.removeTourHandler} />)} 
      </section>
  );
};

export default Tours;
