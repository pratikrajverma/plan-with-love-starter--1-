import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

function App(){

  const[tours,setTours] = useState(data)

  function removeTour(id)
  {
      const newTours = tours.filter((tour)=>{
        return id!==tour.id
      })

      setTours(newTours);
  }

 

  if(tours.length === 0)
  {
    return(
      <div className="refresh">
         <h2>No tour left</h2>
         <button className="ref-btn" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }



  return (
  <div>

    <Tours tours={tours} removeTour={removeTour}></Tours>     {/*ye mera full UI show karega*/}

  </div>
  );    
};

export default App;
