import React, { Component } from "react";
import uuid from "uuid";
import "./App.css";

import Counters from "./components/Counter/Counters";
import Navbar from "./components/Navbar/Navbar";
class App extends Component {
  state = {
    counters: [
      { id: uuid.v4(), value: 0 },
      { id: uuid.v4(), value: 0 },
      { id: uuid.v4(), value: 0 },
      { id: uuid.v4(), value: 0 }
    ]
  };

  incrementHandler = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  decrementHandler = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (counters[index].value === 0) {
      return counters[index].value;
    }
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  resetHandler = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  deleteHandler = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Navbar
            totalCounters={this.state.counters.filter(c => c.value > 0).length}
          />
          <main className="container">
            <Counters
              counters={this.state.counters}
              onReset={this.resetHandler}
              onIncrement={this.incrementHandler}
              onDecrement={this.decrementHandler}
              onDelete={this.deleteHandler}
            />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
