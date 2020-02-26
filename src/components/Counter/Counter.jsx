import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  };

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  };

  incrementHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.incrementHandler}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
      </div>
    );
  }
}

export default Counter;
