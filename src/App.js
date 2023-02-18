import React, { useEffect, useState } from "react";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
  };

  const deleteTour = (id) => {
    const newTours = tours.filter((tours) => tours.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
};

export default App;
