import { useState } from "react";
import "./App.css";
import { useLoaderData } from "react-router-dom";
import CoffieeCard from "./Components/CoffieeCard";

function App() {
  const coffiees = useLoaderData();
  const [coffess,setCoffess]=useState(coffiees)

  return (
    <div className="m-20">
      <h1 className="text-6xl text-center my-20 text-purple-600">
        Hot Clod Coffiees {coffiees.length}
      </h1>
      <div className="grid md:grid-cols-2">
        {coffiees.map((coffiee) => (
          <CoffieeCard 
          key={coffiee._id}
           coffee={coffiee}
           coffess={coffess}
           setCoffess={setCoffess}
           ></CoffieeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
