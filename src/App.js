import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'; 
function App() {
  const [tours, setTours] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const removeTour = id => {
  setTours(tours.filter(tour => tour.id !== id));
  }

  const fetchTours = () => {
    axios.get(url)
    .then(resp => {
      // console.log(resp);
      if(resp.status >=200 && resp.status < 300) {
        setIsLoading(false); 
        setTours(resp.data);
      } else {
        setIsLoading(false);
        throw new Error(resp.statusText); 
      }
    })
    .catch(err => {
      console.log(err); 
    })
  }
  
  useEffect(() => {
    fetchTours();
  }, []);
  // console.log('render app');
  
  return (
    <>
    <main>
      {isLoading ? <Loading /> : (tours.length === 0) ? 
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>Refresh</button>
        </div>
      </main>
     :<Tours tours={tours} 
      removeTourHandler={removeTour}/>}
    </main>

    </>
  );
}

export default App
