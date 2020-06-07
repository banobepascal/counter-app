import React, {useState } from "react";
import uuid from "uuid";
import "./App.css";

import Counters from "./components/Counter/Counters";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [counters, setCounters] = useState([
    { id: uuid.v4(), value: 0 },
    { id: uuid.v4(), value: 0 },
    { id: uuid.v4(), value: 0 },
    { id: uuid.v4(), value: 0 },
  ]);

  const incrementHandler = (counter) => {
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    setCounters([...counters]);
  };

  const decrementHandler = (counter) => {
    const index = counters.indexOf(counter);
    if (counters[index].value === 0) {
      return counters[index].value;
    }
    counters[index] = { ...counter };
    counters[index].value--;
    setCounters([...counters]);
  };

  const resetHandler = () => {
    counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters([...counters]);
  };

  const deleteHandler = (counterId) => {
    const counter = counters.filter((c) => c.id !== counterId);
    setCounters(counter);
  };

  return (
    <React.Fragment>
      <div className="App">
        <Navbar totalCounters={counters.filter((c) => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={counters}
            onReset={resetHandler}
            onIncrement={incrementHandler}
            onDecrement={decrementHandler}
            onDelete={deleteHandler}
          />
        </main>
      </div>
    </React.Fragment>
  );
};

export default App;
