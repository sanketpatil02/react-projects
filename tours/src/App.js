import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);

    try{
      const response = await fetch(url);
      const tours1 = await response.json();
      setLoading(false);
      setTours(tours1);
    } catch(error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect( ()=>{
    fetchTours();
  }, []);

  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )

  }

  return(
    <main>
      <Tours tours={tours} />
    </main>
  )
}

export default App
