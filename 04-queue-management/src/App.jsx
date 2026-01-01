import "./App.css";
import { useState } from "react";
export default function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    //add data to queue
  };

  const updateStatus = (id, newStatus) => {
    //change data in queue
  };

  const removeFromQueue = (id) => {
    //change data from the queue
  };

  return (
    <div className="app">
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage yoour customer's efficiently</p>
      </header>
      <main>
        <h1>Queue Form</h1>
        <h1>Queue Display</h1>
      </main>
    </div>
  );
}
